import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';

const Setting = () => {
  return (
    <View style={styles.body}>
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Height : 175 cm</Text>
      </View>
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Weight: 50kg</Text>
      </View>
      <View style={styles.InformationBox}>
        <Text style={styles.text}>BMI: 16.3</Text>
      </View>
      <Image
        style={styles.image}
        source={require('../Image/BMIchart.png')}
        resizeMode="stretch"
        
      />
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
});

export default Setting;
