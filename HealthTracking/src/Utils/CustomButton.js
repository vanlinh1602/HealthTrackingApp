import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable,
    Image
  } from 'react-native';
  
  export default function CustomButton(props) {
      return (
        <View style = {{...props.style, alignItems: 'center'}}>
            <Pressable 
                style = {styles.pressaable}
                onPress = {props.PressButton}
            >
            <Image
                style = {{width: 80, height: 80, resizeMode: 'stretch'}}
                source={props.srcImage} 
            />
            </Pressable>
            <Text style = {styles.text}>{props.name}</Text>
        </View>
      );
  };


  const styles = StyleSheet.create({
    pressaable:{
        width: 130,
        height: 130,
        backgroundColor: '#FCD0D0',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 100,
    },
    text:{
        fontSize: 20,
    },
  });