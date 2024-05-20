import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import CustomHeader from '../Header/CustomHeader';
import BleManager from 'react-native-ble-manager';
import {useDispatch, useSelector} from 'react-redux';
import {
  startBleScanAsync,
  connectToDeviceAsync,
} from '../components/redux/bleThunks';
import {requestPermissionsAsync} from '../components/redux/permissionsThunks';
import {useNavigation} from '@react-navigation/native';
import {showAlert} from '../Alert/showAlert';
import spData from '../LocalDataStorage/spData';
import {applyZeroPower} from '../Power/applyZeroPower';
import BleManagerModule from '../BleManager/BleManager';
import BleManagerModuleNew from '../BleManager/BleManagernew';

const dataSp = spData.getInstance();

const Home = () => {
  const navigation = useNavigation();
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false)
  // const [devices, setDevices] = useState([]);

  const bluetoothPermission = useSelector(
    state => state.permissionsReducer.bluetoothPermission,
  );
  const locationPermission = useSelector(
    state => state.permissionsReducer.locationPermission,
  );

  const isconnected = useSelector(state => state.bleReducer.isConnected);
  console.log('isconnected', isconnected);

  const handleScan = () => {
    // dispatch(startBleScanAsync());
    BleManagerModule.startScan((success, error) => {
      if (success) {
        setScanning(true);
      } else {
        console.error('Error starting scan', error);
      }
    });
  };

  // // Alert call
  // const showAlert = () => {
  //   Alert.alert(
  //     'Alert Title',
  //     'Device allready connected  .',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => console.log('OK Pressed')
  //       }
  //     ]
  //   );
  // };

  const fetchDataWithDelay = async () => {
    console.log('Fetching data...');
    await delay(5000); // 5 seconds delay
    console.log('Data fetched');
    // handleScan();
    const scanResult = await BleManagerModuleNew.startScan();
    if (scanResult) {
      console.log('Scanning started successfully');
    } else {
      console.log('Failed to start scanning');
    }
  };

  const saveValueUUID = async (key, value) => {
    await dataSp.setValue(key, value);
  };

  const saveValueId = async (key, value) => {
    await dataSp.setValue(key, value);
  };

  const connectBleButton = () => {
    // if (isconnected == false) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      //showAlert()
    }, 5000);
    if (Platform.OS === 'ios') {
      BleManager.start({showAlert: false})
        .then(() => {
          console.log('Scan started');
        })
        .catch(error => {
          console.error('Error:', error);
        });

      fetchDataWithDelay();
    } else {
      dispatch(requestPermissionsAsync());
      BleManager.enableBluetooth();
      BleManager.start({showAlert: false});
      // console.log('bluetoothPermission', bluetoothPermission);

      //BleManager.start({showAlert: true});

      fetchDataWithDelay();
    }
    // } else {
    //   showAlert('Alert Title', 'Device is allready conected.');

    //   console.log('not scan 2 click');
    // }
    // Function to be executed when the button is pressed

    // Alert.alert('Button Pressed', 'This is the function called when the button is pressed');
  };

  const connectNewUser = () => {
   if(isConnected == true){
    applyZeroPower();
    navigation.navigate('PowerApplySph');

   }else{
    showAlert('Alert Title', 'Device is not Connected')


   }
   

    // Function to be executed when the button is pressed
    // if(isconnected == true){
    //   applyZeroPower()
    //   navigation.navigate('PowerApplySph');

    // }else{
    //   showAlert('Alert Title', 'please connect device.');

    // }
  };

  const newConnectDevice = async deviceId => {
    const connectResult = await BleManagerModuleNew.connectToDevice(deviceId);
    if (connectResult) {
      console.log('Connected to device:', deviceId);
      await BleManagerModuleNew.retrieveServicesDevice(deviceId)
      setIsVisible(true)
      setIsConnected(true)
    } else {
      console.log('Failed to connect to device:', deviceId);
    }
  };

  const connectToDevice = deviceId => {
    BleManagerModule.connectToDevice(deviceId, (success, error) => {
      if (success) {
        console.log('Connected to device:', deviceId);
      } else {
        console.error('Error connecting to device', error);
      }
    });
  };

  useEffect(() => {
    console.warn('^useEffectstep');
    // if (Platform.OS === 'ios') {
    //   // BleManager.start({showAlert: false})
    //   //   .then(() => {
    //   //     console.log('Scan started');
    //   //   })
    //   //   .catch(error => {
    //   //     console.error('Error:', error);
    //   //   });
    // } else {
    //   dispatch(requestPermissionsAsync());
    // }

    BleManager.addListener('BleManagerDiscoverPeripheral', peripheral => {
      console.warn('Discovered device:', peripheral);

      if (peripheral.name === 'SPECTO') {
        // Fetch serviceUUIDs
        const serviceUUIDs = peripheral.advertising.serviceUUIDs;
        console.log('Service UUIDs:', serviceUUIDs);
        const UUID = serviceUUIDs[0];
        //saveValueUUID(UUID);
        saveValueUUID('UUID', UUID);

        // Fetch id
        const id = peripheral.id;
        console.log('Device ID:', id);
        saveValueId('ID', id);
        //connectToDevice(id)
        newConnectDevice(id);

        BleManagerModule.stopScan();

        setLoading(false);
      }

      // Update UI with discovered device information

      return () => {
        BleManager.removeAllListeners();
      };
    });
  }, []);

  return (
    <View style={styles.container}>
      {isVisible && (
        <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: 20,
            marginTop: -50,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            SPECTO is connected
          </Text>
        </View>
      )}

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={connectBleButton}
          disabled={loading}>
          <Text style={styles.buttonText}>ConnectToDevice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={connectNewUser}>
          <Text style={styles.buttonText}>New User</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Home;
