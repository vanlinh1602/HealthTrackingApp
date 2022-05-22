import React, {useState,useEffect, useCallback} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../Utils/CustomButton';
import { FirebaseManager } from '../Utils/FirebaseManager';
import { BoxShadow } from 'react-native-shadow';
import { CameraFunc } from '../Utils/CameraFunc';
import ModelChangePass from '../Utils/ModelChangePass';
import ModalAlert from '../Utils/ModelAlert';
import ModalChangeInfo from '../Utils/ModalChangeInfo'

export default function Account({navigation}) {
  const Camera = new CameraFunc();
  const [imageSource, setImageSource] = useState("null");
  const [data, setData]=useState(manager.dataInformation);
  const [isChangePassVisible, setChangePassVisible]=useState(false);
  const [isAlertVisible, setAlertVisible]=useState(false);
  const [isChangeInfoVisible, setChangeInfoVisible]=useState(false);
  async function LogOut(){
    await manager.SignOut();
    navigation.replace('GetStarted')
  };
  async function GetData(){
    var getdata = await manager.getDataWithCollection("Information");
    getdata.forEach((value => {setData(value)}))
    try{
      var source = await manager.getImage("Information", "Avatar")
      setImageSource(source);
    }catch{}
  }

  useEffect(()=>{
    GetData();
  },[imageSource]);
  async function pickImage(){
    await Camera._pickImage();
    if(Camera.uri=="null"){
      setAlertVisible(true);
    }
    else{
    setImageSource(Camera.uri);
    manager.uploadImage("Information","Avatar",Camera.uri)
    }
  }
  async function TurnOff(){
    await GetData();
    setChangeInfoVisible(false);
  }
  return (
      <View style={styles.AccountBackground}>
          <ModalChangeInfo
            visible={isChangeInfoVisible}
            close={TurnOff}
          />
          <ModalAlert
            visible={isAlertVisible}
            close={()=>setAlertVisible(false)}
            content='Bạn chưa chọn ảnh!'
          />
          {isChangePassVisible ? 
          <ModelChangePass
            visible={isChangePassVisible}
            mail = {data.mail}
            close={() => setChangePassVisible(false)}
          /> : null
          }
          <View style={styles.Container}>
            {imageSource === "null" ? (
            <View>
            <Image
              source={require('../Image/PersonImage.png')}
              style={styles.ImageStyle}            
            />
            </View>
            ) : (
            <View>
            <Image
              source={{ uri: imageSource }}
              style={styles.ImageStyle}
            />
            </View>
            )}   
            <TouchableOpacity style={styles.CameraButton} onPress={pickImage}>             
              <Image style={{
                resizeMode:"cover",
                height:30,
                width:30,
              }}
              source={require('../Image/camera.png')}
              />                  
            </TouchableOpacity>  
          </View>

          <View style={styles.Container}>
            <BoxShadow setting = {shadowOpt}>
            <View style={styles.InfomationBox}>
            
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Họ tên: {data.name}
                </Text>
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Giới tính: {data.gender}
                </Text>
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Tuổi: {data.yearold}
                </Text> 
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Email: {data.mail}
                </Text> 
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  SDT: {data.phone}
                </Text> 
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
            </View>   
            </BoxShadow>

            <View>
              <CustomButton
                content='Chỉnh sửa'
                size={20}
                style={styles.ButtonStyle}
                onPress={()=>setChangeInfoVisible(true)}
                width={150}
                height={50}
                color='#FAA1A1'
              />
              <CustomButton
                content='Đổi mật khẩu'
                size={20}
                style={styles.ButtonStyle}
                onPress={()=>setChangePassVisible(true)}
                width={150}
                height={50}
                color='#FAA1A1'
              />
              <CustomButton
                content='Đăng xuất'
                size={20}
                style={styles.ButtonStyle}
                onPress = {LogOut}
                width={150}
                height={50}
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
      height:'15%',
      marginTop:'5%',
      width:'100%',
      alignItems:'center',
    },
    CameraButton:{
      padding:'1%',
      margintop:'10%',
      height:'100%',
      width:'100%',
      alignItems:'center',
    },
    InfomationBox:{
      backgroundColor:'#FCD0D0',    
      height:'100%',
      width:'100%',
      padding:'3%',
      borderRadius:20,
      marginTop:'5%',
      justifyContent:'space-around',
      flexDirection:'column',
    },
    TextStyle:{
      fontSize:20,
      textAlign:'left',
    },
    Line:{
      height:'5%',
      width:'80%',
      marginTop:'5%'
    },
    ButtonStyle:{
      marginTop:'5%'
    },
    ImageStyle:{
      borderRadius:50,
      resizeMode:"cover",
      height:'100%',
      width:100,
      borderWidth:2,
      borderColor:"black"  
    }
});

const manager = new FirebaseManager();

const shadowOpt = {
  width: 360,
  height: 300,
  color: "#000",
  border: 2,
  radius: 20,
  opacity: 0.15,
  x: 5,
  y: 22.5,
  style: { marginVertical: 10 }
};


