import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TextInput } from 'react-native-gesture-handler';
import HeaderBar from '../Utils/HeaderBar';

const CalendarScreen = () => {
  return (
    <View style={styles.calendarBackground}>
      <View style = {{width: '100%'}}>
        <Calendar
          style={styles.CalendarBackgroud}
          theme={
            {
              calendarBackground: '#FCD0D0'
            }
          }
        />
      </View>
      <View style = {styles.Status}>
          <TextInput 
            style = {styles.TextInput}
            placeholder = 'Hôm nay của bạn thế nào?'
          />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  calendarBackground: {
    flex: 1,
    backgroundColor: '#FDE7E7',
    alignItems: 'center',

  },
  CalendarBackgroud: {
    marginTop: 20,
    borderRadius: 15,
    width: '95%',
    borderColor: '#F178B6',
    borderWidth: 1,
    marginLeft: '2.5%'
  },
  TextInput:{
    width: '90%',
    height: 150,
    backgroundColor: '#ffff',
    marginLeft: '5%',
    borderColor : '#F178B6',
    borderRadius: 10,
    borderWidth: 1,  
  },
  Status:{
    width : '100%',
    marginTop: 20,
    
  },
});


export default CalendarScreen;