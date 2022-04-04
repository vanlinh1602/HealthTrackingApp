import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
const shadowOpt = {
    width: 160,
    height: 190,
    color: "#000",
    border: 5,
    radius: 40,
    opacity: 0.2,
    x: 1,
    y: 4,
    style: { marginVertical: 0 }
}
export default function CustomButton(props) {
    return (
        <View style={{ ...props.style, alignItems: 'center' }}>

            <BoxShadow setting={shadowOpt}>
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

            </BoxShadow>
        </View>
    );
};


const styles = StyleSheet.create({
    pressaable: {
        width: 160,
        height: 190,
        backgroundColor: '#FCD0D0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    text: {
        fontFamily: 'Mulish-Regular',
        marginTop : 20,
        fontSize: 22 ,
        color: '#000'
    },
});