import React, { useState, useEffect  } from "react";
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseManager } from '../Utils/FirebaseManager';
import firestore from '@react-native-firebase/firestore';
import SignButton from '../Utils/SignButton';



export default function TestDatabase(props) {
    const manager = new FirebaseManager()
    const [data, setData] = useState();
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();

    function uploadData(){
        manager.dataDiary.day = "Now"
        manager.dataDiary.image = "có cái loz"
        manager.dataDiary.status = "Bug nhiều vl"
        manager.dataDiary.userName = "vanlinh1602"
        manager.UploadData("Diary", manager.dataDiary)
        //console.log(manager.dataDiary)
    }
    return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>

                        <Text style={styles.content}>Đăng Nhập</Text>
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder={manager.dataDiary.status}
                        onChangeText={value => setMail(value)}
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder="Mật khẩu"
                        onChangeText={value => setPass(value)}

                    />
                    <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
                    <SignButton
                        content="Oke"
                        color='#F178B6'
                        size={18}
                        style={{ margin: 20 }}
                        onPress = {uploadData}
                    />
                    <SignButton
                        content="Đăng xuất"
                        color='#F178B6'
                        size={18}
                        style={{ margin: 20 }}
                        onPress = {()=>{manager.SignOut()}}
                    />
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000099',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: 350,
        //height: 450,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#FAA1A1',
        //height : 100,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    content: {
        margin: 10,
        fontSize: 25,
        color: '#000000',
        //backgroundColor : '#FAA1A1'
        //fontWeight : 'bold',

    },
    Input: {
        paddingLeft: 20,
        width: 300,
        height: 50,
        borderColor: '#FCD0D0',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    forgotPass: {
        marginBottom: 10,
        marginLeft: '50%',
        color: 'blue',
        fontStyle: 'italic'
    },
});

