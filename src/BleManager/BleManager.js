import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Switch,
  Platform,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
//BleManager.start({ showAlert: false });

const BleManagerModule = {

  // startScan: async () => {

  //   if (Platform === 'ios') {
  //     try {
  //       await BleManager.scan([], true, true);
  //       console.log('Scanning started');
  //       return true;
  //     } catch (error) {
  //       console.error('Error starting scan', error);
  //       throw error;
  //     }

  //   }else{
  //     try {
  //       await BleManager.scan([], 10, true);
  //       console.log('Scanning started');
  //       return true;
  //     } catch (error) {
  //       console.error('Error starting scan', error);
  //       throw error;
  //     }


  //   }



    
  // },
  // stopScan: async () => {
  //   try {
  //     await BleManager.stopScan();
  //     console.log('Scanning stopped');
  //   } catch (error) {
  //     console.error('Error stopping scan', error);
  //     throw error;
  //   }
  // },

  // connectToDevice: async (deviceId) => {
  //   try {
  //     await BleManager.connect(deviceId);
  //     await BleManager.retrieveServices(deviceId)
  //     console.log('Connected to device:', deviceId);
  //     return true;
  //   } catch (error) {
  //     console.error('Error connecting to device', error);
  //     throw error;
  //   }
  // },







  startScan: callback => {
    if (Platform === 'ios') {
      BleManager.scan([], true, true)
        .then(() => {
          console.log('Scanning started');
          callback(true);
        })
        .catch(error => {
          console.error('Error starting scan', error);
          callback(false, error);
        });
    } else {
      BleManager.scan([], 10, true)
        .then(() => {
          console.log('Scanning started');
          callback(true);
        })
        .catch(error => {
          console.error('Error starting scan', error);
          callback(false, error);
        });
    }
  },
  stopScan: () => {
    BleManager.stopScan()
      .then(() => {
        console.log('Scanning stopped');
      })
      .catch(error => {
        console.error('Error stopping scan', error);
      });
  },
  connectToDevice: (deviceId, callback) => {
    BleManager.connect(deviceId)
      .then(() => {
        BleManager.retrieveServices(deviceId);
        console.log('Connected to device:', deviceId);
        callback(true);
      })
      .catch(error => {
        console.error('Error connecting to device', error);
        callback(false, error);
      });
  },
  readCharacteristic: (deviceId, serviceUUID, characteristicUUID, callback) => {
    BleManager.read(deviceId, serviceUUID, characteristicUUID)
      .then(data => {
        console.log('Read data:', data);
        callback(data);
      })
      .catch(error => {
        console.error('Error reading characteristic', error);
        callback(null, error);
      });
  },
  writeCharacteristic: (
    deviceId,
    serviceUUID,
    characteristicUUID,
    data,
    callback,
  ) => {
    BleManager.write(deviceId, serviceUUID, characteristicUUID, data)
      .then(() => {
        console.log('Write successful');
        
        callback(true);
      })
      .catch(error => {
        console.error('Error writing characteristic', error);
        callback(false, error);
      });
  },

  writeNoti: (deviceId, serviceUUID, characteristicUUID, callback) => {
    BleManager.startNotification(
      deviceId,
      serviceUUID,
      characteristicUUID,
    ).then(() => {
      console.log('Notifications started');
      callback(true);

    }).catch(error => {
      console.error('Error writing characteristic', error);
        callback(false, error);

    });
  },

  retrieveS:(deviceId) =>{
    BleManager.retrieveServices(deviceId);

  }
};

export default BleManagerModule;
