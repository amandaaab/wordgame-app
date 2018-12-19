import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';


const things = 
[
  {
    "question": "tjejnamn",
    "answers": [
        "amanda",
        "alice",
        "agnes"
    ]
  },
  {
    "question": "städer på G",
    "answers": [
        "göteborg",
        "gotland",
        "grimmered"

    ]
  },
  {
    "question": "saker i ett kök",
    "answers": [
        "tallrik",
        "skål",
        "sked",
        "spis"
    ]
  },
]

console.log('things', things[1][0])

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
    const answer = things.filter(obj => obj.question === "tjejnamn")
    const yay = answer[0].answers.includes(this.state.text)

    if(yay){
      this.setState(prevState => ({
        words: [
          ...prevState.words,
          {
            word: this.state.text,
            color: 'white'
          }
        ]
  
    }), () =>  console.log('textfinns', this.state.words))

  } else {
    this.setState(prevState => ({
      words: [
        ...prevState.words,
        {
          word: this.state.text,
          color: 'red'
        }
      ]

  }), () =>   console.log('textfinss ej', this.state.words))
  }

  }

    render() {
  
      return (
        
        <View style={styles.container}>
          <Text style={styles.text}>Lista tjejnamn på A</Text>

          {this.state.words.map(obj => 
            <Text style={{color: obj.color}}>{obj.word}</Text>
          )}

          <Text style={styles.text}>hejsan</Text>
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