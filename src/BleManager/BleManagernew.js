import { Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';

//BleManager.start({ showAlert: false });


const BleManagerModuleNew = {
  startScan: async () => {
      if (Platform === 'ios') {
      try {
        await BleManager.scan([], true, true);
        console.log('Scanning started');
        return true;
      } catch (error) {
        console.error('Error starting scan', error);
        throw error;
      }

    }else{
      try {
        await BleManager.scan([], 10, true);
        console.log('Scanning started');
        return true;
      } catch (error) {
        console.error('Error starting scan', error);
        throw error;
      }


    }
  },

  stopScan: async () => {
    try {
      await BleManager.stopScan();
      console.log('Scanning stopped');
    } catch (error) {
      console.error('Error stopping scan', error);
      throw error;
    }
  },

  connectToDevice: async (deviceId) => {
    try {
      await BleManager.connect(deviceId);
      console.log('Connected to device:', deviceId);
      return true;
    } catch (error) {
      console.error('Error connecting to device', error);
      throw error;
    }
  },
  retrieveServicesDevice: async(deviceId) =>{
    try {
      await BleManager.retrieveServices(deviceId);

    }catch (error) {
      console.error('Error retrieveServices to device', error);
      throw error;
    }

  },

  readCharacteristic: async (deviceId, serviceUUID, characteristicUUID) => {
    try {
      const data = await BleManager.read(deviceId, serviceUUID, characteristicUUID);
      console.log('Read data:', data);
      return data;
    } catch (error) {
      console.error('Error reading characteristic', error);
      throw error;
    }
  },

  writeCharacteristic: async (deviceId, serviceUUID, characteristicUUID, data) => {
    console.log('deviceId:',deviceId);
    console.log('serviceUUID:',serviceUUID);
    console.log('characteristicUUID:',characteristicUUID);
    console.log('data:',data);
    try {
       
        
      await BleManager.write(deviceId, serviceUUID, characteristicUUID, data);
      console.log('Write successful');
      return true;
    } catch (error) {
      console.error('Error writing characteristic', error);
      throw error;
    }
  },

  writeNotification: async (deviceId, serviceUUID, characteristicUUID)=>{
    try{
      await BleManager.startNotification(deviceId, serviceUUID, characteristicUUID)
      console.log('startNotification successful');
      return true

    }catch (error) {
      console.error('Error startNotification characteristic', error);
      throw error;
    }
  }
};

export default BleManagerModuleNew;