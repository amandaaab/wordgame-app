import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import * as firebase from 'firebase';



class SignupScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: false
        }

        this.trySignup = this.trySignup.bind(this)
    }



    trySignup = () => {

        const {email, password} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.props.isSignupRender()
            console.log('tjena ny användare', email )

        })
        .catch(()=>{
            console.log('gick ej att logga in')
        })
        /*
        if (name) {
            this.props.isSignupRender(name)

            this.setState({
                errors: false
            })
            console.log('du loggas in', name)
        } else {
            this.setState({
                errors: true
            })
            console.log('fel namn')
        }
        */

    }
    render() {
        return (
            <View style={styles.container}>

                <FormLabel>Email</FormLabel>
                <FormInput
                    style={{ height: 40, width: '60%', textAlign: 'center' }}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    autoFocus={false}
                />
                {this.state.errors == true ?
                    <FormValidationMessage>Kunde inte hitta en giltlig email</FormValidationMessage>
                    : null}
                 <FormLabel>Lösenord</FormLabel>
                <FormInput
                    style={{ height: 40, width: '60%', textAlign: 'center' }}
                    placeholder="Email"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    autoFocus={false}
                />

                <TouchableHighlight>
                    <Text onPress={() => this.trySignup()} style={styles.LoginButton}>Registrera</Text>
                </TouchableHighlight>

            </View>
        )

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

export default SignupScreen