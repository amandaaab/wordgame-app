import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';

const HomeIcon = <Ionicons name="md-play-circle" size={35} color="#5ef992" />;
const HelpIcon = <Ionicons name="md-help" size={35} color="#fff684" />;

const Menu = createBottomTabNavigator(
  {
  Home : {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
    
      tabBarIcon: HomeIcon,
      tabBarOptions : {
        style: {
          backgroundColor: 'transparent',
  
          borderTopWidth: 0,
      position: 'absolute',
      left: 50,
      right: 50,
      bottom: 20,
        }
      }
}),
},
Help : {
  screen: HelpScreen,
  navigationOptions: ({navigation}) => ({
  
    tabBarIcon: HelpIcon,
    tabBarOptions : {
      style: {
        backgroundColor: 'transparent',

        borderTopWidth: 0,
    position: 'absolute',
    left: 50,
    right: 50,
    bottom: 20,

      }
    }
}),
},



})


export default createAppContainer(Menu)




