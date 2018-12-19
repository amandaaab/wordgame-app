import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';



export default class ScoreScreen extends React.Component {

    onPressContinue = () => {
        this.props.navigation.navigate('Home')
       
    }

    render() {

        let score = this.props.navigation.state.params.userScore

      return (
        <View style={styles.container}>
         <Text style={styles.text}>{`Din poäng: ${score}`}</Text>
         <TouchableHighlight onPress={this.onPressContinue} style={styles.continue}><Text>Gå vidare</Text></TouchableHighlight>
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
    continue: {
        backgroundColor: '#65aa3d',
        width: '100%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    }

});
