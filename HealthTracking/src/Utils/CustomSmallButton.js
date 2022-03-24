import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable
  } from 'react-native';
  
  export default function CustomSmallButton(props) {
      return (
        <View style = {props.style}>
            <Pressable 
                style = {styles.pressaable}
                onPress = {props.PressButton}
            >
                <Text style = {styles.text}>{props.name}</Text>
            </Pressable>
        </View>
      );
  };


  const styles = StyleSheet.create({
    pressaable:{
        width: 150,
        height: 60,
        backgroundColor: '#FAA1A1',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 21,
    },
    text:{
        fontSize: 20,
    },
  });