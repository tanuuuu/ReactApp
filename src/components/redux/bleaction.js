export const BLE_SCAN = 'BLE_SCAN';
export const BLE_CONNECT = 'BLE_CONNECT';
export const BLE_DISCONNECT = 'BLE_DISCONNECT';
export const BLE_WRITE = 'BLE_WRITE';
export const BLE_READ = 'BLE_READ';


export const startBleScan = () => ({
  type: BLE_SCAN,
});

export const connectToDevice = () => ({
  type: BLE_CONNECT,
});

export const disconnectFromDevice = () => ({
  type: BLE_DISCONNECT,
});

export const readFromDevice = (data) => ({
    type: BLE_READ,
    payload: data,
  });

export const writeToDevice = (data) => ({
  type: BLE_WRITE,
  payload: data,
});