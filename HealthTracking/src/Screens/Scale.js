import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import CustomButton from '../Utils/CustomButton';
import { FirebaseManager } from '../Utils/FirebaseManager';
import ModalAlert from '../Utils/ModelAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Scale = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState('');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [getWater, SetgetWater] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [InputAccess,SetInputAccess] = useState(false);
  const [InputAttempt,setInputAttemp] = useState(false);
  const [alertNoinput,setAlertNoinput] =useState(false)
  const manager = new FirebaseManager();
  const [saveToday,setSaveToday] = useState(new Date());
  const [isUpdating,setIsUpdating] = useState(false);
  
  const [data,setData] = useState(manager.dataHealthInfor);

    function uploadData(){
      var date = new Date(Date.now());
        data.day = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();        
        data.Height= height;
        data.Weight=weight;
      var username = manager.GetUserName();
        data.userName=username;
        manager.AddDataRandomDoc("HealthInfo", data);
        
        console.log("Done upload Data")
    }

    const HandleChange =async()=>{
      setInputAttemp(false);
      setIsUpdating(true);
      var date = new Date(Date.now());
        data.day = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();        
        data.Height= height;
        data.Weight=weight;
      var username = manager.GetUserName();
        data.userName=username;
        const query = ["day",'==',data.day.toString()]
        await manager.UpdateData("HealthInfo",data,query)
      
      
      console.log('Update Data thanh cong')
    }

  useEffect(()=>{
    getDataSaveToday();
    var thisDay =new Date(Date.now());
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    var hour = new Date().getHours()
    var minutes = new Date().getMinutes()
    setCurrentDate(
      date +'/' + month +'/'+ year + ' - '+ hour +':' + minutes
    )
        data.day = thisDay.getDate() + '/' + (thisDay.getMonth()+1) + '/' + thisDay.getFullYear();
        const getThisDay = manager.getDataWithCollection("HealthInfo","day","==",data.day.toString())
        if(getThisDay == data.day){
          setInputAttemp(true);
        }else setInputAttemp(false);
  },[]);

  const ModalAlertOn=() =>{
    SetInputAccess(true);
  }
  const ModalAlertNoInput=() =>{
    setAlertNoinput(true);
  }

  
   
const getDataSaveToday = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('saveDate')
    console.log('getDataDateOK');
    return jsonValue != null ? JSON.parse(jsonValue) : null;

  } catch(e) {
    console.log('getDataSaveToday error!');
  }
}

  const saveDate = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('saveDate', jsonValue)
      console.log('save day ok');
    } catch (e) {
      console.log('error saveDate');
    }
  }

  const handleEnter =() =>{
    if(InputAttempt == true){
      ModalAlertOn();
    }
    if(InputAttempt == false){
      if(height== null|| weight == null){
        ModalAlertNoInput(true);
    }else handleBmi();
    
    }
    
  }


  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    let waterInput = Number(weight) * 0.03;
    SetgetWater(waterInput);
  
    if (val < 18.5) {
      setInfo('Under Weight');
    } else if (val > 18.5 && val <= 24.9) {
      setInfo('Healthy');
    } else if (val > 24.9 && val < 30) {
      setInfo('Overweight');
    } else {
      setInfo('Obese');
    }
    //luu ngay nhap
    let today = new Date(Date.now());
    setSaveToday(today);
    console.log(saveToday);
    saveDate(saveToday);
    //so lan nhap
    if(isUpdating == false){
    setInputAttemp(true);
    //up data len database
    uploadData();
    }
  };

  return (
    <View style={styles.body}>
      <View style ={{marginTop:'5%',marginRight:'45%'}}>
        <Text style={styles.time}>{currentDate}</Text>
      </View>
      <View>
        <Text style={{fontSize:35,fontFamily: 'PlayBall-Regular',color:'#EF5DA8'}}>Scale Input</Text>
      </View>
      <ModalAlert
            visible={InputAccess}
            close={()=>SetInputAccess(false)}
            content='Bạn chỉ được nhập 1 lần trong ngày!'
          />
      <ModalAlert
            visible={alertNoinput}
            close={()=>setAlertNoinput(false)}
            content='Cần nhập chỉ số!'
          />
      <View style={styles.InformationBox}>
        <Text style={styles.text}>Height : </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setHeight(value)}
          placeholder="cm"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.InformationBox}>
        <Text style={styles.text}>Weight : </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setWeight(value)}
          placeholder="kg"
          keyboardType="numeric"
        />
      </View>
      <View>
      <CustomButton
        content = "Enter"
        color = "#EF5DA8"
        size = {25}
        style = {styles.enter}
        onPress = {handleEnter}
        width ={150}
        height = {50}
      />
      
        <TouchableOpacity onPress={HandleChange}>       
          <Image
                source={require('../Image/Change.png')}
                style={{marginLeft:'38%',marginTop:'-15%'}}
          />
        
        </TouchableOpacity>
      </View>
      {/* <Pressable
        onPress={handleBmi}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#FCD0D0' : '#EF5DA8'},
          styles.enter,
        ]}>
        <Text style={{fontSize: 20, color: '#000'}}>Enter</Text>
      </Pressable> */}

      <View style={styles.InformationBox}>
        <View>
          <Text style={styles.text}>
            BMI: {bmi}   {info}
          </Text>
        </View>

        <View style={styles.InformationBox}>
          <Text style={styles.text}>Water need: {getWater} </Text>
        </View>
      </View>
      
      <View style ={{marginTop: 17,marginLeft:105}}>
        <Text style ={styles.noteScale}>
          liter
        </Text>        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FDE7E7',
    alignItems: 'center',
    justifyContend: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    
    margin: 20,
  },
  InformationBox: {
    backgroundColor: '#FCD0D0',
    height: 80,
    width: 390,
    padding: 2,
    borderRadius: 40,
    marginTop: "5%",
    justifyContend: 'space-around',
    flexDirection: 'column',
  },
  image: {
    height: 300,
    width: 300,
  },
  textInput: {
    fontSize: 25,
    color: '#000000',
    marginLeft: "35%",
    marginTop: '-16%'
  },
  enter: {
    marginTop: '5%',
    width: 110,
    height: 45,
    //backgroundColor: '#FAA1A1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50%',
    borderRadius: 20,
  },
  noteScale:{
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    margin:'7.5%'
  },
  time:{
    fontSize:25,
    color:'#F9476C',
    fontWeight:'600',
    fontFamily: 'Mulish-Regular'
  }
});

export default Scale;
