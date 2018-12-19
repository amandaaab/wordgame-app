import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PlayScreen from './PlayScreen';
//import LinearGradient from 'react-native-linear-gradient';


export default class HomeScreen extends React.Component {
  
    onPressPlay = () => {
        this.props.navigation.navigate('play')
        alert('game begins!')
    }
    

    render() {

        const  gradientHeight=500;
        const gradientBackground  = 'blue';
        const data = Array.from({ length: gradientHeight });

      return (

        
        <View style={styles.container}>

        {data.map((_, i) => (
                  <View
                      key={i}
                      style={{
                          position: 'absolute',
                          backgroundColor: gradientBackground,
                          height: 1,
                          bottom: (gradientHeight - i),
                          right: 0,
                          left: 0,
                         
                          opacity: (1 / gradientHeight) * (i + 2)
                      }}
                  />
              ))}

          <Text style={styles.text}>SKYNDA!</Text>
          <Text style={[styles.text, styles.undertext]}>Nu kör vi igång</Text>
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
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    undertext: {
        fontSize: 20
    },
    playButton: {
        backgroundColor: '#93ff9c',
        width: '100%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    },

    buttonText: {
        color: 'purple',
        fontWeight: 'bold'
    }, 
    
    buttonContainer: {
        margin: '5%',
        width: '50%',
    }

});
