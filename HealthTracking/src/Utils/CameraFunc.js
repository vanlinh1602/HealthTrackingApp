import React, { Component } from 'react';
import {Alert} from 'react-native';

const ImagePicker = require('react-native-image-picker');

export class CameraFunc extends Component {

  uri;

  constructor(props){
    super(props)
    this.uri = "";
  };
  async _pickImage(){
        let options = {
          mediaType: 'photo',
          storageOptions: {
           skipBackup: true
          }
         };
       
        await ImagePicker.launchImageLibrary(options, response => {
          if (response.didCancel) {
           //console.log('User cancelled photo picker');
           Alert.alert('Bạn chưa chọn ảnh');
          } else if (response.error) {
           //console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
           //console.log('User tapped custom button: ', response.customButton);
          } else {
           const source = { uri : response.assets[0].uri };
           //console.log("response",response.assets[0].uri);
           //console.log("source",source);
           this.uri = source.uri;
           //return source.uri;
           // ADD THIS
           //setImageSource(source.uri);
          }
         });
      };    
};
