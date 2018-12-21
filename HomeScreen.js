import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PlayScreen from './PlayScreen';
//import GradientScreen from './GradientScreen';
import {LinearGradient} from 'expo';
import { Font } from 'expo';


export default class HomeScreen extends React.Component {

    state = {
        fontLoaded: false
    }

    async componentDidMount() {
       await Font.loadAsync({
          'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });
      }
  
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
            {this.state.fontLoaded ? 
            <Text style={[{ fontFamily:'Comfortaa-Bold'}, styles.text]}>SKYNDA!</Text>  
            : null }
            {this.state.fontLoaded ? 
            <Text style={[{fontFamily:'Comfortaa-Bold'},styles.text, styles.undertext]}>Nu spelar vi</Text>
            : null }
            
            
            {this.state.fontLoaded ? 
                <TouchableHighlight onPress={this.onPressPlay} style={styles.playButton}>
                    <Text style={[{fontFamily:'Comfortaa-Bold'},styles.buttonText]}>Spela</Text>
                </TouchableHighlight>
            
            : null }
            
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
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
  
    },
    undertext: {
        fontSize: 25,
        marginBottom: 20,
    },
    playButton: {
        backgroundColor: '#47ef88',
        width: '60%',
        height: 50,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        
    },

    buttonText: {
        color: 'rgba(0,21,72,1)',
        fontSize: 20
    }, 
   

});
