import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';


export default class PlayScreen extends React.Component {


  state = {
    text: '',
    words: [],
  }

  onChangeT = (value) => {
    this.setState({
      text: value
    })
  }

  searchSubmit = () => {
    alert('search')
  }

  onSave = () => {
    if(this.state.text.length > 1){
      this.setState(previousState => (
        {
        words: [...previousState.words, this.state.text]
      }), () => console.log(this.state.words))
//console.log('save', this.state.text)
//console.log(this.state.words)
    }
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Lista tjejnamn på A</Text>
          <Text style={styles.text}>{this.state.words}</Text>
          <TextInput 
          onChangeText={this.onChangeT}
          style={styles.input}
          onSubmitEditing={this.searchSubmit}
          />
           <TouchableHighlight                     
           style={styles.button}
            onPress={this.onSave}>
                <Text>Enter</Text>
            </TouchableHighlight>
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
        },

        button:  {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

        }
  })