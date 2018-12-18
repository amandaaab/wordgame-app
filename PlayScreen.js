import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class PlayScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Lista tjejnamn på A</Text>
          <TextInput style={styles.input}/>
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
            padding: 20,
            color: 'white',
        }, 
        input: {
            backgroundColor: '#e8e8e8',
            width: '60%',
            padding: 10
        }
  })