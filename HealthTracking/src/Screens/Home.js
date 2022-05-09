import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Dimensions
} from 'react-native';
import ButtonHomeUI from '../Utils/ButtonHomeUI';
export default function Home({ navigation }) {
  
  function MoveToCanlender() {
    navigation.navigate('Calendar')
  }
  function MoveToStatistical() {
    navigation.navigate('Statistical')
  }
  function MoveToAccount(){
    navigation.navigate('Account')
  }
  function MoveToScale(){
    navigation.navigate('Scale')
  }
  function MoveToSetting(){
    navigation.navigate('Setting')
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Image/BackgroundHome.png')}
        resizeMode= 'stretch'
        style={styles.background}
      >

        <ButtonHomeUI
          name='Nhật ký'
          style={styles.CalenderStyle}
          PressButton={MoveToCanlender}
          srcImage={require('../Image/DiaryIcon.png')}
        />
        <ButtonHomeUI
          name='Chỉ số'
          style={styles.ScaleStyle}
          PressButton={MoveToScale}
          srcImage={require('../Image/ScaleIcon.png')}
        />
        <ButtonHomeUI
          name='Thống kê'
          style={styles.StaticticalStyle}
          PressButton={MoveToStatistical}
          srcImage={require('../Image/StatisticIcon.png')}
        />
        <ButtonHomeUI
          name='Nhắc nhở'
          style={styles.AlarmStyle}
          PressButton={MoveToSetting}
          srcImage={require('../Image/AlarmIcon.png')}
        />
        <ButtonHomeUI
          name='Tài khoản'
          style={styles.AccountStyle}
          PressButton={MoveToAccount}
          srcImage={require('../Image/AccountIcon.png')}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    backgroundColor: '#FDE7E7',
    flex: 1,
    height: Dimensions.get("window").height,
  },
  CalenderStyle: {
    width: "40%",
    height: "30%",
    marginLeft : "6%",
    marginTop: "6%",
  },
  ScaleStyle: {
    width: "40%",
    height: "30%",
    marginTop: "-50%",
    marginLeft: "54%"
  },
  StaticticalStyle: {
    width: "40%",
    height: "30%",
    marginLeft : "6%",
    marginTop: "3%",
  },
  AlarmStyle: {
    width: "40%",
    height: "30%",
    marginTop: "-50%",
    marginLeft: "54%"
  },
  AccountStyle: {
    width: "40%",
    height: "30%",
    marginLeft : "30%",
    marginTop: "3%",
  },
});