import BleManagerModuleNew from './BleManagernew';

const bleConnectionManager = {
  performBLEOperationsWrite: async (
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

        performBLEOperationsRead(deviceId, serviceUUID, characteristicUUID);
      } else {
        console.log('Failed to write');
      }
    } catch (error) {
      console.error('Error performing BLE operations:', error);
    }
  },
};

const performBLEOperationsRead = async (
  deviceId,
  serviceUUID,
  characteristicUUID,
) => {
  const readResult = await BleManagerModuleNew.readCharacteristic(
    deviceId,
    serviceUUID,
    characteristicUUID,
  );
  console.log('Read data:', readResult);
};

const performBLEOperationsNotification = async (
  deviceId,
  serviceUUID,
  characteristicUUID,
) => {
  const Notification = await BleManagerModuleNew.writeNotification(
    deviceId,
    serviceUUID,
    characteristicUUID,
  );
  if (Notification) {
    console.log('Write successful');
    performBLEOperationsRead(deviceId, serviceUUID, characteristicUUID);
  } else {
    console.log('Failed to write');
  }
};

export default bleConnectionManager;
