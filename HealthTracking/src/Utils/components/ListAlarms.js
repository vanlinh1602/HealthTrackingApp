import React  from 'react';
import{
    StyleSheet,
    FlatList,
    View,
    Button,
    TouchableOpacity,
}from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteAlarm } from '../actions/alarms';
import PushNotification  from "react-native-push-notification";

const ListAlarms=(props) => {
    const keyExtractor = (item,index) => index.toString();
    const renderItem = ({item}) => {
        return(
            <ListItem>
                <TouchableOpacity>
                    onPress = {()=> {handleNotification()}}
                <ListItem.Content>
                    <ListItem.Title style = {styles.titleStyle}>{item.time.toString()}</ListItem.Title>                    
                    <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
                    {/* <ListItem.Title style = {styles.titleStyle}>2:32 PM</ListItem.Title>                    
                    <ListItem.Subtitle>31/3/2022 </ListItem.Subtitle> */}
                </ListItem.Content>
                <Button
                    title ="Remove"
                    color="red"
                    Onpress ={() => {
                        //console.log(item);
                        props.delete(item.value);
                    }}
                />
                </TouchableOpacity>
            </ListItem>       
        );
    }

    const handleNotification = (item) => {
        PushNotification.localNotification({
            channelId: "test-channel",
            title: " You clicked on" + item.time,
            message: item.date,
        });
    }
    return(
        <FlatList
            keyExtractor = {keyExtractor}
            data = {props.alarms}
            renderItem={renderItem}
        />
    );

 }



const styles = StyleSheet.create({
    // container: {},
    titleStyle: {
        fontWeight: "bold",
        fontSize: 30,           
    }
})

const mapStateToProps = state => {
    return {
        alarms:state.alarms.alarms,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        delete: value => {
            dispatch(deleteAlarm(value));
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(ListAlarms);
//export default ListAlarms;
