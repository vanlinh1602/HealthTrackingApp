import React , { useState }from 'react';
import{
    Button,
    Alert,   
}from 'react-native';
import { connect } from 'react-redux';
import { addAlarm } from '../actions/alarms';
import DateTimePicker from 'react-native-modal-datetime-picker';

const TimePicker=(props) => {
    const[isDateTimePickerVisible,setIsDateTimePickerVisible] = useState(false);
    const makeid = ()=> {
        var length = 5;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for( var i = 0; i< length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const showDateTimePicker =() =>{
        setIsDateTimePickerVisible(true);
    }
    

    
    const hideDateTimePicker =() =>{
        setIsDateTimePickerVisible(false);
    }


    const handleDatePicked=(datetime)=>{
        var currentTime=Date.now();
        if(datetime.getTime() < currentTime){
            Alert.alert("Please choose future time");
            hideDateTimePicker();
            return;
        }
    

        const alarmNotifData ={
            id: makeid(),
            title: 'Alarm Ringging',
            message: ' My notification Message',
            channel: 'alarm-channel',
            ticker: 'My notification Message',
            auto_canel: true,
            vibrate: true,
            vibration : 100,
            small_icon: 'ic_launcher',
            large_icon: 'ic_launcher',
            play_sound: true,
            sound_name: null,
            color: "red",
            schedule_once: true,
            tag: "some_tag",
            fire_date: Date.now(),
            date: { value: datetime}

        }
        props.add(alarmNotifData);
        hideDateTimePicker();
    }


    return(
        <>
            <Button
                title ="+ Add Alarms"
                color="red"
                // Onpress ={() => {
                //         showDateTimePicker();
                // }}
                onPress={showDateTimePicker}          
            />
            <DateTimePicker
                mode = "datetime"
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
            />
        </>
    );
}

const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = dispatch => {
    return{
        add: alarmNotifObj => {
            dispatch(addAlarm(alarmNotifObj));
        },
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(TimePicker);