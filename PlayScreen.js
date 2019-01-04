import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';


export default class PlayScreen extends React.Component {

  state = {
    allQandA: this.props.screenProps.allDocs,
    text: '', //text from userinput
    words: [],//all words you have written in the inputfield, both right and wrong
    usedExtraTime: false,
    timer: 20, // timer countdown
    score: 0,
    answers: [], //array with answers(in an array too) that belongs to the selected question.
    randomNumber: Math.floor(Math.random() * Math.floor(3)) //We need a randomNumber for later to random get a question from an array with questions
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
   };


  onChangeT = (value) => {
    this.setState({
      text: value
    })
  }

//when clicking on submit  
onSave = () => {
    this.textInput.clear()
    //const answer2 = this.state.questions.filter(obj => obj === `${this.state.questions[randomNumber]}`)

    console.log('vald fråga:', this.state.allQandA[this.state.randomNumber].question);
    let allAnswers = this.state.allQandA.filter(obj => obj.question === this.state.allQandA[this.state.randomNumber].question)[0].answers;

    this.correctThis(allAnswers)
  }


  correctThis = (allAnswers) => {
    const isItCorrect = allAnswers.includes(this.state.text);
    if(isItCorrect){
      if(this.state.words.filter( word => word.word === this.state.text).length > 0){
        alert('ordet finns redan')
      } else{
      this.setState(prevState => ({
        words: [
          ...prevState.words,
          {
            word: this.state.text,
            color: 'green',
            dec: 'none',
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
          dec: 'line-through',
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
      //let randomNumber = Math.floor(Math.random() * Math.floor(this.state.questions2.length));
      //console.log('Alla frågor:', this.props.screenProps.allDocs)
      return (
        
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
   
   <View style={styles.questionBox}>
            <Text style={styles.text}>{this.state.allQandA[this.state.randomNumber].question}</Text>
            <Text style={styles.text}>{this.state.timer}</Text>
          </View>

        <View style={{flex: 1}}>
         
          <ScrollView 
            contentContainerStyle={styles.contentContainer}
          >

            <ScrollView
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                this.scrollView.scrollToEnd({animated: true});
            }}
            >
                {this.state.words.map(obj => 
                  <Text style={{fontSize: 18, color: obj.color, textDecorationLine: obj.dec}}>{obj.word}</Text>
                )}
            </ScrollView>
          </ScrollView>
          </View>

          <View style={styles.inputContainer}>
              <TextInput
                ref={input => { this.textInput = input }}
                onChangeText={this.onChangeT}
                style={styles.input}
                onSubmitEditing={this.onSave}
                autoFocus={true}
                placeholder={'Ditt svar..'}
              />
              <TouchableHighlight                     
                style={styles.enterButton}
                onPress={this.onSave}>
                    <Text>Enter</Text>
                </TouchableHighlight>
            </View>
            {/*<Text style={styles.text}>{this.state.score}</Text>*/}

            {!this.state.usedExtraTime ? 
            <TouchableHighlight                     
           style={styles.button}
            onPress={this.onGetSeconds}>
                <Text>10 sek extra tid!(10 poäng)</Text>
            </TouchableHighlight>
            : null}
        </KeyboardAvoidingView>
      );
    }
  }

 const styles = StyleSheet.create({
      container: { 
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,21,72,1)',
        //backgroundColor: 'rgba(235,43,70,1)',
        //alignItems: 'center' //, kan inte ha, då får scrollview ingen width
        //justifyContent: 'center',
        },
        text: {
            //padding: 20,
            color: 'white',
            fontSize: 22,
        }, 
        input: {
            backgroundColor: 'white',
            width: '80%',
            height: 60,
            borderRadius: 5,
            margin: 2,
            paddingLeft: 8,
            fontSize: 18,
        },
        enterButton: {
          height: 60,
          backgroundColor: '#47ef88',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          width: '20%',
          margin: 2,
        },

        button:  {
        height: 40,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

        },
        inputContainer: {
          flex: 0,
          flexDirection: 'row', 
          width: '96%',
          justifyContent: 'center',
          marginLeft: '2%',
          marginRight: '2%',
        },
        contentContainer: {
          height: 250,
          marginLeft: '2%',
          marginRight: '2%',
          width: '96%',
          //justifyContent: 'center',
          //alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 5,
          //flexDirection: 'column',
          shadowColor: '#294434',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            flexGrow: 1,
            marginBottom: '2%',
        },

        questionBox: {
          flexDirection: 'row',
          flex: 0,
          backgroundColor: 'rgba(235,43,70,1)',
          //backgroundColor: '#dee0e2',
          marginTop: '5%',
          marginLeft: '2%',
          marginRight: '2%',
          marginBottom: '2%',
          borderRadius: 5,
          height: '10%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }
       
  })