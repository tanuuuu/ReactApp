

import { requestBluetoothPermissions,requestLocationPermissions, grantPermissions, denyPermissions } from "./permissionsActions";
import { PermissionsAndroid } from 'react-native';

export const requestPermissionsAsync = () => {
    return async (dispatch) => {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
         

          


        ]);
        if (
          granted['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.BLUETOOTH_ADVERTISE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          dispatch(grantPermissions());
        } else {
          dispatch(denyPermissions());
        }
      } catch (error) {
        console.error('Error requesting permissions:', error);
        dispatch(denyPermissions());
      }
    };
  };