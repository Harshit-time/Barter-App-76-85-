import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import SignUpLoginScreen from './screens/SignUpLoginScreen';
import{AppTabNavigator} from './components/AppTabNavigator';



export default function App() {
  return (
    
      <AppContainer />

  );
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen:SignUpLoginScreen},
  BottomTab : {screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
