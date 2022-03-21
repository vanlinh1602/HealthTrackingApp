import React from 'react';
<<<<<<< Updated upstream

import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable
} from 'react-native';

export default function Setting() {
    return (
      <View>
          <Text> This is Setting screen</Text>
      </View>
    );
};
=======
import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable,
    Image
  } from 'react-native';
 
  
  const Setting = () => {
      return (
        <View style = {styles.body}>
            <Image source={require('./Kuma.png')} />
            {/* <Image
                style={styles.image}
               source = {require ('./image/icons8-teddy-bear-96.png')}
            /> */}
            <Text style= {styles.text}>
                 This is Setting screen               
            </Text>
            
            
        </View>
      );
  };

  const styles = StyleSheet.create({
        body: {
            flex : 1,
            backgroundColor : '#FDE7E7',
            alignItems : 'center',
            justifyContend : 'center',        
    },
        text: {
            color: '#000000',
            fontSize :30,           
            fontStyle : 'italic',
            margin: 10,
    },
        image: {
                width: 100,
                height: 100,
                margin: 10,
        }   
  });

  export default Setting;
>>>>>>> Stashed changes
