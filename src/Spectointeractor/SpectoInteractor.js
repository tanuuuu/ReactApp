import Power from '../Interactormodels/Power';
import RefractionMode from '../constants/RefractionMode';
import CalibrationData from '../Interactormodels/CalibrationData';
import Side from '../constants/Side';
import VoltageCalculator from './VoltageCalculator';
import State from '../constants/State';
import {useDispatch} from 'react-redux';


//mport { getMockCalibData } from "../CalibrationDataRandL/rightCalibrationData";
import ByteInterpreter from './ByteInterpreter';
import {useState} from 'react';
import {
  getMockCalibDataRight,
  getMockCalibDataLeft,
} from '../CalibrationDataRandL/rightCalibrationData';
import spData from '../LocalDataStorage/spData';
import BleManagerModule from '../BleManager/BleManager';
import BleManagerModuleNew from '../BleManager/BleManagernew';

import bleConnectionManager from '../BleManager/BleConnectionManager';

const rightCalibrationData = getMockCalibDataRight();
const leftCalibrationData = getMockCalibDataLeft();

const voltageCalculator = new VoltageCalculator();
const byteInterpreter = new ByteInterpreter();

const dataSp = spData.getInstance();


let anotherVariableUUID;

let anotherVariableID;





const SpectoInteractor = {
  
  applyPower: power => {
    let voltages = null;

    let voltageBytes = null;

    // Implement equivalent logic to check power side
    if (power.side === 'LEFT') {
      console.log('left', power.side);
      // Call the equivalent function in your JavaScript code to calculate voltages
      //voltages = convertPowerToVoltage('MANUAL', power, leftCalibrationData);
      voltages = voltageCalculator.convertPowerToVoltage(
        RefractionMode.MANUAL,
        power,
        leftCalibrationData,
      );
    } else {
      //voltages =     convertPowerToVoltage(RefractionMode.MANUAL, power, rightCalibrationData);
      //voltages = VoltageCalculator.convertPowerToVoltage(RefractionMode.MANUAL, power, rightCalibrationData);
      voltages = voltageCalculator.convertPowerToVoltage(
        RefractionMode.MANUAL,
        power,
        rightCalibrationData,
      );

      console.log('right', power.side);
      console.log('latestpowersph:', power.getSph());

      //console.log(r.setSide(0))
    }

    if (voltages !== null) {
      //console.log(`Voltages not null: ${voltages.join(',')}`);

      // Assuming you have equivalent functions in your JavaScript code
      // if (buzzerEnabled) {
      //     voltageBytes = getBytesForVoltagesWithBuzzer(power, voltages);
      // } else {
      //     voltageBytes = getBytesForVoltages(power, voltages);
      // }

      voltageBytes = byteInterpreter.getBytesForVoltages(power, voltages);

      const voltageBytesArray = Array.from(voltageBytes);
      setTimeout(() => {
        // Set applyToBothSide back to false
        // writeCharacteristic(iD, getUUID, getUUID, lensBytes);
    
        bleConnectionManager.performBLEOperationsWrite(anotherVariableID, anotherVariableUUID, anotherVariableUUID, voltageBytesArray);
      }, 2000);



      console.log(`Voltage  length: ${voltages.length}`);
      console.log(`Voltage: ${voltageBytes}`);
      // console.log(`Voltage bytes data: ${voltageBytes}`);
    }
  },

  applyPowerzero: (powerRight, powerLeft) => {
    // Set applyToBothSide to true
    let applyToBothSide = true;

    console.log('rahul');

    // Emit an event to indicate the apply button is clicked (if needed)
    // EventBus.getDefault().post(new SpectoEvents.OnApplyBtnClicked());
    //eventEmitter.emit('applyBtnClicked'); // Example event emission using EventEmitter

    // Turn on the right lens (assuming this is a synchronous operation)
    turnOnRightLens();

    // Wait for 500 milliseconds
    // setTimeout(() => {
    //   // Apply power to the right lens
    //   //applyPower(powerRight);

    //   //SpectoInteractor.applyPower(powerRight);

    //   // Wait for another 500 milliseconds
    //   setTimeout(() => {
    //     // Turn on the left lens (assuming this is a synchronous operation)
    //     // turnOnLeftLens();

    //     // Wait for another 500 milliseconds
    //     setTimeout(() => {
    //       // Apply power to the left lens
    //       // applyPower(powerLeft);

    //       // Wait for another 500 milliseconds
    //       setTimeout(() => {
    //         // Set applyToBothSide back to false
    //         applyToBothSide = false;
    //       }, 500);
    //     }, 500);
    //   }, 500);
    // }, 500);
  },
};

const turnOnRightLens = () => {
  //const dispatch = useDispatch();
  useReturnedValueID('ID')
   useReturnedValue('UUID');
  

  const lensBytes = byteInterpreter.getBytesForLens(State.ON, Side.RIGHT);
  console.log('lensBytes:', lensBytes);

  const lensBytesArray = Array.from(lensBytes);


  


  //const stringArray = lensBytes.map(num => num.toString());

  setTimeout(() => {
    // Set applyToBothSide back to false
    // writeCharacteristic(iD, getUUID, getUUID, lensBytes);

    bleConnectionManager.performBLEOperationsWrite(anotherVariableID, anotherVariableUUID, anotherVariableUUID, lensBytesArray);
  }, 5000);

  //

  // dispatch(writeToDeviceAsync(iD, getUUID, getUUID, lensBytes));

  // Logic for turning on the right lens
};

const getValue = async key => {
  try {
    const value = await dataSp.getValue(key);
    console.log('valueUIID', value);
    return value; // Return the value
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

const useReturnedValue = async key => {
  try {
    const returnedValue = await getValue(key);
    console.log('Returned value:', returnedValue);
    // You can use the returned value here or pass it to another function
    
    anotherVariableUUID = returnedValue
    console.log('anotherVariable:',anotherVariableUUID)
  
  } catch (error) {
    console.error('Error:', error);
  }
};

const useReturnedValueID = async key => {
  try {
    const returnedValue = await getValue(key);
    console.log('Returned value:', returnedValue);
    // You can use the returned value here or pass it to another function
    anotherVariableID = returnedValue
    console.log('anotherVariable:',anotherVariableUUID)
  
  } catch (error) {
    console.error('Error:', error);
  }
};



const performBLEOperationsWrite = async (
  deviceId,
  serviceUUID,
  characteristicUUID,
  writeData,
) => {

  
  try {

    const writeResult = await BleManagerModuleNew.writeCharacteristic(
      deviceId,
      serviceUUID,
      characteristicUUID,
      writeData,
    );
    if (writeResult) {
      console.log('Write successful');
    } else {
      console.log('Failed to write');
    }
  } catch (error) {
    console.error('Error performing BLE operations:', error);
  }
};

const readCharacteristic = (deviceId, serviceUUID, characteristicUUID) => {
  BleManagerModule.readCharacteristic(
    deviceId,
    serviceUUID,
    characteristicUUID,
    (data, error) => {
      if (data) {
        console.log('Read data:', data);
      } else {
        console.error('Error reading characteristic', error);
      }
    },
  );
};

const writeCharacteristic = (
  deviceId,
  serviceUUID,
  characteristicUUID,
  value,
) => {
  BleManagerModule.writeCharacteristic(
    deviceId,
    serviceUUID,
    characteristicUUID,
    value,
    (success, error) => {
      if (success) {
        // writeNotification(deviceId, serviceUUID, characteristicUUID);
        console.log('Write successful');
      } else {
        console.log('Error writing characteristic', error);
      }
    },
  );
};

const writeNotification = (deviceId, serviceUUID, characteristicUUID) => {
  BleManagerModule.writeNoti(
    deviceId,
    serviceUUID,
    characteristicUUID,
    value,
    (success, error) => {
      if (success) {
        readCharacteristic(deviceId, serviceUUID, characteristicUUID);
        console.log('Write successful');
      } else {
        console.error('Error writing characteristic', error);
      }
    },
  );
};

const getValueId = async key => {
  try {
    const value = await dataSp.getValue(key);
    console.log('ID', value);
    return value; // Return the value
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export default SpectoInteractor;
