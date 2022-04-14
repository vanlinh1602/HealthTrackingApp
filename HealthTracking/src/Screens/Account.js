import React, {useState,useRef,useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Alert
} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../Utils/CustomButton';
import { FirebaseManager } from '../Utils/FirebaseManager';
import { BoxShadow } from 'react-native-shadow';
import { CameraFunc } from '../Utils/CameraFunc';
import { ImagePickerResponse } from 'react-native-image-picker';

export default function Account({navigation}) {
  const Camera=new CameraFunc();
  const [imageSource, setImageSource] = useState(null);
  const [data, setData]=useState(manager.dataInformation);
  function LogOut(){
    manager.SignOut();
    navigation.navigate('GetStarted')
  };
  async function GetData(){
    var getdata = await manager.getDataWithCollection("Information");
    getdata.forEach((value => {setData()}))
  }
  useEffect(()=>{
    GetData();
  },[]);
  async function pickImage(){
    const result = { uri:" "};
    result.uri = await Camera._pickImage();
    console.log("result",result);
    //setImageSource(result.uri);
  }
  return (
      <View style={styles.AccountBackground}>
          <View style={styles.Container}>
            {imageSource === null ? (
            <View style={{borderWidth:2,borderRadius:50}}>
            <Image
              source={require('../Image/PersonImage.png')}
              style={{borderRadius:20,
                resizeMode:"contain",
                height:100,
                width:100,
                }}
              resizeMode='contain'
            />
            </View>
            ) : (
            <View style={{borderWidth:2,borderRadius:50}}>
            <Image
              source={{ uri: imageSource }}
              style={{borderRadius:20,
                resizeMode:"contain",
                height:100,
                width:100,
                }}
              resizeMode='contain'
            />
            </View>
            )}     
            <TouchableOpacity style={styles.CameraButton} onPress={pickImage}>             
              <Image style={{
                resizeMode:"contain",
                height:30,
                width:30,
              }}
              source={require('../Image/camera.png')}
              />                  
            </TouchableOpacity>

            <BoxShadow setting = {shadowOpt}>
            <View style={styles.InfomationBox}>
            
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  {data.userName}
                </Text>
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  {data.mail}
                </Text>
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Tuổi: 19
                </Text> 
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Email: Demo@gmail.com
                </Text> 
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
            
            </View>   
            </BoxShadow>

            <View>
              <CustomButton
                content='Đổi mật khẩu'
                size={20}
                style={styles.ButtonStyle}
                width={150}
                height={75}
                color='#FAA1A1'
              />
              <CustomButton
                content='Đăng xuất'
                size={20}
                style={styles.ButtonStyle}
                onPress = {LogOut}
                width={150}
                height={75}
                color='#FAA1A1'
              />
            </View>  
          </View>

      </View>
    );
            
          
};

const styles = StyleSheet.create({
    AccountBackground:{
        flex:1,
        backgroundColor:'#FDE7E7',
        alignItems: 'center',
    },
    Container:{
      flex:1,
      height:100,
      marginTop:25,
      width:'100%',
      alignItems:'center',
    },
    CameraButton:{
      padding:10,
      margintop:50,
      height:40,
      width:100,
      alignItems:'center',
    },
    InfomationBox:{
      backgroundColor:'#FCD0D0',    
      height:250,
      width:'100%',
      padding:10,
      borderRadius:20,
      marginTop:10,
      justifyContent:'space-around',
      flexDirection:'column',
    },
    TextStyle:{
      fontSize:20,
      textAlign:'left',
    },
    Line:{
      height:5,
      width:'80%',
      marginTop:15
    },
    ButtonStyle:{
      marginTop:10,
      padding:10,
    }
});

const manager = new FirebaseManager();

const shadowOpt = {
  width: 350,
  height: 250,
  color: "#000",
  border: 2,
  radius: 20,
  opacity: 0.15,
  x: 5,
  y: 15,
  style: { marginVertical: 10 }
};


