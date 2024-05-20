import { BLE_SCAN ,BLE_CONNECT ,BLE_DISCONNECT,BLE_WRITE ,BLE_READ} from "./bleaction";


const initialState = {
    isScanning: false,
    isConnected: false,
    data: null,
  };
  
  const bleReducer = (state = initialState, action) => {
    switch (action.type) {
      case BLE_SCAN:
        return {
          ...state,
          isScanning: true,
        };
      case BLE_CONNECT:
        return {
          ...state,
          isConnected: true,
          isScanning: false, // Stop scanning when connected
        };
      case BLE_DISCONNECT:
        return {
          ...state,
          isConnected: false,
        };
      case BLE_READ:
      return {
        ...state,
        data: action.payload,
      };
      case BLE_WRITE:
        return {
          ...state,
          data: action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default bleReducer;