import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PlayScreen from './PlayScreen';
//import GradientScreen from './GradientScreen';
import {LinearGradient} from 'expo';


export default class HomeScreen extends React.Component {
  
    onPressPlay = () => {
        this.props.navigation.navigate('play')
        alert('game begins!')
    }
    

    render() {

       

      return (

        <LinearGradient 
          colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
          style={{flex: 1, justifyContent: 'center'
          
          }}>
        
        <View style={styles.container}>
            
          <Text style={styles.text}>SKYNDA!</Text>
          <Text style={[styles.text, styles.undertext]}>Nu spelar vi</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={this.onPressPlay} style={styles.playButton}>
                <Text style={styles.buttonText}>SPELA</Text>
            </TouchableHighlight>
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
      width: '100%'
    },
    
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    undertext: {
        fontSize: 25,
        marginBottom: 20 
    },
    playButton: {
        backgroundColor: '#47ef88',
        width: '100%',
        height: 40,
        borderRadius: 6,
        alignItems: 'center',
        padding: 10,
        marginTop: 30
    },

    buttonText: {
        color: 'rgba(0,21,72,1)',
        fontWeight: 'bold'
    }, 
    
    buttonContainer: {
        margin: '5%',
        width: '60%',
        padding: 20
    }

});
