import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseManager } from './FirebaseManager';
import CustomButton from './CustomButton';



export default function ModelSignIn(props) {
    const manager = new FirebaseManager()
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    function LogIn(){
        manager.signIn(mail, pass);
    }
    return (
        <View style = {{...props.style, justifyContent: 'center'}}>
            <Modal
                visible = {props.visible}
                transparent
                onRequestClose={props.close}
            >
                <View style = {styles.container}>
                    <View style = {styles.view}>
                    <View style = {styles.header}>
                        
                        <Text style = {styles.content}>Đăng Nhập</Text>
                    </View>
                        <TextInput 
                            style={styles.Input}
                            placeholder="Tài khoản"
                            onChangeText={value => setMail(value)}
                        />
                        <TextInput 
                            style={styles.Input}
                            placeholder="Mật khẩu"
                            onChangeText={value => setPass(value)}
                            secureTextEntry
                        />
                        <Text style = {styles.forgotPass}>Quên mật khẩu?</Text>
                        <CustomButton
                            content = "Đăng nhập"
                            color = '#F178B6'
                            size = {20}
                            style = {{marginBottom: 20}}
                            onPress = {LogIn}
                            width = {150}
                            height = {50}
                        />
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
        //height: 450,
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
        margin: 10,
        fontSize : 25,
        color: '#000000',
        fontFamily: 'Mulish-Regular',
    },
    Input:{
        paddingLeft : 20,
        width: 300,
        height: 50,
        borderColor: '#FCD0D0',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        fontSize: 20,
        fontFamily: 'Mulish-Regular',
    },
    forgotPass:{
        marginBottom: 10,
        marginLeft: '50%',
        color : 'blue',
        fontStyle: 'italic'
    },
});

