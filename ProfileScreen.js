import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import PolicyScreen from './PolicyScreen';

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    }

    this.onPressLogout = this.onPressLogout.bind(this)
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

  render() {

    let user = firebase.auth().currentUser;
    console.log('currentuser:', user)
        let name;
        if(user != null){
            name = user.displayName;
          }

    return (
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
        <Text style={styles.rounds}>Antal spelade omgångar: {this.props.screenProps.roundes[this.props.screenProps.roundes.length-1]}
        </Text>
    
      </View>
      <View style={styles.items}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,21,72,1)',
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
      borderWidth: 0
  },

  items: {
    borderWidth: 0.5,
    borderColor: '#aeb0b7',
    height: 50,
    width: '90%', 
    backgroundColor: 'white',
    padding: 7,
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  textP: {
    color: 'black',
    fontSize: 20
  }

});