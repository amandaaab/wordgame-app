import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ActivityIndicator, KeyboardAvoidingView, KeyboardType, Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import SignupScreen from './SignupScreen';
import { LinearGradient } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: '',
            emailError: null,
            passwordError: null,
            loading: false,
            wantToSignup: false,
            validatedEmail: false,
            validatedPassword: false,
            items: []
        }

    }


    renderSignup = () => {
        this.props.viewSignup()
    }

    validateLogin = () => {

        const { email, password, emailError, passwordError, validatedEmail, validatedPassword } = this.state

        Keyboard.dismiss()
        
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                   
                    this.props.isLoginRender(email)
                    console.log('inloggad som:', email)
                   
                   

                })
                .catch(() => {
                    this.setState({ validatedEmail: false,validatedPassword: false,errors: 'Användare hittas inte, vänligen skapa ett konto', loading: false })
                    console.log(this.state.errors, 'gick ej att logga in')
                })
        }


    isLogin = () => {
        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        this.setState({
            errors: '',
        })
        if (reg.test(email) == false) {
            console.log('email är inte correct')
            this.setState({
                emailError: '* Du måste fylla en giltlig email',
                validatedEmail: false,
                errors: '',

            })
        } else {
            this.setState({
                emailError: null,
                validatedEmail: true,
                errors: ''
            })
          
        }

        if (password === '') {
            console.log('fyll i lösen')
            this.setState({
                passwordError: '* Vänligen fyll i ett lösenord',
                validatedPassword: false,
                errors: ''
               
                
            })
        } else {
            this.setState({
                passwordError: null,
                validatedPassword: true,
                errors: ''
            })
        }


    }



    render() {

        return (

            <LinearGradient
                colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
                style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'

                }}>

                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-120} enabled>


                    <View style={styles.content}>
                        <View style={styles.texts}>
                            <Text style={styles.h1}>SKYNDA!</Text>
                            <Text style={styles.screenLabel}>Ett ordspel</Text>
                            <Text style={[styles.error,{textAlign: 'center'}]}>{this.state.errors == '' ? null : this.state.errors}</Text>
                        </View>
                        <Text style={styles.labelText}>Email</Text>
                        {this.state.emailError ? <Text style={styles.error}>{this.state.emailError}</Text> : null}
                        <TextInput

                            style={styles.input}
                            placeholder="Tex. amanda@gmail.com"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            keyboardType="email-address"
                            autoFocus={false}



                        />

                        

                        <Text style={styles.labelText}>Lösenord</Text>
                        {this.state.passwordError ? <Text style={styles.error}>{this.state.passwordError}</Text> : null}


                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Ditt Lösenord"
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}

                        />
                       

                        {this.state.validatedEmail & this.state.validatedPassword ? this.validateLogin() : null}

                        <LinearGradient
                            colors={['#62fc9d', '#47ef88']}
                            style={{
                                width: '60%',
                                height: 50,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: 'center',
                                padding: 10,
                                shadowColor: '#294434',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 1,
                            }
                            } >
                            {this.state.loading ?
                                <TouchableHighlight underlayColor='transparent' style={[styles.button]}>
                                    <ActivityIndicator style={styles.btnText} size="small" color='rgba(0,21,72,1)' />
                                </TouchableHighlight>

                                : <TouchableHighlight underlayColor='transparent' onPress={() => this.isLogin()} style={[styles.button]}>
                                    <Text style={styles.btnText}>Logga in</Text>
                                </TouchableHighlight>}
                        </LinearGradient>



                        <Text style={{ color: 'white', margin: 20, fontSize: 17 }}>Eller</Text>

                        <TouchableHighlight onPress={() => this.renderSignup()} style={[styles.button, styles.reg]}>
                            <Text style={styles.regText}>Skapa Konto</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>



        )

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

    h1: {
        fontSize: 54,
        color: 'white',
        fontWeight: 'bold'

    },

    error: {
        color: 'yellow', 
        fontSize: 16
    },

    screenLabel: {
        fontSize: 26,
        color: 'white',
        marginBottom: 20,
        marginTop: 5

    },
    content: {
        height: '50%',
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },



    texts: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        margin: 10



    },

    labelText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'

    },

    input: {

        width: '75%',
        height: 50,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#dddbdb',
        backgroundColor: '#f9f9f9',
        margin: 12,
        borderRadius: 14


    },

    button: {
        backgroundColor: 'transparent',
        width: '60%',
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        margin: 20

    },

    btnText: {
        fontSize: 18,
        color: 'rgba(0,21,72,1)',
        fontWeight: 'bold'

    },

    reg: {
        backgroundColor: 'transparent',
        borderBottomColor: '#bbb',
        borderBottomWidth: 0.5,
        margin: -10

    },
    regText: {
        color: 'white',
        fontSize: 22,

    }

});

export default LoginScreen