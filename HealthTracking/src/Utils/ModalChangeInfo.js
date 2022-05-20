import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseManager } from './FirebaseManager';
import CustomButton from './CustomButton';
import ModalAlert from './ModelAlert';

export default function ModelChangePass(props) {
    const manager = new FirebaseManager()
    const [data, setData]=useState(manager.dataInformation);
    const [name, setName]=useState();
    const [age, setAge]=useState();
    const [gender, setGender]=useState();
    const [phoneNumber, setPhoneNumber]=useState();
    const [isVisible,setVisible]=useState(false);
    const [ModalContent, setModalContent]=useState("");
    async function GetData(){
        var getdata = await manager.getDataWithCollection("Information");
        getdata.forEach((value => {setData(value)}))
      }
    
      useEffect(()=>{
        GetData();
      },[]);
    async function changeInfo(){
        if(name==""||age==""||gender==""||phoneNumber==""){
            setModalContent("Bạn chưa nhập thông tin!")
            setVisible(true);
        }
        else {
            data.name=name;
            data.yearold=age;
            data.gender=gender;
            data.phone=phoneNumber;
            await manager.UpdateData("Information",data);
            props.close();
        }
    }
    return (
        <View style = {{...props.style, justifyContent: 'center'}}>
            <Modal
                visible = {props.visible}
                transparent
                onRequestClose={props.close}
                animationType='fade'
            >
                <ModalAlert
                visible={isVisible}
                close={() => setVisible(false)}
                content={ModalContent}
                />
                <View style = {styles.container}>
                    <View style = {styles.view}>
                    <View style = {styles.header}>
                        
                        <Text style = {styles.content}>Đổi thông tin</Text>
                    </View>
                        <Text style ={styles.textStyle}>Tên:</Text>
                        <TextInput 
                            style={styles.Input}
                            placeholder={data.name}
                            onChangeText={value => setName(value)}
                        />
                        <Text style ={styles.textStyle}>Tuổi:</Text>
                        <TextInput 
                            style={styles.Input}
                            placeholder={data.yearold}
                            onChangeText={value => setAge(value)}
                        />
                        <Text style ={styles.textStyle}>Giới tính:</Text>
                        <TextInput 
                            style={styles.Input}
                            placeholder={data.gender}
                            onChangeText={value => setGender(value)}                     
                        />
                        <Text style ={styles.textStyle}>SDT:</Text>
                        <TextInput 
                            style={styles.Input}
                            placeholder={data.phone}
                            onChangeText={value => setPhoneNumber(value)}
                        />
                        <CustomButton
                            content = "Xác nhận"
                            color = '#F178B6'
                            size = {20}
                            style = {{marginBottom: 20}}
                            onPress = {changeInfo}
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
    textStyle:{
        alignSelf:'baseline', marginLeft:'10%'
    }
});

