import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';
import PlayScreen from './PlayScreen';
import ScoreScreen from './ScoreScreen';

const HomeIcon = <Ionicons name="md-play-circle" size={35} color="#5ef992" />;
const HelpIcon = <Ionicons name="md-help" size={35} color="#fff684" />;


const HomeStack = createSwitchNavigator(
  {
    Home : {
      screen: HomeScreen,
  },
    play: {screen: PlayScreen,
  },

  score: {screen: ScoreScreen
  
  },
}
  
)

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  console.log(navigation.state.index)
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const HelpStack = createSwitchNavigator(
  {
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
  }
)

const Menu = createBottomTabNavigator(
  {
    Home : {screen: HomeStack},
    Help : {screen: HelpStack},
  }
)

export default createAppContainer(Menu)




