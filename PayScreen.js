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

pay = async () => { 
    console.log('pay');
  
    try {
      let response = await fetch(
        'http://172.20.10.2:5000/payment', //or 192.168.0.255
      );
      console.log(response)
      //return responseJson.movies;
    } catch (error) {
      console.error(error);
    }

} 
 
    render() {
        console.log('amount:', this.props.navigation.getParam('amount'))

      return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center'
        
        }}>

        <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
        <View style={styles.content}>
        <Text style={styles.text}>Var god fyll i dina uppgifter</Text>


        <TextInput style={styles.input}
                    placeholder="För- och efternamn"
                    required={true}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    autoFocus={true}
        />


        <TextInput style={styles.input}
                    placeholder="Adress"
                    required={true}
                    onChangeText={(address) => this.setState({ address })}
                    value={this.state.address}
                    autoFocus={true}
        />

        <TextInput style={styles.input}
                    placeholder="Stad"
                    required={true}
                    onChangeText={(city) => this.setState({ city })}
                    value={this.state.city}
                    autoFocus={true}
        />

        <TextInput style={styles.input}
                    placeholder="Kortnummer"
                    required={true}
                    onChangeText={(city) => this.setState({ city })}
                    value={this.state.city}
                    autoFocus={true}
        />

        <View style={styles.cardInfo}>
            <TextInput style={[styles.input, styles.smallInput]}
                        placeholder="utgångsdatum"
                        required={true}
                        onChangeText={(city) => this.setState({ city })}
                        value={this.state.city}
                        autoFocus={true}
            />
            <TextInput style={[styles.input, styles.smallInput]}
                        placeholder="cvc"
                        required={true}
                        onChangeText={(city) => this.setState({ city })}
                        value={this.state.city}
                        autoFocus={true}
            />
        </View>



          <TouchableHighlight style={styles.button} onPress={this.pay}>
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
        width: '92%',
        height: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    name: {
        color: 'black',
        fontSize: 25,
    },
    button: {
        height: 40,
        backgroundColor: 'black',
        borderColor: 'white',
        width: '50%',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
    color: '#a1a6ad',
    },
    input: {
        width: '75%',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#dddbdb',
        backgroundColor: '#f9f9f9',
        borderRadius: 14,
        marginBottom: '2%',
    },
    smallInput: {
        width: '45%',
    },
    cardInfo: {
        flex:0, 
        flexDirection: 'row',
        width: '75%',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
    }, 
    text: {
        fontSize: 14, 
        fontWeight: 'bold',
        marginBottom: 5,
    }


});