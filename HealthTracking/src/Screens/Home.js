import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import CustomButton from '../Utils/CustomButton';

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
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Image/Background.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <CustomButton
          name='Trang chủ'
          style={styles.CalenderStyle}
          PressButton={MoveToCanlender}
          srcImage={require('../Image/HomeIcon.png')}
        />
        <CustomButton
          name='Thống kê'
          style={styles.StaticticalStyle}
          PressButton={MoveToStatistical}
          srcImage={require('../Image/StatisticIcon.png')}
        />
        <CustomButton
          name='Chỉ số'
          style={styles.ScaleStyle}
          PressButton={MoveToStatistical}
          srcImage={require('../Image/ScaleIcon.png')}
        />
        <CustomButton
          name='Tài khoản'
          style={styles.AccountStyle}
          PressButton={MoveToAccount}
          srcImage={require('../Image/AccountIcon.png')}
        />
        <CustomButton
          name='Cài đặt'
          style={styles.SettingStyle}
          PressButton={MoveToStatistical}
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
    marginTop: "15%",
    marginLeft: '-50%',
  },
  StaticticalStyle: {
    marginRight: '-50%',
    marginTop: '-40%',

  },
  ScaleStyle: {
    marginLeft: '-50%',
    marginTop: '15%',
  },
  AccountStyle: {
    marginRight: '-50%',
    marginTop: '-40%',
  },
  SettingStyle: {
    marginTop: '15%',
  },
});