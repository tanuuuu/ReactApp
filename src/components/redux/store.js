// import {  combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import bleReducer from './bleReducer';
// const rootReducer = combineReducers({
//     ble: bleReducer,
//     // other reducers if any
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore ({
    reducer : rootReducer 
})

export default store