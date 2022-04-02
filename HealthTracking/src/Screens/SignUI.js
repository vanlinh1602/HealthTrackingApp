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
import auth from '@react-native-firebase/auth';
import ModelSignIn from "../Utils/ModelSignIn";
import ModelSignUp from "../Utils/ModelSignUp";
import SignButton from "../Utils/SignButton";

const image = require('../Image/Background.png')
function SignUI({ navigation }) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const manager = new FirebaseManager();

  const changeScreen = () => { 
    navigation.navigate("MainUI");
  }

  function PressSignIn() {
    setIsSignIn(true);
    
  }

  function PressSignUp() {
    //setIsSignUp(true);
    manager.SignOut();
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user) {
    navigation.navigate("TestData");
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