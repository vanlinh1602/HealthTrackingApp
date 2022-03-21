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
});