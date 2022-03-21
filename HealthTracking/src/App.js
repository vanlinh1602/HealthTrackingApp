import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Calender from './Screens/Calender';
import Statistical from './Screens/Statistical';
import Home from './Screens/Home';
=======
import Statistical from './Screens/Statistical';
import CalendarScreen from './Screens/CalendarScreen';
import Home from './Screens/Home';
import HeaderBar from './Utils/HeaderBar';
>>>>>>> master
const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
<<<<<<< HEAD
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
=======
        <Stack.Navigator
          screenOptions={
            {
              header: HeaderBar
            }}
        >
          <Stack.Screen
            name = 'Trang chủ'
            component={Home}
          />
          <Stack.Screen
            name = 'Calendar'
            component={CalendarScreen}
          />
          <Stack.Screen
            name = 'Statistical'
            component={Statistical}
>>>>>>> master
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;