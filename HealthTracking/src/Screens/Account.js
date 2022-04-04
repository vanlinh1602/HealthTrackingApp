import { StackView } from '@react-navigation/stack';
import React, {useState,setState,state} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  Image,
  Alert
} from 'react-native';
import { Directions, TouchableOpacity } from 'react-native-gesture-handler';
import CustomSmallButton from '../Utils/CustomSmallButton';
import { FirebaseManager } from '../Utils/FirebaseManager';

const ImagePicker = require('react-native-image-picker');

export default function Account({navigation}) {
  const [imageSource, setImageSource] = useState(null);
  const [visible, setVisible] = useState('false');
  const manager = new FirebaseManager()
  function LogOut(){
    manager.SignOut();
    navigation.navigate('GetStarted')
  }
  function getBoolean(value){
    switch(value){
      case 'true':return true
      case 'fasle':return false
    }
  }
  
  function _pickImage() {

    let options = {
      title: 'You can choose one image',
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
   
       // ADD THIS
       setImageSource(source.uri);
      }
     });
  };
  return (
      <View style={styles.AccountBackground}>
          <View style={styles.Container}>
            {imageSource === null ? (
            <Image
              source={require('../Image/PersonImage.png')}
              style={{borderRadius:20,
                resizeMode:"contain",
                height:100,
                width:100}}
              resizeMode='contain'
            />
            ) : (
            <Image
              source={{ uri: imageSource }}
              style={{borderRadius:20,
                resizeMode:"contain",
                height:100,
                width:100}}
              resizeMode='contain'
            />
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

            <View>
              <CustomSmallButton
                name='Đổi mật khẩu'
                style={styles.ButtonStyle}
              />
              <CustomSmallButton
                name='Đăng xuất'
                style={styles.ButtonStyle}
                PressButton = {LogOut}
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
      alignItems:'center'
    },
    CameraButton:{
      padding:10,
      margintop:50,
      height:40,
      width:100,
      alignItems:'center'
    },
    InfomationBox:{
      backgroundColor:'#FCD0D0',    
      height:250,
      width:'90%',
      padding:10,
      borderRadius:20,
      marginTop:10,
      justifyContent:'space-around',
      flexDirection:'column'
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
      padding:10
    }
});