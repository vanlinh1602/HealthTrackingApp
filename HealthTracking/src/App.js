import React from 'react';
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
import Scale from './Screens/Scale';
import Setting from './Screens/Setting';
const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
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
          />
          <Stack.Screen
            name ='Account'
            component={Account}
          />
          <Stack.Screen
            name ='Scale'
            component={Scale}
          />
          <Stack.Screen
            name ='Setting'
            component={Setting}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;