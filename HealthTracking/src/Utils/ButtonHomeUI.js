import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';

export default function ButtonHomeUI(props) {
    return (
        <View style={{ ...props.style, alignItems: 'center' }}>
                <Pressable
                    style={styles.pressaable}
                    onPress={props.PressButton}
                >
                    <Image
                        style={{ width: 100, height: 100, resizeMode: 'stretch' }}
                        source={props.srcImage}
                    />
                    <Text style={styles.text}>{props.name}</Text>
                </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({

    
    pressaable: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FCD0D0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderBottomWidth : 5,
        borderRightWidth: 5,
        borderLeftWidth: 0.01,
        borderColor: '#00000050'
    },
    text: {
        fontFamily: 'Mulish-Regular',
        marginTop : 20,
        fontSize: 22 ,
        color: '#000'
    },
});