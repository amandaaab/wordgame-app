import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>WORDGAME APP!</Text>
          <Text style={styles.text}>Let's game!</Text>
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
