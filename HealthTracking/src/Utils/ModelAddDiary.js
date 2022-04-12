import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
    Image,
    Dimensions,
    TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import { FirebaseManager } from './FirebaseManager';

export default function ModelReadDiary(props) {
    const manager = new FirebaseManager();
    const [data, setData] = useState(manager.dataDiary);

    function PushDataToDataBase(){
        var date = new Date(Date.now());
        data.day = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
        data.image = '../Image/imagenice.jpg';
        manager.AddDataRandomDoc("Diary", data);
        props.close();
    }

    return (
        <View style={{ ...props.style, justifyContent: 'center' }}>
            <Modal
                visible={props.visible}
                transparent
                onRequestClose={props.close}
            >
                <View style={styles.container}>
                    <View style={styles.mainView} >
                        <View style={{ backgroundColor: "#FCD0D0", alignItems: 'center', borderRadius: 20 }}>
                            <Pressable
                                style={{ marginLeft: '80%', marginTop: 20, }}
                                onPress = {props.close}
                            >
                                <Image
                                    resizeMode="stretch"
                                    source={require('../Image/icons8-close-64.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </Pressable>
                            <Text style={styles.write}>Viết</Text>
                        </View>
                        <View >
                            <Text style={styles.title}>Tiêu đề {props.day}</Text>
                            <TextInput
                                style = {styles.inputTitle}
                                placeholder = "Cảm nhận của bạn về ngày hôm nay"
                                multiline
                                onChangeText={value => data.title = value}
                            />
                            <Text style={styles.story}>Nhật ký</Text>
                            <TextInput
                                style = {styles.inputStory}
                                placeholder = "Hãy viết một vài điều gì đó mà bạn thấy ấn tượng trong ngày hôm nay"
                                multiline
                                onChangeText={value => data.status = value}
                            />
                        </View>
                        <ScrollView 
                            horizontal={true}
                            style = {{marginLeft: "25%", marginBottom: 10}}
                        >

                            <Pressable
                                style = {styles.image}
                            >
                                <Image
                                    resizeMode="stretch"
                                    source={require('../Image/icons8-image-96.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </Pressable>
                            <Pressable
                                style = {styles.camera}
                            >
                                <Image
                                    resizeMode="stretch"
                                    source={require('../Image/camera.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </Pressable>
                            <CustomButton
                                content="Xong"
                                color='#F9476C99'
                                style={styles.btnSubmit}
                                size={20}
                                onPress={PushDataToDataBase}
                                width={150}
                                height={50}
                            />
                        </ScrollView>

                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000099',
        flex: 1,
        justifyContent: 'center',
    },
    mainView: {
        backgroundColor: '#FDE7E7',
        with: Dimensions.get("window").width,
        //maxHeight: 700,
        borderRadius: 20,

    },
    write: {
        fontFamily: 'Playball-Regular',
        width: 300,
        textAlign: 'center',
        fontSize: 40,
        padding: 10,
        color: '#000',
        marginTop: -60,
    },

    title: {
        fontFamily: 'Mulish-Regular',
        //fontFamily: 'Playball-Regular',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 10,
        color: '#000'
    },

    inputTitle:{
        fontSize : 20,
        paddingLeft : 20,
        fontFamily: 'Mulish-Regular',

    },
    story: {
        fontFamily: 'Mulish-Regular',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 10,
        color: "#000",
    },
    inputStory:{
        fontSize : 20,
        paddingLeft: 20,
        height: 370,
        textAlignVertical: 'top',
        fontFamily: 'Mulish-Regular',

    },
    image:{
        margin : 10,
        marginTop : 25,
    },
    camera:{
        margin : 10,
        marginTop : 25,
    },
    btnSubmit: {
        margin : 20,
        fontFamily: 'Mulish-Regular',
        color : "#000"
    }
});

