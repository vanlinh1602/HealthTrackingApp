import { PrivateValueStore, validatePathConfig } from "@react-navigation/native";
import React, { useState, useEffect  } from "react";
import {
  Text,
  View,
  StyleSheet,
  Slider,
  ImageBackground
} from "react-native";
import { FirebaseManager } from "../Utils/FirebaseManager";
import ModelSignIn from "../Utils/ModelSignIn";
import ModelSignUp from "../Utils/ModelSignUp";
import SignButton from "../Utils/SignButton";
import auth from '@react-native-firebase/auth';


function SignUI({ navigation }) {
  const image = require('../Image/Background.png')
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const manager = new FirebaseManager();
  function PressSignIn() {
    setIsSignIn(true);
  }

  function PressSignUp() {
    setIsSignUp(true);
  }
  if (manager.checkLogin()){
    navigation.navigate('Trang chủ')
  }
  return (
    <View style={styles.container}>
      <ModelSignIn
        visible = {isSignIn}
        close = {()=>setIsSignIn(false)}

      />
      <ModelSignUp
        visible = {isSignUp}
        close = {()=>setIsSignUp(false)}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Bạn đã có tài khoản chưa?</Text>
        <View style={{ alignItems: 'center' }}>
          <SignButton
            content="Đã có"
            color='#FAA1A1'
            style={styles.buttonSignIn}
            onPress={PressSignIn}
          />

          <SignButton
            content="Chưa có"
            color='#0fa4a4'
            style={styles.buttonSignUp}
            onPress={PressSignUp}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

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
    fontSize: 35,
    textAlign: "center",
    backgroundColor: '#FDE7E7',
    color: '#000',
  },

  buttonSignIn: {
    marginTop: 400,
  },
  buttonSignUp: {
    marginTop:20,
    //marginLeft: '50%',
  },

});

export default SignUI;