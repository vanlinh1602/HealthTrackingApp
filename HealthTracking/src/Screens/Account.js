import React, {useState,useRef} from 'react';
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
const ImagePicker = require('react-native-image-picker');

export default function Account({navigation}) {
  const shadowOpt = {
    width: 350,
    height: 250,
    color: "#000",
    border: 2,
    radius: 20,
    opacity: 0.2,
    x: 5,
    y: 15,
    style: { marginVertical: 20 }
};
  const manager = new FirebaseManager()
  function LogOut(){
    manager.SignOut();
    navigation.navigate('GetStarted')
};
  const [imageSource, setImageSource] = useState(null);
  const _pickImage=()=> {
    let options = {     
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
       skipBackup: true
      }
     };
     ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
       //console.log('User cancelled photo picker');
       Alert.alert('Bạn chưa chọn ảnh');
      } else if (response.error) {
       //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
       //console.log('User tapped custom button: ', response.customButton);
      } else {
       let source = { uri: response.uri };
       console.log('response',JSON.stringify(response));
       setImageSource(source.uri);      
      }
     });
};
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
            <TouchableOpacity style={styles.CameraButton} onPress={_pickImage}>             
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
                  Họ tên: Trần Nam Khánh
                </Text>
                <Image style={styles.Line}
                  source={require('../Image/Line.png')}
                />
              </View>
              <View style={{flex:2}}>
                <Text style={styles.TextStyle}>
                  Giới tính: Nam
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



