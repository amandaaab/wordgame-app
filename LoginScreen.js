import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import SignupScreen from './SignupScreen';


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
                <View style={styles.container}>
                    <FormLabel>Email</FormLabel>
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

                    <FormLabel>Lösenord</FormLabel>
                    <TextInput
                        style={styles.input}
                        placeholder="Ditt Lösenord"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        autoFocus={true}
                    />

                    <TouchableHighlight>
                        <Text onPress={() => this.isLogin()} style={styles.LoginButton}>Logga in</Text>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Text onPress={() => this.renderSignup()} style={styles.LoginButton}>Registrera dig</Text>
                    </TouchableHighlight>
                </View>


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
        width: '100%'
    },

    load: {
        backgroundColor: 'black'
    },

    input: {
      width: '90%',
      height: 40,
      textAlign: 'center',
      borderBottomWidth: 1

    },

    loginButton: {
        backgroundColor: 'transparent',
        width: '60%',
        height: 50,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,

    },

});

export default LoginScreen