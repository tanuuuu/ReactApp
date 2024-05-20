import { combineReducers } from "redux";
import bleReducer from "./bleReducer";
import permissionsReducer from "./permissionsReducer";
 export default combineReducers({
    bleReducer,
    permissionsReducer
})