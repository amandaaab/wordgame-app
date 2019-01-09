import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {LinearGradient} from 'expo';

import * as firebase from 'firebase';



class SignupScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            displayName: '',
            errors: false
        }

        this.trySignup = this.trySignup.bind(this)
    }



    trySignup = () => {

        const {email, password, displayName} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let user = firebase.auth().currentUser;
                if(user) {
                    user.updateProfile({
                        displayName: displayName,
                    }).then(
                    () => this.props.isSignupRender()
                    )
                }           
        })
        .catch((error)=>{
            console.log('gick ej att logga in, error:', error)
        })
        

    }
    render() {
        return (
            <LinearGradient
          colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'
          
          }}>
          <Text style={styles.screenLabel}>Registrera dig</Text>
            <View style={styles.content}>

                <Text style={styles.labelText}>Namn</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Namn"
                    required={true}
                    onChangeText={(displayName) => this.setState({ displayName })}
                    value={this.state.displayName}
                    autoFocus={false}
                />

                <Text style={styles.labelText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    autoFocus={false}
                />
                {this.state.errors == true ?
                    <FormValidationMessage>Kunde inte hitta en giltlig email</FormValidationMessage>
                    : null}
                 <Text style={styles.labelText}>Lösenord</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Lösenord"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    autoFocus={false}
                />

                <TouchableHighlight style={styles.button}>
                    <Text onPress={() => this.trySignup()}style={styles.btnText}>Registrera</Text>
                </TouchableHighlight>

            </View>
            </LinearGradient>
        )

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5656',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },

    screenLabel: {
        fontSize: 34,
        color: 'white',
        margin: 10
    
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

});

export default SignupScreen