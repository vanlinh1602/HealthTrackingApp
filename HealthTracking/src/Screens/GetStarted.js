import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import SignButton from "../Utils/SignButton";

const image = require('../Image/Background.png');

function GetStarted({navigation}){

  function PressGetStarted(){
    navigation.navigate("Sign");
  }

  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Theo dõi sức khỏe</Text>
      <View style={{ alignItems: 'center' }}>

        <SignButton
          content="Bắt đầu"
          color='#FAA1A1'
          style={styles.button}
          onPress = {PressGetStarted}
          size = {20}
        />
      </View>
    </ImageBackground>
  </View>


);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    //justifyContent: "center"
  },
  text: {
    marginTop: 50,
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: '#FDE7E7',
    color: '#000',
  },
  button: {
    marginTop: 450,
    marginBottom: 10,
    //marginLeft: '50%',
  },
});

export default GetStarted;
