import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PlayScreen from './PlayScreen';
//import GradientScreen from './GradientScreen';
import {LinearGradient} from 'expo';
import { Font } from 'expo';
import db from './firebaseConfig';

export default class HomeScreen extends React.Component {

    state = {
        questions: [],
        fontLoaded: false
    }

    async componentDidMount() {
       await Font.loadAsync({
          'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
        let questionsArray = []; 
        await db.collection("questions").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                questionsArray.push(doc.data());
                //console.log(questionsArray);
                //console.log(`${doc.id} => ${doc.data()}`);
            });
          });

          this.setState({ questions: questionsArray });

      }
  
    onPressPlay = () => {
        this.props.navigation.navigate('play')
    }
    

    render() {

       console.log('state!', this.state.questions)

      return (

        <LinearGradient 
          colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
          style={{flex: 1, justifyContent: 'center'
          
          }}>
        
            <View style={styles.container}>
            {this.state.fontLoaded ? 
            <Text style={[{ fontFamily:'Comfortaa-Bold'}, styles.text, styles.title]}>SKYNDA!</Text>  
            : null }
            {this.state.fontLoaded ? 
            <Text style={[{fontFamily:'Comfortaa-Bold'},styles.text, styles.undertext]}>Nu spelar vi</Text>
            : null }
            
        <LinearGradient
            colors={['#62fc9d', '#47ef88']}
            style={{ width: '60%',
            height: 50,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: 'center',
            padding: 10,
            shadowColor: '#294434',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
        
        }}
          >
            {this.state.fontLoaded ? 
                <TouchableHighlight onPress={this.onPressPlay} style={styles.playButton}>
                    <Text style={[{fontFamily:'Comfortaa-Bold'},styles.buttonText]}>Spela</Text>
                </TouchableHighlight>
    
            : null }

            </LinearGradient>

            {this.state.questions.map(question => 
            <Text style={{color: 'white'}}>{question.question} {question.answers}</Text>
                //console.log('HIHI', question)
                )}

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

    title: {
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    
    text: {
        color: '#ffffff',
        fontSize: 40,
        
  
    },
    undertext: {
        fontSize: 25,
        marginBottom: 50,
    },
    playButton: {
        backgroundColor: 'transparent',
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
