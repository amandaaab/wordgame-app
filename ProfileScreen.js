import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import db from './firebaseConfig';


export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      scores: []
    }

    this.onPressLogout = this.onPressLogout.bind(this)
  }

  async getData(){
   // console.log('GET DATA FUNCTION!')
    const { currentUser } = firebase.auth()


    /*await db.collection("users").doc(currentUser.uid).collection("roundes")
    .onSnapshot(function(doc) {
        console.log("DOC DATA, ROUNDES  ", doc.data());
    });*/

    let scores = [];
    await db.collection("users").doc(currentUser.uid).collection("roundes").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          scores.push(doc.data().points)
      });
  });
this.setState({scores})
  }

  
  onPressLogout = () => {
    firebase.auth().signOut()
  
    .then(() => {
      this.props.screenProps.loggingOut()
    })
    console.log('on press logga ut')
  }
  

  render() {
    this.getData()
    //console.log('Alla poäng i en array::::: ',this.state.scores)
    let user = firebase.auth().currentUser;
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
        <Text style={styles.rounds}>Antal spelade omgångar:{this.state.scores.length}
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