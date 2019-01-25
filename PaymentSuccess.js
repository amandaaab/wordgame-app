import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import db from './firebaseConfig';


export default class PaymentSuccess extends React.Component {

    componentDidMount(){
        //payment is accepted when the componentd has mounted and we can add coins to db 
    this.addCoins();
    }

// add coins to db. 
addCoins = async () => {

    const user = this.props.screenProps.currentUser //getting current user 
    const amount = this.props.navigation.getParam('amount');
    let coins;
    if(amount == 20){
        coins = 200
    } else {
        coins = 100
    }

    var docRef = await db.collection("users").doc(user.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                    db.collection("users").doc(user.uid).update({
                        coins: doc.data().coins + coins
                    })
            } else {
                db.collection("users").doc(user.uid).set({
                    coins: 100
                })
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

}

render(){
    return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center', alignItems:'center'
        }}>
        <View style={styles.content}>
        <Text style={styles.text}>Tack för din betalning!</Text>
         
            <TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Gå tillbaka  <Ionicons name="md-arrow-round-forward" size={25}/>
</Text>
            </TouchableHighlight>
        </View>
        </LinearGradient>
    )

    }
}

const styles = StyleSheet.create({

    content: {
    borderRadius: 10,
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex:0, 
    flexDirection: 'column',
    marginBottom: 70, 
    }, 
    text : {
        fontWeight: 'bold',
        fontSize: 28,
    }, 
    buttonText: {
        fontSize: 21, 
        color: 'gray',
        fontWeight: 'bold',
        marginTop: '30%',
    },


})

