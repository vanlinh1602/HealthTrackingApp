import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image
} from "react-native";
import CustomButton from "../Utils/CustomButton";
import auth from '@react-native-firebase/auth';
import { FirebaseManager } from "../Utils/FirebaseManager";
import PushNotification from "react-native-push-notification";

export default function GetStarted({ navigation }) {
  const manager = new FirebaseManager();
  const image = require('../Image/Background.png');

  useEffect(() => {
    createChannels();
  },[]);

  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: "Test-channel",
        channelName: "HealthTracking"
      }
    )
  }

  function PressGetStarted() {
    navigation.navigate("Sign");
  }
  if (manager.checkLogin()) {
    //navigation.navigate('Calendar')
    navigation.replace('Home')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>

          <Text style={styles.text}>Theo dõi</Text>
          <Text style={[styles.text, { fontSize: 70 }]}>Sức Khỏe</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/LOGO.png')}
            style={styles.logo}
            resizeMode='stretch'
          />

          <CustomButton
            content="Bắt đầu"
            color='#FAA1A1'
            style={styles.button}
            onPress={PressGetStarted}
            size={20}
            width = {150}
            height = {50}
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
  header: {
    margin: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    //marginTop: 50,
    fontSize: 42,
    textAlign: "center",
    backgroundColor: '#FDE7E7',
    color: '#000',
    fontFamily: 'Playball-Regular',
  },
  button: {
    marginTop: '50%',
    marginBottom: 10,
    //marginLeft: '50%',
  },
});


