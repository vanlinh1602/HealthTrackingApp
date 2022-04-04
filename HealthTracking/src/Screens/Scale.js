import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const Scale = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState('');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [submitted, SetSubmitted] = useState(false);
  const [getWater, SetgetWater] = useState();
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  };

  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    //let val = (weight / (height * height)) * 10000;
    //let val = 4;
    setBmi(val);

    let waterInput = Number(weight) * 0.03;
    SetgetWater(waterInput);

    if (val < 18.5) {
      setInfo('Under Weight');
    } else if (val > 18.5 && val <= 24.9) {
      setInfo('Healthy');
    } else if (val > 24.9 && val < 30) {
      setInfo('Overweight');
    } else {
      setInfo('Obese');
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Height : </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setHeight(value)}
          placeholder="cm"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.InformationBox}>
        <Text style={styles.text}>Weight : </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setWeight(value)}
          placeholder="kg"
          keyboardType="numeric"
        />
      </View>

      <Pressable
        onPress={handleBmi}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#FCD0D0' : '#EF5DA8'},
          styles.enter,
        ]}>
        <Text style={{fontSize: 20, color: '#000'}}>Enter</Text>
      </Pressable>

      <View style={styles.InformationBox}>
        <View>
          <Text style={styles.text}>
            BMI: {bmi}   {info}
          </Text>
        </View>

        <View style={styles.InformationBox}>
          <Text style={styles.text}>Water need: {getWater} </Text>
        </View>
      </View>
      
      <View style ={{marginTop: 17,marginLeft:105}}>
        <Text style ={styles.noteScale}>
          liter
        </Text>        
      </View>
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
    fontStyle: 'italic',
    
    margin: 20,
  },
  InformationBox: {
    backgroundColor: '#FCD0D0',
    height: 80,
    width: 390,
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
  textInput: {
    fontSize: 25,
    color: '#000000',
    marginLeft: 130,
    marginTop: -63,
  },
  enter: {
    marginTop: 20,
    width: 120,
    height: 45,
    //backgroundColor: '#FAA1A1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50%',
    borderRadius: 20,
  },
  noteScale:{
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',

    margin: 20,
  }
});

export default Scale;
