import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Button,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { FirebaseManager } from './FirebaseManager';
import CustomButton from './CustomButton';


export default function OptionsStatistical(props) {
  const [temp,setTemp] = useState(false);
  const [dataTime, setDataTime] = useState([]);
  const dataScale = [ "Cân nặng", "Chiều cao", "BMI"]

  useEffect(()=>{
    for(let i = 1; i <= 12; i++){
      for(let j = 1; j <= 4; j++){
        setDataTime(arr => [...arr, ("Tuần " + j + " Tháng " + i).toString()])
      }
    }
  },[])
  const render = ({ item }) => (
    <View style={styles.viewRender}>
      <Pressable
        style={({ pressed }) => [
          {backgroundColor: pressed ? "#534859" : "white",
            color: pressed ? "#fff" : "#000",
          },
          styles.PressableRender
        ]}
        onPress={() => {props.onPress(item)}}
      >
        <Text style={styles.textRender}>{item}</Text>
      </Pressable>
    </View>
  );
  return (
  
    
    <Modal
      visible={props.visible}
      transparent
      onRequestClose={props.close}
    >
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.header}>
            <Text style={styles.content}>{props.title}</Text>
          </View>
          <FlatList
            data={(props.title == "Chỉ số") ? dataScale : dataTime}
            renderItem={render}
          />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000099',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 350,
    height: 250,
    //height: 450,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FAA1A1',
    //height : 100,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    margin: 10,
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Mulish-Regular',
  },
  viewRender: {
    borderRadius: 20,
    flex: 1,
    width: 350,
  },
  textRender: {
    fontFamily: 'Mulish-Regular',
    fontSize: 20,
    padding: 10,
    color: '#000'
  },
  PressableRender: {
    width: 350,
    alignItems: "center",
    borderRadius: 20,
  },
});

