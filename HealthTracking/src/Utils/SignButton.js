import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';


export default function SignButton(props) {
    return (
        <View style = {{...props.style, justifyContent: 'center'}}>
            <Pressable 
                style = {[styles.button, {backgroundColor : props.color}]}
                onPress = {props.onPress}
            >
                <Text 
                    style={[styles.content,{fontSize: props.size}]}
                >
                    {props.content}
                </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button:{
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    content:{
        fontSize : 30,
        //fontWeight : 'bold',

    },
});

