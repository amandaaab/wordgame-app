import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import db from './firebaseConfig';


export default class HighScoreScreen extends React.Component {



    constructor(props){
        super(props)
    
        this.state = {
          scores: []
        }
    
      }
    
      async getData(){
        console.log('GET DATA FUNCTION!')
            await db.collection("highscore").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              //scores.push(doc.data().points)
          });
      });
    //this.setState({scores})
      }
    


  render() {

    this.getData()

    return (
      <View style={styles.container}>
      <Text>High score</Text>
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
  }

});