import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PlayScreen from './PlayScreen';


export default class HomeScreen extends React.Component {
  
    onPressPlay = () => {
        this.props.navigation.navigate('play')
        alert('game begins!')
    }
    

    render() {
      return (

        <View style={styles.container}>
          <Text style={styles.text}>WORDGAME APP!</Text>
          <Text style={styles.text}>Let's game!</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={this.onPressPlay} style={styles.playButton}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableHighlight>
            </View>
        </View>
     
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000416',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        color: 'white'
    },
    playButton: {
        backgroundColor: '#65aa3d',
        width: '100%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    },

    buttonText: {
        color: 'white',
    }, 
    
    buttonContainer: {
        margin: '5%',
        width: '50%',
    }

});
