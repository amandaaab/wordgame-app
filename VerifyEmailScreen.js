import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

import LoginScreen from './LoginScreen';

const VerifyEmailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ett email har skickats med en veriferings länk till din epost</Text>
            <Text style={styles.text}>Gå vidare när öppnat länken i din mail</Text>
            <TouchableHighlight onPress={()=> props.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Gå vidare och logga in</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40

    },
    text: {
        textAlign: 'center', 
        fontSize: 22,
        margin: 20
    },
    buttonText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    button: {
        borderBottomColor: 'black',
        borderBottomWidth: 3, 
    }
})

export default VerifyEmailScreen