import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calender from './Screens/Calender';
import Statistical from './Screens/Statistical';
import Home from './Screens/Home';
const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = 'Trang chủ'
            component={Home}
            options={
              {
                header: ()=>null
              }
            }
          />
          <Stack.Screen
            name = 'Calender'
            component={Calender}
          />
          <Stack.Screen
            name = 'Statistical'
            component={Calender}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;