import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ActivityIndicator, TextInput, KeyboardAvoidingView, StatusBar } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';


import * as firebase from 'firebase';
import LoginScreen from './LoginScreen';



class SignupScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            displayName: '',
            loading: false,
            errors: false,
            goBackToMain: false
        }

        this.trySignup = this.trySignup.bind(this)
    }

    onPressBack = () => {
        this.props.closeSignUp()
        this.setState({
            goBackToMain: true
        })
    }


    trySignup = () => {

        this.setState({
            loading: true
        })
        const { email, password, displayName } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = firebase.auth().currentUser;
                if (user) {
                    user.updateProfile({
                        displayName: displayName,
                    }).then(
                        () => this.props.isSignupRender()
                    )
                }
            })
            .catch((error) => {
                console.log('gick ej att logga in, error:', error)
            })


    }
    render() {
        if (this.state.goBackToMain == true) {
            return <LoginScreen />
        } else {
            return (
                <LinearGradient
                    colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
                    style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center'

                    }}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-60} enabled>
                   
                        <View style={styles.content1}> 
                
                            <TouchableHighlight onPress={() => this.onPressBack()} style={styles.gobackBTN}>
                                <Text style={styles.goback}><Ionicons name="md-close" size={50}></Ionicons></Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.screenLabel}>Registrera dig</Text>

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

<LinearGradient
            colors={['#62fc9d', '#47ef88']}
            style={{ width: '60%',
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
                            <TouchableHighlight underlayColor='transparent' style={styles.button}>
                                <ActivityIndicator style={styles.btnText} size="small" color='rgba(0,21,72,1)' />
                            </TouchableHighlight>

                            : <TouchableHighlight  onPress={() => this.trySignup()} underlayColor='transparent' style={styles.button}>
                                <Text style={styles.btnText}>Registrera</Text>
                            </TouchableHighlight>}

                            </LinearGradient>


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
        margin: 10

    },

    content1: {
        width: '100%',
        padding: 30
    },

    content: {
        height: '50%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

    },



    labelText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'

    },

    gobackBTN: {
        justifyContent: 'center',
        alignItems: 'center'
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


    goback: {
        fontSize: 18,
        color: 'rgba(0,21,72,1)',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: -150,



    }

});

export default SignupScreen