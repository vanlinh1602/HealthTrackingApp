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

    return (
        <View style={{ backgroundColor: '#FDE7E7' }}>
                <View style={styles.viewHeader}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.image}
                            source={require('../Image/LOGO.png')}
                            resizeMode = "stretch"
                        />
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewHeader: {
        height: 60,
        backgroundColor: '#FCD0D0',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: '#00000050',
        borderBottomWidth: 4,
        borderLeftWidth: 0.01,
        borderRightWidth: 0.01,
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