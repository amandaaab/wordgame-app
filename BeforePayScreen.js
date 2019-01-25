import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { CheckBox } from 'react-native-elements'

/* The screen which comes after you clicked on "Buy coins here" in your profile. It comes with two checkboxes where
you can choose between different amounts. 
 */
export default class BeforePayScreen extends React.Component {

//Set initial state, first the checkboxes are not checked and therefore set to false
state = {
    checkedFirst: false,
    checkedSecond: false,
    amount: 0,
}

/*Function to go to PayScreen.js and do the payment when you press the "gå vidare till betalning"-button*/
forward = async () => { 
    if(this.state.checkedFirst || this.state.checkedSecond === true){ //checks if a checkbox is selected. 
        this.props.navigation.navigate('pay', {
            amount: this.state.amount, //Sending amount as a parameter to PayScreen
        })
    }

} 

/*when the chechbox in the top is pressed this function executes and the state is changed to
true for the first checkbox and now it's checked on the screen*/
firstChecked = (amount) => { 

    this.setState(prevState => ({
        checkedFirst: !prevState.checkedFirst,
        checkedSecond: false, 
        amount: amount //amount was passed in as a parameter 
     
      }))
}


/*when the chechbox in the bottom is pressed this function executes and the state is changed to
true for the second checkbox and now it's checked on the screen*/

secondChecked = (amount) => {

    this.setState(prevState => ({
        checkedSecond: !prevState.checkedSecond,
        checkedFirst: false,
        amount: amount //amount was passed in as a parameter
      }))
}


 
//KeyboardAvoidingView is used for moving content higher than the keyboard so you will be able to se all the content when your writing. 
    render() {
      return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'
        
        }}>

        <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
        <View style={styles.content}>

        <Text style={styles.text}>Välj summa</Text>

            <CheckBox
                containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                textStyle={{fontSize: 20, fontWeight: 'normal'}}
                center
                size={30}
                title='10sek -100 mynt'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checkedFirst}
                onPress={() => this.firstChecked(10)}
            />

            <CheckBox
                containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
                textStyle={{fontSize: 20, fontWeight: 'normal'}}
                center
                size={30}
                title='20sek -200 mynt'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checkedSecond}
                onPress={() => this.secondChecked(20)}
            />

          <TouchableHighlight style={styles.button} onPress={this.forward}>
                    <Text style={styles.buttonText}>Gå vidare till betalning</Text>
                </TouchableHighlight>
            </View>
            </KeyboardAvoidingView>
        </LinearGradient>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: '70%',
    },
    content: {
        width: '90%',
        height: '60%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
      },
    text: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold'
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
    },
    buttonText: {
    color: 'white',
    },


});