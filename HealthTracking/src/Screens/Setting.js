import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Dimensions,
    Image
  } from 'react-native';

  export default function Setting(){



    return(
    <View style = {styles.body}>
        <Text style ={styles.text}>
            this is setting page
        </Text>
    </View>
    )
  }

  const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FDE7E7',
        alignItems: 'center',
        justifyContend: 'center',
      },
      text: {
        color: '#000000',
        fontSize: 25,
        fontStyle: 'italic',
        
        margin: 20,
      },
  });