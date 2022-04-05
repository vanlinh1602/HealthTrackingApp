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

export default function ModelSignUp(props) {
    const manager = new FirebaseManager();
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const [repass, setRepass] = useState();
    function SignNewAccount(){
        if (pass == repass){
            manager.singUp(mail, pass)
        }
        else{
            alert("Mật khẩu không trùng khớp");
        }
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
                        
                        <Text style = {styles.content}>Đăng Ký</Text>
                    </View>
                        <TextInput 
                            style={styles.Input}
                            placeholder="Tài khoảng"
                            onChangeText={value => setMail(value)}
                        />
                        <TextInput 
                            style={styles.Input}
                            placeholder="Mật khẩu"
                            onChangeText={value => setPass(value)}
                            secureTextEntry
                        />
                        <TextInput 
                            style={styles.Input}
                            placeholder="Nhập lại mật khẩu"
                            onChangeText={value => setRepass(value)}
                            secureTextEntry
                        />
                        <CustomButton
                            content = "Đăng Ký"             // chữ hiện trên button
                            color = '#F178B6'               // Màu nền
                            size = {20}                     // Cỡ chữ
                            style = {{marginBottom: 20}}    // Style bình thường
                            onPress = {SignNewAccount}      // Event khi nhấn
                            width = {150}                   // Chiều rộng button
                            height = {50}                   // Chiều cao button
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
        marginBottom: 15,
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
        marginBottom: 15,
        fontSize: 20,
        fontFamily: 'Mulish-Regular',
    },

});

