import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import * as firebase from 'firebase';
import db from './firebaseConfig';


class MainVerify extends React.Component {

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

    signedUp = () => {
        this.props.isSignupRender()
        let user = firebase.auth().currentUser;
        let userId;
        if(user){
            userId = user.uid;

            db.collection("users").doc(userId).set({
                roundes: 0,
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
        }

        console.log('ny användare', userId )
    }

    loggedIn = () => {
        this.props.isLoginRender()
        console.log('exiterande användare')
    }



    openSignup = () => {
        this.setState({
            wantToSignup: true
        })
    }
    

    closeSignUp = () => {
        this.setState({
            wantToSignup: false
        })
    }

    render() {
        if (this.state.wantToSignup == true) {
            return <SignupScreen isSignupRender={this.signedUp} closeSignUp={this.closeSignUp} />
        

        } else {
            return (
                <LoginScreen isLoginRender={this.loggedIn}viewSignup={this.openSignup}/>
            
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

export default MainVerify