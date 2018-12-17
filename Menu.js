import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';

const HomeIcon = <Ionicons name="md-play-circle" size={36} color="pink" />;



const Menu = createBottomTabNavigator({

    navigationOptions = {
        header: {
        headerStyle: {
            backgroundColor: '#03265e',
           
        }
    }},

    Home : {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Play',
        tabBarIcon: HomeIcon,

  }),
  
  }})
  
  
  export default createAppContainer(Menu)
  