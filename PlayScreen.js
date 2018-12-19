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
let randomNumber = Math.floor(Math.random() * Math.floor(things.length));

console.log('things', things[1].question);

export default class PlayScreen extends React.Component {

  state = {
    text: '',
    words: [],
    timer: 10,
    usedExtraTime: false,
    timer: 10, 
    score: 0
  }

  componentDidMount() {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
   }
  
   componentWillUnmount() {
    clearInterval(this.clockCall);
   }

   decrementClock = () => {      
    this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
    if(this.state.timer === 0){
      this.props.navigation.navigate('score', {userScore: this.state.score} )
    }
    console.log('timer', this.state.timer)

   };


  onChangeT = (value) => {
    this.setState({
      text: value
    })
  }

  searchSubmit = () => {
    alert('search')
  }

  onSave = () => {
    this.textInput.clear()
    const answer = things.filter(obj => obj.question === `${things[randomNumber].question}`)
    const yay = answer[0].answers.includes(this.state.text)

    if(yay){
      if(this.state.words.filter( word => word.word === this.state.text).length > 0){
        alert('ordet finns redan')
      } else{
      this.setState(prevState => ({
        words: [
          ...prevState.words,
          {
            word: this.state.text,
            color: 'white',
            point: 1
          }
        ],

        score: prevState.score+1
  
    }), () =>  console.log('textfinns', this.state.words))
  }
  } else {
    this.setState(prevState => ({
      words: [
        ...prevState.words,
        {
          word: this.state.text,
          color: 'red',
          point: 0
        }
      ]

  }), () =>   console.log('textfinss ej', this.state.words))
  }

  }

  onGetSeconds = () => {
    this.setState(prevState =>({
      timer: prevState.timer + 10,
      usedExtraTime: true,
    }))
    alert('vill ha mer tid');
  }

    render() {

      return (
        
        <View style={styles.container}>
        <Text style={styles.text}>{this.state.timer}</Text>
          <Text style={styles.text}>{things[randomNumber].question}</Text>

          {this.state.words.map(obj => 
            <Text style={{color: obj.color}}>{obj.word}</Text>
          )}

          <Text style={styles.text}>{this.state.score}</Text>
          <TextInput
          ref={input => { this.textInput = input }}
          onChangeText={this.onChangeT}
          style={styles.input}
          onSubmitEditing={this.onSave}
          />
           <TouchableHighlight                     
           style={styles.button}
            onPress={this.onSave}>
                <Text>Enter</Text>
            </TouchableHighlight>
            {!this.state.usedExtraTime ? 
            <TouchableHighlight                     
           style={styles.button}
            onPress={this.onGetSeconds}>
                <Text>10 sek extra tid!(10 poäng)</Text>
            </TouchableHighlight>
            : null}
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