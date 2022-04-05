import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow'


export default function CustomButton(props) {
    const shadowOpt = {
        width: props.width,
        height: props.height,
        color: "#000",
        border: 2,
        radius: 20,
        opacity: 0.2,
        x: 2,
        y: 4,
        style: { marginVertical: 0 }
    }
    return (
        <View style={{ ...props.style, justifyContent: 'center' }}>
            <BoxShadow setting={shadowOpt}>
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
            </BoxShadow>
        </View>

    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    content: {
        fontFamily: 'Mulish-Regular',
        color : '#000'
    },
});

