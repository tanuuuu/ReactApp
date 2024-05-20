import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';
import PowerApplySph from '../Screens/PowerApplySph';
const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}/>
            <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
            <Stack.Screen options={{headerShown:false}} name='PowerApplySph' component={PowerApplySph}/>
        </Stack.Navigator>

    </NavigationContainer>
    
  );
}

export default AppNavigator;
