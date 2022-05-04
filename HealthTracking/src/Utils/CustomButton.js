import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow'


export default function CustomButton(props) {
    return (
        <View style={{ ...props.style, justifyContent: 'center' }}>
                <Pressable
                    style={[styles.button, { 
                        backgroundColor: props.color, 
                        width: props.width, 
                        height: props.height, 
                    }]}
                    onPress={props.onPress}
                >
                    <Text
                        style={[styles.content, { fontSize: props.size }]}
                    >
                        {props.content}
                    </Text>
                </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderBottomWidth : 3,
        borderRightWidth: 3,
        borderLeftWidth: 0.01,
        borderColor: '#00000050'
    },
    content: {
        fontFamily: 'Mulish-Regular',
        color : '#000'
    },
});

