import React, { useState, useEffect } from "react";
import { Button, View, FlatList,Alert, Text, StyleSheet, TouchableOpacity,Image, Modal } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PushNotification from "react-native-push-notification";
import { ListItem } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
//import { FirebaseManager } from "../Utils/FirebaseManager";

export default function Setting() {
    const [index, setIndex] = useState(1);
    const [isDateTimePickerVisible,setIsDateTimePickerVisible] = useState(false);
    const [Modalvisible,setModalVisible] = useState(false);
    const [modalLabel,setModalLabel] = useState('Alarm');

    useEffect(() => {
        getData();
    },[]);

        const getData = async () =>{
            AsyncStorage.getItem("storeAlarm").then(data => {
                if(data !== null) {
                    setDATA(JSON.parse(data))
                    console.log('Loaded Alarm')
                }
            }).catch((error) => console.log(error));
        }

    function GetPushNotification(date) {
        PushNotification.localNotificationSchedule({
            channelId: "Test-channel",
            title: "HealthTracking ",
            //message: "Có lời nhắc nhở, hãy mở app để xem",
            message: modalLabel.toUpperCase().toString(),
            date: date,
        })
    }

    const [DATA, setDATA] = useState([

    ]);

    const handleRemoveItem = (id) => {
        setDATA(DATA.filter(item => item.id !== id));
        
        AsyncStorage.removeItem("storeAlarm", JSON.stringify(setDATA)).then(() =>{
            console.log('Deleted Alarm');
        }).catch(error => console.log(error));
    };

    const renderItem = ({ item }) => (
    <ListItem>           
        <ListItem.Content>
        <ListItem.Subtitle style={{fontSize:20,color:'purple',fontWeight:'bold'}}>{item.modalLabel}</ListItem.Subtitle>
            <ListItem.Title style = {styles.AlarmTittle}>{item.hour}</ListItem.Title>                    
            <ListItem.Subtitle style={styles.AlarmSubTittle}>{item.day}</ListItem.Subtitle>                 
        </ListItem.Content>
            <Button
                title ="Remove"
                color="red"
                onPress={() => handleRemoveItem(item.id)}
            />
    </ListItem>     
    );

    function AddDay(date) {
        
        var newdate={
            id: index,
            modalLabel:modalLabel,
            hour: date.getHours() + ":" + date.getMinutes(),
            day: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
            const newAlarm = [...DATA, newdate]
        setIndex(index + 1);
        
        AsyncStorage.setItem("storeAlarm", JSON.stringify(newAlarm)).then(() =>{
            setDATA(newAlarm);
            console.log('okay');
        }).catch(error => console.log(error));
        
        
    }


    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true)
        OnpressCloseModal();
        console.log('Shown DatePicker')
    };

    const hideDateTimePicker = () => {
       setIsDateTimePickerVisible(false)
    };

    const OnpressOpenModal =() =>{
        setModalVisible(true);
    };

    const OnpressCloseModal =()=>{
        setModalVisible(false);
    };

    const handleConfirm = (date) => {
        //let Day = new Date(Date.now());
        //if(Day <= date){
        AddDay(date);   
        GetPushNotification(date);
        hideDateTimePicker();
    //} else {
        //Alert.alert('Warning','Vui lòng nhập thời gian tương lai. ',[
           // {text:'OK'}
        //]);
        //handleConfirm();
    //}
    };

    return (
        <View style={styles.container}>
            <Modal 
            visible= {Modalvisible} 
            transparent
            >
                
                <View style={styles.ModalBackground}>
                <View style={styles.ModalContainer}>
                    <View style={{marginLeft:'85%',marginTop:'-4%'}}>
                        <TouchableOpacity onPress = {OnpressCloseModal}>
                        <Image
                            source={require('../Image/X.png')}
                            style={{height:30,width:30}}
                        />
                        </TouchableOpacity>
                    </View>
                    <Text style ={{fontSize:30,color:'black'}}>Alarm Label: </Text>
                    <TextInput
                        style={{fontSize:20}}
                        onChangeText={value => setModalLabel(value)}
                        placeholder="kg"
                        keyboardType='default'
                    />
                    <View style={{marginLeft:'85%'}}>
                        <TouchableOpacity onPress = {showDateTimePicker}>
                            <Image
                                source={require('../Image/OK.png')}
                                style={{height:30,width:30}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {/* <Button title="Show Date Picker" 
            onPress={showDateTimePicker} 
            color='red'
            /> */}
            <TouchableOpacity
            onPress={OnpressOpenModal}
            >
            <Image
                source={require('../Image/AlarmAdd.png')}
                style={{marginLeft:'80%',marginBottom:'5%'}}
            />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDateTimePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDateTimePicker}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    ModalBackground: {
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        //backgroundColor:'grey'
        
    },
    ModalContainer: {
        width: '80%',
        backgroundColor:'pink',
        paddingHorizontal: 20,
        paddingVertical: 30 ,
        borderRadius:20,
        elevation:20,
        marginLeft:'10%'
    },
    Alarmcontainer: {
     backgroundColor: '#FCD0D0', 
     margin: 10,
     
    },
    AlarmTittle:{
        fontSize:35,
        fontWeight:'bold'
    },
    AlarmSubTittle:{
        fontSize:15,
    },
    
});

