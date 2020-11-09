import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import  CustomSideBarMenu from './CustomSideBarMenu';


import SettingScreen from '../screens/SettingScreen';

export const AppDrawer = createDrawerNavigator({
    home:{
        screen:AppTabNavigator
    },
  
    Setting:{
        screen:SettingScreen
    }   
},

{
    contentComponent:CustomSideBarMenu
},

{
    initialRouteName:'home'
}

)




