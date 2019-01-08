import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './HomeScreen';
import HelpScreen from './HelpScreen';
import PlayScreen from './PlayScreen';
import ScoreScreen from './ScoreScreen';
import ProfileScreen from './ProfileScreen';
//import LoginScreen from './LoginScreen;'

import db from './firebaseConfig';
import LoginScreen from './LoginScreen';
import * as firebase from 'firebase';

const HomeStack = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    play: {
      screen: PlayScreen,
    },

    score: {
      screen: ScoreScreen

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
    Help: {
      screen: HelpScreen,
    },
  }
)

const ProfileStack = createSwitchNavigator(
  {
    Profile: {

      screen: ProfileScreen

    }
  }
)


const Menu = createBottomTabNavigator(

  {
    Home: {

      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => <Ionicons name="md-play-circle" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
        tabBarOptions: {
          showLabel: false,
          style: {

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
    Help: {
      screen: HelpStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => <Ionicons name="md-help-circle" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
        tabBarOptions: {
          showLabel: false,
          style: {
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
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => <Ionicons name="md-contact" size={50} color={focused ? '#f9eb43' : '#fff684'} border="1 solid black" />,
        tabBarOptions: {
          showLabel: false,
          style: {
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
  state = {
    allDocs: [], //questions from database in an array
    loggedIn: false,
    currentUser: null

  }



  async componentWillMount() {

    //getting all questions from the database, push them to the array and set state
    let allDocsArray = [];

    await db.collection("questions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allDocsArray.push(doc.data());
      });
    });

    this.setState({ allDocs: allDocsArray });

    // firebase.auth() gets the current user 
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })

  }

  async componentWillUnmount() {

  }

  open = (email) => {

    this.setState({
      loggedIn: true
    })

    console.log(email)
    //const user = FirebaseAuth.getInstance().getCurrentUser();
    //console.log('user:', user)

  }



  render() {

    // console.log(userInfo) 
    return (
      this.state.loggedIn == false ?
        <LoginScreen isLoginRender={this.open} />
        :

        <AppContainer screenProps={{ allDocs: this.state.allDocs, currentUser: this.state.currentUser }} />

    )
  }
}



