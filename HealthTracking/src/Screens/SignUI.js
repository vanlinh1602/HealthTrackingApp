import { PrivateValueStore, validatePathConfig } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Slider,
  ImageBackground,
  Image,
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
  if (manager.checkLogin()) {
    navigation.navigate('Trang chủ')
  }
  return (
    <View style={styles.container}>
      <ModelSignIn
        visible={isSignIn}
        close={() => setIsSignIn(false)}

      />
      <ModelSignUp
        visible={isSignUp}
        close={() => setIsSignUp(false)}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.text}>Bạn đã có</Text>
          <Text style={styles.text}>tài khoản chưa?</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/LOGO.png')}
            style={styles.logo}
            resizeMode='stretch'
          />
          <SignButton
            content="Đã có"
            color='#FAA1A1'
            style={styles.buttonSignIn}
            size = {20}
            onPress={PressSignIn}
          />

          <SignButton
            content="Chưa có"
            color='#0fa4a4'
            style={styles.buttonSignUp}
            size = {20}
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
  header: {
    margin: 50,
  },
  logo: {
    width: 200,
    height: 200,
    margin: 30,
  },
  text: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
    backgroundColor: '#FDE7E7',
    color: '#000',
    fontFamily: 'Playball-Regular',
  },

  buttonSignIn: {
    marginTop: '35%',
  },
  buttonSignUp: {
    marginTop: 20,

  },

});

export default SignUI;