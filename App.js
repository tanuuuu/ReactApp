/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {View} from 'react-native';
import BleManagerComponent from './src/BleManager/BleManager';
import LimitConstants from './src/constants/LimitConstants'
import Power from './src/Interactormodels/Power';
import CalibrationData from './src/Interactormodels/CalibrationData1';

import { useDispatch , useSelector} from 'react-redux';
import { startBleScanAsync } from './src/components/redux/bleThunks';
import { requestPermissionsAsync } from './src/components/redux/permissionsThunks';
import AppNavigator from './src/AppNavigator/AppNavigator';


const App = () => {
  //console.log('Spherical Limit:', LimitConstants.SPHERICAL_LIMIT);
//   const originalPower = new Power();

//   originalPower.getSph();
// originalPower.setCyl();
// originalPower.setAxis();

// const clonedPower = originalPower.clone()

// // Modify the cloned object
// clonedPower.setSph(3.00);


// console.log('Original Power:', originalPower.getSph(), originalPower.getCyl(), originalPower.getAxis());
// console.log('Cloned Power:', clonedPower.getSph(), clonedPower.getCyl(), clonedPower.getAxis());
 


 
  
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <BleManagerComponent /> */}
      <AppNavigator />
    
    </View>
  );

 
};

export default App;

