// permissionsActions.js
export const REQUEST_BLUETOOTH_PERMISSIONS = 'REQUEST_BLUETOOTH_PERMISSIONS';
export const REQUEST_LOCATION_PERMISSIONS = 'REQUEST_LOCATION_PERMISSIONS';
export const GRANT_PERMISSIONS = 'GRANT_PERMISSIONS';
export const DENY_PERMISSIONS = 'DENY_PERMISSIONS';

export const requestBluetoothPermissions = () => ({
  type: REQUEST_BLUETOOTH_PERMISSIONS,
});

export const requestLocationPermissions = () => ({
  type: REQUEST_LOCATION_PERMISSIONS,
});

export const grantPermissions = () => ({
  type: GRANT_PERMISSIONS,
});

export const denyPermissions = () => ({
  type: DENY_PERMISSIONS,
});