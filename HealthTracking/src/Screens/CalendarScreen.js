import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow';
import HeaderBar from '../Utils/HeaderBar';

const CalendarScreen = () => {
  const value = 'Ngày 2: Hôm nay rất vui vì đã được đi sở thú'
  const shadowOpt = {
    width: 400,
    height: 320,
    color: "#000",
    border: 2,
    radius: 20,
    opacity: 0.2,
    x: -2,
    y: -2,
    style: { marginVertical: 20 }
}
  return (
    <ScrollView style={styles.calendarBackground}>
      <View style = {{alignItems: 'center'}}>

      <BoxShadow setting = {shadowOpt}>
        <Calendar
          style={styles.Calendar}
          theme={
            {
              calendarBackground: '#FCD0D0',
            }
          }
          />
      </BoxShadow>
      </View>
      <View style = {styles.Status}>
          <TextInput 
            style = {styles.TextInput}
            placeholder = 'Hôm nay của bạn thế nào?'
            multiline = {true}
            editable = {true}
          />
          <Pressable style = {styles.Enter}>
            <Text style = {{fontSize: 15, color: '#000'}}>Đăng</Text>
          </Pressable>
          <Image 
            style = {styles.ImageStatus}
            source = {require('../Image/CameraIcon.png')}
          />
      </View>
      <View style = {styles.StatusToday}>
        <Text
          style = {styles.ContentStatus}
        >{value}</Text>
        <Image
          style = {styles.ImageContent}
          source = {require('../Image/imagenice.jpg')}
        />
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  calendarBackground: {
    flex: 1,
    backgroundColor: '#FDE7E7',
  },
  Calendar:{
    borderRadius: 20,
  },
  TextInput:{
    width: '90%',
    height: 150,
    backgroundColor: '#ffff',
    marginLeft: '5%',
    borderColor : '#F178B6',
    borderRadius: 10,
    borderWidth: 1,  
    fontSize: 20,
    fontFamily: 'Mulish-Regular',
    padding : 20,
    color : '#000',
  },
  Status:{
    width : '100%',
    marginTop: 20,
  },
  Enter:{
    marginTop: 10,
    width: 100,
    height: 30,
    backgroundColor: '#FAA1A1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '70%',
    borderRadius: 10,

  },
  ImageStatus:{
    resizeMode: 'stretch',
    marginTop: -30,
    width: 30,
    height: 30,
    marginLeft: '60%',
  },
  StatusToday:{
    marginTop: 10,
    width: '90%',
    height: 250,
    backgroundColor: '#FCD0D0',
    marginLeft: '5%',
    borderColor : '#F178B6',
    borderRadius: 10,
    borderWidth: 1,  
    fontSize: 15,
    color: '#000',
  },
  ContentStatus:{
    color: '#000', 
    fontSize: 20, 
    marginLeft: 5, 
    marginTop: 5,
  },
  ImageContent:{
    resizeMode: 'stretch',
    width: 200,
    height: 200,
    marginTop: 5,
    marginLeft: '25%',
  },
});


export default CalendarScreen;