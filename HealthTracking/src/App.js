import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Statistical from './Screens/Statistical';
import CalendarScreen from './Screens/CalendarScreen';
import Home from './Screens/Home';
import Account from './Screens/Account'
import HeaderBar from './Utils/HeaderBar';
import GetStarted from './Screens/GetStarted';
import SignUI from './Screens/SignUI';
import Scale from './Screens/Scale';
import HeaderHome from './Utils/HeaderHome';
import Setting from './Screens/Setting';

const Stack = createStackNavigator();

const App = () => {
  const [screenFirst, setScreenFirst] = useState('GetStarted')
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            header: HeaderBar
          }}
        initialRouteName={screenFirst}
      >
        <Stack.Screen
          options={{
            header: () => null
          }}
          name='GetStarted'
          component={GetStarted}
        />
        <Stack.Screen
          options={{
            header: () => null
          }}
          name='Sign'
          component={SignUI}
        />
        <Stack.Screen
          options={{
            header: HeaderHome
          }}
          name='Trang chủ'
          component={Home}
        />
        <Stack.Screen
          name='Calendar'
          component={CalendarScreen}
        />
        <Stack.Screen
          name='Statistical'
          component={Statistical}
        />
        <Stack.Screen
          name='Account'
          component={Account}
        />
        <Stack.Screen
          name='Scale'
          component={Scale}
        />
        <Stack.Screen
          name='Setting'
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;