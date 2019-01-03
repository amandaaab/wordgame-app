import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';
import PlayScreen from './PlayScreen';
import ScoreScreen from './ScoreScreen';
import ProfileScreen from './ProfileScreen';
import * as firebase from 'firebase';

import 'firebase/firestore';

//const firebase = require("firebase");

// Intialize Firebase
/*const config = {
  apiKey: "AIzaSyBHdEu5KIZzY98_aW0s-Stln-KoC3HUF2E",
  authDomain: "wordgame-app.firebaseapp.com",
  databaseURL: "https://wordgame-app.firebaseio.com",
  projectId: "wordgame-app",
  storageBucket: "wordgame-app.appspot.com",
  messagingSenderId: "908666592559"
};
firebase.initializeApp(config);

var db = firebase.firestore();
console.log(config, 'configen')

db.settings({
  timestampsInSnapshots: true
});

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

/*db.collection("questions").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});*/


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
    },
  }
)

const ProfileStack = createSwitchNavigator(
  {
  Profile : {
    
    screen: ProfileScreen

    }
  }
)
 

const Menu = createBottomTabNavigator(
 
  {
    Home: {

      screen: HomeStack,
      navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused }) => <Ionicons name="md-play-circle" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
        tabBarOptions : {
          showLabel: false,
          style : {

              backgroundColor: 'transparent',
              borderTopWidth: 0,
              position: 'absolute',
              left: 50,
              right: 50,
              bottom: 0,
              height: 70
          }
        }
      })
    },
    Help : {
      screen: HelpStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused }) => <Ionicons name="md-help-circle" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
          tabBarOptions : {
            showLabel: false,
            style : {
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                position: 'absolute',
                left: 50,
                right: 50,
                bottom: 0,
                height: 70
            }
          }
        })
    
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused }) => <Ionicons name="md-contact" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
          tabBarOptions : {
            showLabel: false,
            style : {
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                position: 'absolute',
                left: 50,
                right: 50,
                bottom: 0,
                height: 70
            }
          }
        })
    }
  }
)

const AppContainer = createAppContainer(Menu)

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}



