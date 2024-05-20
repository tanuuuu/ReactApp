import { GRANT_PERMISSIONS, DENY_PERMISSIONS} from "./permissionsActions";

export const initialState = {
  bluetoothPermission: false,
  locationPermission: false,
};


const permissionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GRANT_PERMISSIONS:
        return {
          ...state,
          bluetoothPermission: true,
          locationPermission: true,
        };
      case DENY_PERMISSIONS:
        return {
          ...state,
          bluetoothPermission: false,
          locationPermission: false,
        };
      default:
        return state;
    }
  };
  
  export default permissionsReducer;
