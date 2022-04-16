import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    Image
} from 'react-native';


export default function ModalAlert(props) {
    
    return (
        <View style={{ ...props.style, justifyContent: 'center' }}>
            <Modal 
                visible = {props.visible}
                transparent
                onRequestClose={props.close}>
                <View style = {styles.container}>
                    <View style = {styles.view}>
                    <View style = {styles.header}>
                        
                        <Text style = {styles.text}>Cảnh báo</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>
                            {props.content}
                        </Text>
                        <Image 
                            style={styles.ImageStyle}
                            source={require('../Image/Alert.png')}                    
                        />
                    </View>  
                    </View>    
                </View>

            </Modal>

        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#00000099',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
        width : 350,
        height: 150,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
    },
    header:{
        backgroundColor : '#FAA1A1',
        //height : 100,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    content:{
        flexDirection:'row-reverse',
        flex:1,

    },
    text:{
        margin: 10,
        fontSize : 25,
        color: '#000000',
        fontFamily: 'Mulish-Regular',
    },
    ImageStyle:{
        resizeMode:'cover',
        height:50,
        width:50,
    }
})
