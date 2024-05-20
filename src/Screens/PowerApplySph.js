import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import spData from '../LocalDataStorage/spData';
import Power from '../Interactormodels/Power';
import PlusStepClicked from '../ApplyPowerButton/StepClicked';
import Side from '../constants/Side';
import SpectoInteractor from '../Spectointeractor/SpectoInteractor';

const dataSp = spData.getInstance();
const latestPower = new Power();

const PowerApplySph = () => {
  const [fetchedValue, setFetchedValue] = useState(null);
  const [labelText, setLabelText] = useState(0.0);

  const navigation = useNavigation();
  const fetchValue = async () => {
    const value = await dataSp.getValue('UIID');
    //console.log(value);
    setFetchedValue(value);
  };
  fetchValue();

  //const uuid = fetchValue()
  console.log('uuid', fetchedValue);

  const goBack = () => {
    navigation.goBack();
  };

  // function plusStepClicked(side, stepSize) {
  //   console.log('PlusStepClicked');
  //   console.log('step:', stepSize);
  //   // Define variables
  //   let listener;
  //   let newSph = latestPower.getSph() + stepSize;

  //   // Update lastClickedStep
  //   let lastClickedStep = -1 * stepSize;
  //   latestPower.setSph(newSph);
  //   console.log('latestpower:', latestPower.getSph());
  //   setLabelText(latestPower.getSph());
  // }

  const plusStepClicked = (side, stepSize) => {
    // Your logic for handling the plus step click goes here
    let newSph = latestPower.getSph() + stepSize;

    // Update lastClickedStep
    let lastClickedStep = -1 * stepSize;
    latestPower.setSph(newSph);
    console.log('latestpower:', latestPower.getSph());
    SpectoInteractor.applyPower(latestPower);
    setLabelText(latestPower.getSph());

    console.log(`Side: ${side}, Step Size: ${stepSize}`);
  };

  // const changePowerText = () => {
  //   console.log('clicked');
  //   const newStepSize = 0.5;
  //   plusStepClicked(1, newStepSize);

  //   // const sphValue = originalPower.setSph(0.5)
  //   //setLabelText(originalPower.getSph());
  // };

  return (
    <View style={styles.container}>
      {/* Button in the top left corner */}
      <View
        style={{
          //backgroundColor: 'lightblue',
          height: 50,
          width: 250,
          marginBottom: 60,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>SPECTO</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{labelText.toFixed(1)}</Text>
      </View>
      <View style={styles.powerContainerBtn}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => plusStepClicked(Side.RIGHT, 0.5)}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            0.5
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue', // #fff
  },
  button: {
    position: 'absolute',
    top: 30, // Adjust this value to position the button vertically
    left: 20, // Adjust this value to position the button horizontally
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  largeLabel: {
    fontSize: 30, // Increase font size for larger label
    width: '60%', // Set a width for the label
    height: 140, // Set a height for the label
    textAlign: 'center', // Center the text horizontally
    fontWeight: 'bold',
    marginBottom: 350, // Adjust as needed
    backgroundColor: 'red',
  },
  labelContainer: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'lightblue', // Background color of the label container
    marginBottom: 100,
    borderRadius: 100,
  },
  powerContainerBtn: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    marginBottom: 140,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',

    backgroundColor: 'lightgray', // Background color of the label container
  },
});

export default PowerApplySph;
