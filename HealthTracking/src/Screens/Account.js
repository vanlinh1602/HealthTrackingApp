import { StackView } from '@react-navigation/stack';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  Image,
} from 'react-native';
import { Directions, TouchableOpacity } from 'react-native-gesture-handler';
import CustomSmallButton from '../Utils/CustomSmallButton';

export default function Account() {
    return (
      <View style={styles.AccountBackground}>
          <View style={styles.ImageContainer}>
            <Image style={{
              borderRadius:20,
              resizeMode:"contain",
              height:100,
              width:100
            }}
            source={require('../Image/PersonImage.png')}           
            />     
            <TouchableOpacity style={styles.CameraButton} onPress={()=>{alert('CLICKED')}}>             
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
    ImageContainer:{
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
      marginTop:20,
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