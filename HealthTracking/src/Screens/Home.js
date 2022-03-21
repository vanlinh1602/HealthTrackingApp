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
        navigation.navigate('Calendar')
    }
    function MoveToStatistical(){
        navigation.navigate('Statistical')
    }
    function MoveToAccount(){
        navigation.navigate('Account')
    }
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
            name="Account"
            style={style.AccountStyle}
            PressButton={MoveToAccount}
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
    AccountStyle:{
        marginBottom: 100,
        alignItems:'center',
    },
});