import React , {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
  } from 'react-native';

  import ListAlarms from '../Utils/components/ListAlarms';

  import TimePicker from '../Utils/components/TimePicker'; 

  // export default function Setting() {

  //   return(
  //   <View style ={styles.mainContainer}>
  //     <Text style = {styles.heading}>
  //       Alarm App
  //     </Text>
  //     <SafeAreaView style ={styles.listAlarms}>
  //       <ListAlarms />

  //     </SafeAreaView>
  //     <View style ={styles.timePicker}> 
  //       <TimePicker />
  //     </View>
  //   </View>
  //   )
  // }

  class Setting extends Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.heading}> Alarm App </Text>
          <SafeAreaView style={styles.listAlarms}>
            <ListAlarms />
          </SafeAreaView>
  
          <View style={styles.timePicker}>
            <TimePicker />
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({    
    mainContainer :{
      flex :1,
      alignItems: 'center',
    },
    heading: {
      fontSize: 25,
      padding: 20,
    },
    timePicker:{
      paddingTop: '10%',
      width : '50%',
      bottom: 20,
    },
    listAlarms :{
      flex: 1,
      width: "100%",
    }
  });

  export default Setting;