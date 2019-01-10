import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';


export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)

    this.onPressLogout = this.onPressLogout.bind(this)
  }

  onPressLogout = () => {
    firebase.auth().signOut()
  
    .then(() => {
      this.props.screenProps.loggingOut()
    })
    console.log('on press logga ut')
  }
  

  render() {

    let user = firebase.auth().currentUser;
    console.log('currentuser:', user)
        let name;
        if(user != null){
            name = user.displayName;
          }

    return (
      <View style={styles.container}>
      <View style={styles.whiteContainer}>
      <Ionicons name="md-contact" size={80}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>Rating</Text>
        <Text style={styles.rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Text>
        <Text style={styles.rounds}>Antal spelade omgångar: {this.props.screenProps.roundes[this.props.screenProps.roundes.length-1]}
        </Text>
      </View>
        <TouchableHighlight style={styles.logoutButton} onPress={this.onPressLogout}>
            <Text>
              Logga ut
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,21,72,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteContainer: {
    width: '80%',
    height: '60%',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  name: {
    color: 'grey',
    fontSize: 25,
    margin: '4%',
  },
  rating: {
    color: 'grey',
    margin: '2%',

  },
  rounds: {
    color: 'grey',
    margin: '4%',

  },
  logoutButton: {
    backgroundColor: '#f44141',
        width: '80%',
        height: 54,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10
  }

});