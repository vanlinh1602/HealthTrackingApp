import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable
} from 'react-native';
import CustomButton from '../Utils/CustomButton';

export default function Home({navigation}) {
    function MoveToCanlender(){
<<<<<<< HEAD
        navigation.navigate('Calender')
=======
        navigation.navigate('Calendar')
>>>>>>> master
    }
    function MoveToStatistical(){
        navigation.navigate('Statistical')
    }
    function MoveToSetting(){
        navigation.navigate('Setting')
<<<<<<< Updated upstream
  }
=======
    }
>>>>>>> Stashed changes
    return (
      <View>
          <CustomButton
            name='Calender'
            style={style.CalenderStyle}
            PressButton = {MoveToCanlender}
          />
          <CustomButton
            name='Statistical'
            style = {style.StaticticalStyle}
            PressButton = {MoveToStatistical}
          />
          <CustomButton
            name='Setting'
            style = {style.SettingStyle}
            PressButton = {MoveToSetting}
          />
      </View>
    );
};

const style = StyleSheet.create({
    StaticticalStyle:{
        marginLeft: 200,
    },
    CalenderStyle:{
        marginTop: 100,
        marginLeft: 50,
    },
    SettingStyle:{
<<<<<<< Updated upstream
      marginLeft:100,
      marginTop:60,
=======
        marginTop: 10,
        marginLeft: 50,
>>>>>>> Stashed changes
    }
});