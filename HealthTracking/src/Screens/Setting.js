import React, { useState } from "react";
import { Button, View, FlatList, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PushNotification from "react-native-push-notification";
import { ListItem } from 'react-native-elements';

export default function Setting() {
    const [index, setIndex] = useState(1);
    const [isDateTimePickerVisible,setIsDateTimePickerVisible] = useState(false);
    //const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    function GetPushNotification(date) {
        PushNotification.localNotificationSchedule({
            channelId: "Test-channel",
            title: "HealthTracking ",
            message: "Info",
            date: date
        })
    }
    const [DATA, setDATA] = useState([

    ]);

    const handleRemoveItem = (id) => {
        setDATA(DATA.filter(item => item.id !== id));
    };

    const renderItem = ({ item }) => (
    //     <View style={styles.Alarmcontainer}>
    //     <Text style={styles.title}>{item.hour}</Text>
    //     <Text style={styles.title}>{item.day}</Text>
    //     <Button
    //         title='Remove'
    //         onPress={() => handleRemoveItem(item.id)}
    //     >
    //     </Button>
    // </View>
    <ListItem>           
        <ListItem.Content>
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
        setDATA([...DATA, {
            id: index,
            hour: date.getHours() + ":" + date.getMinutes(),
            day: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }])
        setIndex(index + 1);
    }
    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true)
        console.log('yes')
    };

    const hideDateTimePicker = () => {
       setIsDateTimePickerVisible(false)
    };

    const handleConfirm = (date) => {
        AddDay(date);
        GetPushNotification(date);
        hideDateTimePicker();
    };

    return (
        <View style={styles.container}>
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
            onPress={showDateTimePicker}
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
        //justifyContent: 'center',
        //alignItems: 'center',
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
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

