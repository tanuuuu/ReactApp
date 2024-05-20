import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


const Splash = () => {
    const navigation = useNavigation();
   
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')

        },3000)

    },[])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

export default Splash;
