import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import SignupScreen from './SignupScreen';
import {LinearGradient} from 'expo';


import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';



class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: false,
            loading: false,
            wantToSignup: false,
            items: []
        }

    }

    renderSignup = () => {
        this.props.viewSignup()
    }

    isLogin = () => {

        this.setState({
            loading: true
        })
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
       

            .then(() => {
              
                this.props.isLoginRender(email)
                console.log('inloggad som:', email)

            })

            .catch(() => {
                this.setState({ errors: 'Gick inte att skapa användare', loading: false })
                console.log(this.state.errors, 'gick ej att logga in')
            })

    }




    render() {
        if (this.state.loading) {
            return (
                <View style={[styles.container, styles.load]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else {
            return (
                
        <LinearGradient
          colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'
          
          }}>

       <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-100} enabled>
         

                    <View style={styles.content}>
                    <Text style={styles.screenLabel}>Logga in</Text>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput
                        
                        style={styles.input}
                        placeholder="Tex. amanda@gmail.com"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoFocus={false}
                        
                       

                    />
                    {this.state.errors == true ?
                        <FormValidationMessage>Kunde inte hitta användaren, försök igen!</FormValidationMessage>
                        : null}

                    <Text style={styles.labelText}>Lösenord</Text>
                    <TextInput
                    secureTextEntry={true}
                        style={styles.input}
                        placeholder="Ditt Lösenord"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                       
                    />

                    <TouchableHighlight  style={[styles.button]}>
                        <Text  onPress={() => this.isLogin()} style={styles.btnText}>Logga in</Text>
                    </TouchableHighlight>

                   

                    <TouchableHighlight  style={[styles.button, styles.reg]}>
                        <Text onPress={() => this.renderSignup()} style={styles.regText}>Skapa Konto</Text>
                    </TouchableHighlight>
                </View>
              </KeyboardAvoidingView>
              </LinearGradient>
              


            )
        }

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },

    screenLabel: {
        fontSize: 34,
        color: 'white',
        margin: 30
    
    },
    content: {
        height: '50%',
        width: '100%',
        
        justifyContent: 'center', 
        alignItems: 'center',
     
    },

    load: {
        backgroundColor: 'black'
    },

    labelText: {
       fontSize: 17,
       fontWeight: 'bold',
       color:'white'
       
    },

    input: {
      width: '75%',
      height: 50,
      textAlign: 'center',
      borderBottomWidth: 1,
      borderColor:'#dddbdb',
      backgroundColor: '#f9f9f9',
      margin: 12,
      borderRadius: 14

    },

    button: {
        backgroundColor: '#74e56e',
        width: '60%',
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        margin: 10

    },

    btnText: {
        fontSize: 18,
        color: 'rgba(0,21,72,1)',
        fontWeight:'bold'

    },

    reg: {
        backgroundColor: 'transparent',
        borderBottomColor: '#bbb',
        borderBottomWidth: 0.5,
        margin: -10
    
    }, 
    regText: {
        color: 'white',
        fontSize: 20,
       
    }

});

export default LoginScreen