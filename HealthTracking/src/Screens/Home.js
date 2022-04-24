import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
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
          name='Thống kê'
          style={styles.StaticticalStyle}
          PressButton={MoveToStatistical}
          srcImage={require('../Image/StatisticIcon.png')}
        />
        <ButtonHomeUI
          name='Chỉ số'
          style={styles.ScaleStyle}
          PressButton={MoveToScale}
          srcImage={require('../Image/ScaleIcon.png')}
        />
        <ButtonHomeUI
          name='Tài khoản'
          style={styles.AccountStyle}
          PressButton={MoveToAccount}
          srcImage={require('../Image/AccountIcon.png')}
        />
        <ButtonHomeUI
          name='Cài đặt'
          style={styles.SettingStyle}
          PressButton={MoveToSetting}
          srcImage={require('../Image/SettingIcon.png')}
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
  },
  CalenderStyle: {
    marginTop: "10%",
    marginLeft: '-50%',
  },
  StaticticalStyle: {
    marginRight: '-50%',
    marginTop: '-45%',

  },
  ScaleStyle: {
    marginLeft: '-50%',
    marginTop: '10%',
  },
  AccountStyle: {
    marginRight: '-50%',
    marginTop: '-45%',
  },
  SettingStyle: {
    marginTop: '10%',
  },
});