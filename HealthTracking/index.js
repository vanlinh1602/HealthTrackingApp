/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './src/Utils/store'

const store = configureStore();

const RNRedux =() => (
    <Provider store = {store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
