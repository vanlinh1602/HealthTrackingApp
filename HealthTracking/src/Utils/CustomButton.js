import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable
  } from 'react-native';
  
  export default function CustomButton(props) {
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
        height: 150,
        backgroundColor: '#fc8',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 100,
    },
    text:{
        fontSize: 25,
    },
  });