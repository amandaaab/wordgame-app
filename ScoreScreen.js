import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class ScoreScreen extends React.Component {

    render() {

        let score = this.props.navigation.state.params.userScore

      return (
        <View style={styles.container}>
         <Text style={styles.text}>{`Din poäng: ${score}`}</Text>
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
    }

});
