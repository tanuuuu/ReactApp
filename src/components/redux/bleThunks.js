import {Platform} from 'react-native';
import {
  startBleScan,
  connectToDevice,
  disconnectFromDevice,
  writeToDevice,
  readFromDevice,
} from './bleaction';

import BleManager from 'react-native-ble-manager'; // Assuming you're using react-native-ble-manager
import bleReducer from './bleReducer';

export const startBleScanAsync = () => {
  return async dispatch => {
    if (Platform.OS === 'ios') {
      try {
        //await BleManager.startBleScan([], 5, true);

        //await BleManager.start({ showAlert: false }
        await BleManager.scan([], true, true)
          .then(() => {
            console.warn('Scaning');
          })
          .catch(error => console.error('Scan error:', error));
        dispatch(startBleScan());
      } catch (error) {
        console.error('Error starting BLE scan:', error);
      }
    } else {
      try {
        //await BleManager.startBleScan([], 5, true);

        await BleManager.scan([], 5, true)
          .then(data => {
            console.warn('Scan started');
            console.warn('scanData:', data);
          })
          .catch(error => console.error('Scan error:', error));
        dispatch(startBleScan());
      } catch (error) {
        console.error('Error starting BLE scan:', error);
      }
    }
  };
};

export const connectToDeviceAsync = device => {
  return async dispatch => {
    try {
      await BleManager.connect(device);
      dispatch(connectToDevice());
    } catch (error) {
      console.error('Error connecting to BLE device:', error);
    }
  };
};

export const writeToDeviceAsync = data => {
  return async dispatch => {
    try {
      // Write data to the BLE device
      // For example: await BleManager.writeToDevice(data);
      dispatch(writeToDevice(data));
    } catch (error) {
      console.error('Error writing to BLE device:', error);
    }
  };
};
