import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';

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
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Amanda</Text>
        <Text style={styles.rating}>Rating</Text>
        <Text style={styles.rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Text>
        <Text style={styles.rounds}>Antal spelade omgångar: 29</Text>

        <TouchableHighlight onPress={this.onPressLogout}>
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
  name: {
    color: 'white',
    fontSize: 25,
  },
  rating: {
    color: 'white',
  },
  rounds: {
    color: 'white',
  }

});