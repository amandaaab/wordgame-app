import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>Amanda</Text>
          <Text style={styles.rating}>Rating</Text>
          <Text style={styles.rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Text>
          <Text style={styles.rounds}>Antal spelade omgångar: 29</Text>
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
    },
    name: {
        color: 'white',
        fontSize: 25,
    },
    rating: {
        color: 'white',
    },
    rounds: {
        color: 'white',
    }

});