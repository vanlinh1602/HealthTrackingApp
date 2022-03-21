import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable
} from 'react-native';

export default function Account() {
    return (
      <View style={styles.AccountBackground}>
          <Text> This is Account screen</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    AccountBackground:{
        flex:1,
        backgroundColor:'#FDE7E7',
        alignItems: 'center',
    },
});