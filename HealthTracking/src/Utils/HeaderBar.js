import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
export default function HeaderBar({navigation}) {
    function GoBackSreen(){
        navigation.goBack()
    }
    var isGoback = true;
    const shadowOpt = {
        width: 434,
        height: 60,
        color: "#000",
        border: 2,
        radius: 20,
        opacity: 0.2,
        x: 0,
        y: 4,
        style: { marginVertical: 0 }
    }
    return (
        <View style={{backgroundColor: '#FDE7E7'}}>
        <BoxShadow setting = {shadowOpt}>

        <View style={styles.viewHeader}> 
            <View style = {{alignItems: 'center'}}>
                <Image
                    style={styles.image}
                    source={require('../Image/Love_Heart_symbol.svg.png')}
                />
            </View>
            {isGoback ? (
                <Pressable
                style={styles.BackButton}
                onPress={GoBackSreen}
                >
                <Image
                    style={styles.BackImage}
                    source={require('../Image/icons8-back-50.png')}
                />
                </Pressable>
            ): (null)}
            </View>
        </BoxShadow>

        </View>
    );

};


const styles = StyleSheet.create({
    viewHeader: {
        height: 60,
        backgroundColor: '#FCD0D0',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

        justifyContent: 'center',
    },
    image: {
        height: 30,
        width: 35,
        resizeMode: 'stretch',
    },
    BackButton: {
        marginTop: -30,
        width: 30,
        height: 30,
        marginLeft: 5,
    },
    BackImage: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    }
});