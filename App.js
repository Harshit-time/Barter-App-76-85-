import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import SignUpLoginScreen from './screens/SignUpLoginScreen';
import{AppDrawer} from './components/AppDrawer';


export default function App() {
  return (
    
      <AppContainer />

  );
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen:SignUpLoginScreen},
  Drawer : {screen:AppDrawer}
})

const AppContainer = createAppContainer(switchNavigator);
