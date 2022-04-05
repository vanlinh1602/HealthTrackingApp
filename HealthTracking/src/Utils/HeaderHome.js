import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
export default function HeaderHome({ navigation }) {
    function GoBackSreen() {
        navigation.goBack()
    }
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
        <View style={{ backgroundColor: '#FDE7E7' }}>
            <BoxShadow setting={shadowOpt}>
                <View style={styles.viewHeader}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.image}
                            source={require('../Image/LOGO.png')}
                            resizeMode = "stretch"
                        />
                    </View>
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
        height: 40,
        width: 40,
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