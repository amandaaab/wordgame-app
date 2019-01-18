import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';


import db from './firebaseConfig';


import PolicyScreen from './PolicyScreen';

import { LinearGradient } from 'expo';

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    }

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

  openModalPolicy = () => {
    this.setState({
        modalVisible: true
    })
}

closeModalPolicy = () => {
    this.setState({
        modalVisible: false
    })
}

pay = async () => { 
  console.log('pay');
  
  try {
    let response = await fetch(
      'http://172.20.10.2:5000/payment', //or 192.168.0.255
    );
    console.log(response)
    //return responseJson.movies;
  } catch (error) {
    console.error(error);
  }

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
      <LinearGradient 
      colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
      style={{flex: 1, justifyContent: 'center'
      
      }}>
      <View style={styles.container}>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>

          <PolicyScreen modalClose={this.closeModalPolicy}/>

      </Modal>

      <View style={styles.whiteContainer}>
      <Ionicons name="md-contact" size={80}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>Rating</Text>
        <Text style={styles.rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Text>
        <Text style={styles.rounds}>Antal spelade omgångar:{this.state.scores.length}
        </Text>
    
      </View>
      <View style={styles.itemWrap}>
      <View style={styles.items}>
      <TouchableHighlight style={styles.policy} onPress={this.pay}>
            <Text style={styles.textP}>Betala<Ionicons name="md-arrow-dropright" size={20}></Ionicons></Text>  
        </TouchableHighlight>
       <TouchableHighlight style={styles.policy} onPress={() => this.openModalPolicy()}>
            <Text style={styles.textP}>Läs våra användarvillkor                 <Ionicons name="md-arrow-dropright" size={20}></Ionicons></Text>  
        </TouchableHighlight>
</View>
<View style={[styles.items, styles.logoutButton]}>
         <TouchableHighlight style={styles.policy}  onPress={this.onPressLogout}>
            <Text  style={styles.textP} >
              Logga ut 
            </Text>
        </TouchableHighlight>
        </View>
        </View>
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
    height: '60%',
  },
  whiteContainer: {
    width: '90%',
    height: '60%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
   
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
      backgroundColor: 'rgb(53, 157, 255)',
      borderWidth: 0
  },

  items: {
    borderWidth: 0.5,
    borderColor: '#aeb0b7',
    height: 50,
    width: '100%', 
    backgroundColor: 'white',
    padding: 7,
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row',
   
  },
  textP: {
    color: 'black',
    fontSize: 20
  },
  itemWrap: {
    width: '90%',
    marginBottom: 60
  }

});