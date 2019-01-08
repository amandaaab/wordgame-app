import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import SignupScreen from './SignupScreen';
import * as firebase from 'firebase';



class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            testa: 'amanda',
            errors: false,
            loading: false,
            wantToSignup: false,
            items: []
        }

    }

   
    renderSignup = () => {
        this.setState({
            wantToSignup: true
        })
    }

    signedUp = (name) => {
        this.props.isLoginRender(name)
        console.log('ny användare')
    }


    isLogin = () => {

    const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .then(() => {
            this.props.isLoginRender(email)
                console.log('inloggad som:' , email)

              
           
             
            })

        .catch(()=>{
            this.setState({errors: 'Gick inte att skapa användare', loading: false})
            console.log(this.state.errors, 'gick ej att logga in')
        })
   
    }
    

    render() {
        if (this.state.wantToSignup == true) {
            return <SignupScreen isSignupRender={this.signedUp} />

        } else {
            return (

                <View style={styles.container}>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        style={{ height: 40, width: '60%', textAlign: 'center' }}
                        placeholder="Vänligen skriv in din mailadress ..."
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoFocus={false}
                    />
                    {this.state.errors == true ?
                        <FormValidationMessage>Kunde inte hitta användaren, försök igen!</FormValidationMessage>
                        : null}
                    
                    <FormLabel>Lösenord</FormLabel>
                    <FormInput
                        style={{ height: 40, width: '60%', textAlign: 'center' }}
                        placeholder="Vänligen skriv in din mailadress ..."
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        autoFocus={false}
                    />

                    <TouchableHighlight>
                        <Text onPress={() => this.isLogin()} style={styles.LoginButton}>Logga in</Text>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Text onPress={this.renderSignup} style={styles.LoginButton}>Registrera dig</Text>
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