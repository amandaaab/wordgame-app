import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { CheckBox } from 'react-native-elements'


export default class PayScreen extends React.Component {

    state = {
        name : '',
        address: '',
        city: '',
    }

pay = async (amount) => { 
    console.log('pay', amount);
    const userEmail = this.props.screenProps.currentUser.email;
    const userId = this.props.screenProps.currentUser.uid;

    try {
      let response = await fetch(
        'http://172.20.10.2:5000/payment',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({amount: amount, email: userEmail, id: userId}),
      }
      );
      console.log(response)
      //return responseJson.movies;
    } catch (error) {
      console.error(error);
    }

} 
 
    render() {
        console.log('amount:', this.props.navigation.getParam('amount'))
        const amount = this.props.navigation.getParam('amount');

      return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center'
        
        }}>

        <KeyboardAvoidingView  style={styles.container} behavior="padding" keyboardVerticalOffset={-40} enabled>
        <View style={styles.content}>
        <Text style={styles.text}>Var god fyll i dina uppgifter</Text>

        <View style={styles.inputContainer}>
        <View style={styles.box}>
            <Text style={styles.labelText}>För- och efternamn</Text>
            <TextInput style={styles.input}
                        placeholder="Ex Anna Andersson"
                        required={true}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                        autoFocus={true}
            />
        </View>

    
    <View style={styles.box}>
        <Text style={styles.labelText}>Kortnummer</Text>
            <TextInput style={styles.input}
                        placeholder="Kortnummer"
                        required={true}
                        onChangeText={(city) => this.setState({ city })}
                        value={this.state.city}
            />
        </View>

        <View style={styles.smallBox}>
            <Text style={styles.labelText}>Utgångsdatum</Text>
                <TextInput style={styles.input}
                            placeholder="utgångsdatum"
                            required={true}
                            onChangeText={(city) => this.setState({ city })}
                            value={this.state.city}
                />
        </View>
        <View style={styles.smallBox}>
            <Text style={styles.labelText}>CVC</Text>
            <TextInput style={styles.input}
                        placeholder="cvc"
                        required={true}
                        onChangeText={(city) => this.setState({ city })}
                        value={this.state.city}
            />
        </View>

        </View>


          <TouchableHighlight style={styles.button} onPress={()=> this.pay(amount)}>
                    <Text style={styles.buttonText}>Betala</Text>
                </TouchableHighlight>
            </View>
            </KeyboardAvoidingView>
        </LinearGradient>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        borderRadius: 10,
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex:0, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 5, 
      },
    name: {
        color: 'black',
        fontSize: 25,
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 10,
    },
    buttonText: {
    color: 'white',
    },
    input: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#dddbdb',
        backgroundColor: '#f9f9f9',
        borderRadius: 14,
        //marginBottom: '2%',
    },
    box: {
        width: '75%',

    },
    smallBox: {
        width: '50%',
    },
    text: {
        fontSize: 18, 
        fontWeight: 'bold',
        margin: 10,
    },
    labelText: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin:2,
    },
    inputContainer: {

        width: '90%',
        height: '60%',
        alignItems: 'center',
        flex:0, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        
    }


});