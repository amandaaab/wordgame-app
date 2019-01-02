import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {LinearGradient} from 'expo';
import { Font } from 'expo';



export default class ScoreScreen extends React.Component {

    state = {
        fontLoaded: false,
        score: this.props.navigation.state.params.userScore,
        message: ''
    }

    async componentDidMount() {
       await Font.loadAsync({
          'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });

        if(this.state.score === 0){
            this.setState({
                message: 'Bättre lycka nästa gång...'
            })
        }
        else if(this.state.score >= 1 && this.state.score < 2){
            this.setState({
                message: 'Du kan bättre!'
            })
        }else{
            this.setState({
                message: 'Bra Jobbat!'
            })
        }
      }

    onPressContinue = () => {
        this.props.navigation.navigate('Home')
       
    }


    render() {

    

      return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'
        
        }}>
        <View style={styles.container}>
        {this.state.fontLoaded ? 
            <Text style={[{fontFamily:'Comfortaa-Bold'}, styles.text, styles.message]}>{this.state.message}</Text>  
        : null }
        {this.state.fontLoaded ? 
            <Text style={[{ fontFamily:'Comfortaa-Bold'}, styles.text]}>{`Du fick`}</Text>    
        : null }
        {this.state.fontLoaded ? 
            <Text style={[{ fontFamily:'Comfortaa-Bold'}, styles.text, styles.point]}>{`${this.state.score} rätt`}</Text>
            
        : null }
        {this.state.fontLoaded ? 
            <Text style={[{fontFamily:'Comfortaa-Bold'},styles.text]}>Vill du ha en revanch? gå vidare</Text> 
        : null }

         </View>
            {this.state.fontLoaded ? 
            <TouchableHighlight onPress={this.onPressContinue} style={styles.continue}>
                <Text style={[{fontFamily:'Comfortaa-Bold'},styles.buttonText]}>Gå vidare</Text>
            </TouchableHighlight>
            : null }
       
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      width: '80%',
      height: '60%',
      padding: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    text: {
        color: 'black',
        marginTop: 40,
        fontSize: 16
    },

    buttonText: {
        fontSize: 20,
        color: 'rgba(0,21,72,1)',
        fontWeight: 'bold'

    },

    message: {
        fontSize: 28,
        marginTop: 50
    },
    continue: {
        backgroundColor: '#fff684',
        width: '80%',
        height: 54,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10
    },
    point: {
        fontSize: 28
    }

});
