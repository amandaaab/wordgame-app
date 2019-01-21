import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo';

import db from './firebaseConfig';


export default class HighScoreScreen extends React.Component {



    constructor(props){
        super(props)
        this.state = {
        //  scores: []
        }
    
      }
    /*
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

      */
    


  render() {
    return (
      <LinearGradient 
      colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
      style={{flex: 1, justifyContent: 'center'
      
      }}>
      <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="md-trophy" size={80} color={'#ffea4f'} />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>TOPPLISTA</Text>
        </View>
        <View style={styles.listLabel}>
          <Text style={styles.item}>Ranking</Text>
          <Text style={styles.item}>Namn</Text>
          <Text style={styles.item}>Poäng</Text>
        </View>
        <FlatList style={styles.flatlist}
          data={[
            {key: 'Devin',
          point: 1,
        score: 100},
            {key: 'Jackson',
            point: 2,
            score: 88},
            {key: 'James',
            point: 3,
            score: 67},
            {key: 'Joel',
            point: 4,
            score: 44},
            {key: 'Jhn',
            point: 5,
            score: 20},
            {key: 'Jon',
            point: 6,
            score: 20},
            {key: 'ohn',
            point: 7,
            score: 20},
            {key: 'John',
            point: 8,
            score: 20},
            {key: 'n',
            point: 9,
            score: 20},
           
          ]}
          renderItem={({item}) => <View style={styles.listItem}>
          <Text style={styles.item}>{item.point}</Text>
          <Text style={styles.item}>{item.key}</Text>
          <Text style={styles.item}>{item.score}</Text>
          </View>}
        />
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  top: {
    marginTop: 30, 
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20
  },

  item: {
    padding: 0,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },

  listItem: {
    width: '100%',
    height: 70,
    borderWidth: 0.5,
    borderColor: 'rgb(213, 206, 224)',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  listLabel: {
    
    backgroundColor: 'rgb(225, 212, 249)',
    width: '100%',
    height: 70,
    flex: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
    

  },

  flatlist: {
    width: '100%',
    backgroundColor: 'white',
    height: '20%',
    marginBottom: '40%'
  
  }
});