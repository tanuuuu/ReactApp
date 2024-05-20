import CommandConstants from './CommandConstants';

class ByteInterpreter {
  constructor() {
    // Constructor is kept empty as React Native typically doesn't use constructors for initialization
  }
// WRITE_LEFT_LL_VOLTAGE
  getBytesForVoltages = (power, voltages) => {
    if (!this.validateInputVoltage(voltages)) {
      console.log('ValidateInputVoltage failed');
      return null;
    } else {
      const command =
        power.side === 'RIGHT'
          ? CommandConstants.WRITE_RIGHT_LL_VOLTAGE
          : CommandConstants.WRITE_RIGHT_LL_VOLTAGE;
      const voltageBytes = this.convertVoltagesToByteCode(voltages);

      voltageBytes.forEach(byte => {
        console.log('voltageBytes converted: ' + byte);
      });

      console.log('byte voltageBytes length: ' + voltageBytes.length);

      const payload = this.createPacket(command, voltageBytes);

      payload.forEach(byte => {
        console.log('final data payload: ' + byte);
      });

      return payload;
    }
  };
  convertVoltagesToByteCode(voltages) {
    const payload = new Uint8Array(CommandConstants.PAYLOAD_LENGTH);
    //let q = 587;
//let payload = new Uint8Array(1); // Assuming payload is a Uint8Array of length 1

//payload[0] = ((q & 0x03) << 6) | ((q & 0x03) << 4) | ((q & 0x03) << 2) | (q & 0x03);

// console.log(payload[0])

    const vCodes = [
      this.encodeVoltage(voltages[0]),
      this.encodeVoltage(voltages[1]),
      this.encodeVoltage(voltages[2]),
      this.encodeVoltage(voltages[3]),
    ];
    console.log(`encodeVoltage: ${vCodes[0]}`);
    payload[0] =
      ((vCodes[3] & 0x03) << 6) |
      ((vCodes[2] & 0x03) << 4) |
      ((vCodes[1] & 0x03) << 2) |
      (vCodes[0] & 0x03);

    console.log('byte converted payload:' + payload[0]);
    //console.log("byte converted:" + payload[0].toString(2).padStart(8, '0'));

    payload[1] =Math.floor(vCodes[0] / 4);;
    // console.log("byte converted:" + payload[1].toString(2).padStart(8, '0'));
    payload[2] = vCodes[1] / 4;
    // console.log("byte converted:" + payload[2].toString(2).padStart(8, '0'));
    payload[3] = vCodes[2] / 4;
    // console.log("byte converted:" + payload[3].toString(2).padStart(8, '0'));
    payload[4] = vCodes[3] / 4;
    // console.log("byte converted:" + payload[4].toString(2).padStart(8, '0'));

    payload[5] = CommandConstants.DONT_CARE.charCodeAt(0);
    return payload;
  }

  // encodeVoltage(volt) {
  //     const val = Math.round((volt - CommandConstants.MIN_VOLT) / CommandConstants.DELTA_V);
  //     //String.fromCharCode(val)
  //     // Assuming you want to print the binary representation
  //     console.log('val',val)
  //     return String.fromCharCode(val); // Convert integer value to character
  // }

  encodeVoltage(voltage) {
    console.log('voltageforcode', voltage);
    // Assuming CommandConstants.MIN_VOLT and CommandConstants.DELTA_V are defined elsewhere
    const val = Math.round(
      (voltage - CommandConstants.MIN_VOLT) / CommandConstants.DELTA_V,
    );
    console.log('Gettingval', val);
    // Clamp the value to ensure it's within the range of an ASCII character (0 to 127)
    const encodedValue = Math.max(0, Math.min(65535, val));
    console.log('encodedValue', encodedValue);

    // Convert the ASCII value to its corresponding character
   // const encodedChar = String.fromCharCode(encodedValue);
   // console.log('encodedChar', encodedChar);
    return encodedValue;
  }

  validateInputVoltage(voltages) {
    return (
      voltages[0] > CommandConstants.MIN_VOLT ||
      voltages[0] < CommandConstants.MAX_VOLT ||
      voltages[1] > CommandConstants.MIN_VOLT ||
      voltages[1] < CommandConstants.MAX_VOLT ||
      voltages[2] > CommandConstants.MIN_VOLT ||
      voltages[2] < CommandConstants.MAX_VOLT ||
      voltages[3] > CommandConstants.MIN_VOLT ||
      voltages[3] < CommandConstants.MAX_VOLT
    );
  }

  createPacket(command, payload) {
    console.log('payload length: ' + payload.length);

    const packet = new Uint8Array(CommandConstants.PACKET_LENGTH);
    CommandConstants.seq_Number = (CommandConstants.seq_Number + 1) % 255;

    for (let i = 0; i < CommandConstants.PACKET_LENGTH; i++) {
      if (i < CommandConstants.HEADER_LENGTH) {
        //const commandBytes = new TextEncoder().encode(command);
        const unicodeValue = command.charCodeAt(i);
        packet[i] = unicodeValue;
        console.log("packet first three index",packet[i])
      } else if (
        i - CommandConstants.HEADER_LENGTH < CommandConstants.PAYLOAD_LENGTH &&
        i - CommandConstants.HEADER_LENGTH < payload.length
      ) {
        packet[i] = payload[i - CommandConstants.HEADER_LENGTH];

        console.log('packet middle: ' + i);
        console.log('packet value: ' + packet[i]);
      } else {
        packet[i] = CommandConstants.seq_Number;
        console.log('packet byte middle: ' + i);
      }
    }

    return packet;
  }

  getBytesForLens (state, side){
    try {
      if (side < 0 || side > 2)
          throw new Error("Invalid side value. Side can be 0 (Right), 1 (Left), or 2 (Both)");

      let command = null;
      switch (state) {
          case 'ON':
              command = side === 0 ? CommandConstants.ON_RIGHT_LL : CommandConstants.ON_LEFT_LL;
             console.log('command',command)
              break;
          case 'OFF':
              command = side === 0 ? CommandConstants.OFF_RIGHT_LL : CommandConstants.OFF_LEFT_LL;
              break;
          case 'SLEEP':
              command = side === 0 ? CommandConstants.SLEEP_RIGHT_LL : CommandConstants.SLEEP_LEFT_LL;
              break;
          default:
              throw new Error("Invalid state value.");
      }

      const lensPayload = new Uint8Array(CommandConstants.PAYLOAD_LENGTH);;
      const payload = this.createPacket(command, lensPayload); // Assuming createPacket is defined elsewhere
      return payload;
  } catch (error) {
      console.error(error);
      // Handle the error as needed, for example, throw it again to propagate it to the caller
      throw error;
  }

  }

  // validateInputVoltage = (voltages) => {
  //   // Implement your validation logic here
  //   return true; // Placeholder logic, modify as needed
  // }

  // convertVoltagesToByteCode = (voltages) => {
  //   // Implement your conversion logic here
  //   return voltages.map(voltage => {
  //     // Example conversion logic, modify as needed
  //     return Math.floor(voltage); // Just a placeholder example
  //   });
  // }

  // createPacket = (command, voltageBytes) => {
  //   // Implement packet creation logic here
  //   return [command, ...voltageBytes]; // Just a placeholder example
  // }
}

export default ByteInterpreter;
