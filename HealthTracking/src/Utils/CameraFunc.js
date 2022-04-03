import React, { useImperativeHandle, forwardRef } from 'react';
import {View, Alert} from 'react-native';

const ImagePicker = require('react-native-image-picker');

const CameraFunc =(props,ref) => {
    useImperativeHandle(ref,()=>({
      _pickImage: ()=>{_pickImage()}
    }))
    const _pickImage=()=> {
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
        <View />
      );
};

export default forwardRef(CameraFunc)