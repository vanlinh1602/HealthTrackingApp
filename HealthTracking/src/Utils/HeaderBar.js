import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  Image
} from 'react-native';

export default function HeaderBar(){
    
    return(
        <View style={styles.viewHeader}>
            <Image 
                style = {styles.image}
                source={require('../Image/Love_Heart_symbol.svg.png')}
            />
        </View>
    );

};


const styles = StyleSheet.create({
    viewHeader:{
        height: 50,
        backgroundColor: '#FCD0D0',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height: 30,
        width: 35,
        resizeMode: 'stretch',
    }
});