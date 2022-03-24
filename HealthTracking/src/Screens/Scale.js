import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TextInput} from 'react-native';

const Scale = () => {

  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Height : </Text>
        <TextInput
        style = {styles.textInput}
        onChangeHeight ={(value) => setHeight(value)}
        placeholder = 'cm'
        keyboardType = 'numeric'
        /> 
      </View>
       
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Weight : </Text>
        <TextInput
        style = {styles.textInput}
        onChangeHeight ={(value) => setHeight(value)}
        placeholder = 'kg'
        keyboardType = 'numeric'
        /> 
      </View>

      <View style={styles.InformationBox}>
        <Text style={styles.text}>BMI: 16.3</Text>
      </View>

      <View style={styles.InformationBox}>
        <Text style={styles.text}>Water need: 3l</Text>
      </View>
      {/* <Image
        style={styles.image}
        source={require('../Image/BMIchart.png')}
        resizeMode="stretch"
        
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FDE7E7',
    alignItems: 'center',
    justifyContend: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: "italic",

    margin: 20,
  },
  InformationBox: {
    backgroundColor: '#FCD0D0',
    height: 80,
    width: '90%',
    padding: 2,
    borderRadius: 40,
    marginTop: 20,
    justifyContend: 'space-around',
    flexDirection: 'column',
  },
  image: {
    height: 300,
    width: 300,
    
  },
  textInput:{
    fontSize: 25,
    color: '#000000',
    marginLeft: 130,
    marginTop: -63
  }
});

export default Scale;
