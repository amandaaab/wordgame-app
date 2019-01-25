import React from 'react';
import { StyleSheet, ActivityIndicator, Text, TextInput, KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class PayScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state = { 
            name : '',
            loading: false, //State for the activityindicator 
        
        }
    
      }


/* Async function for using await for waiting for a promise.  */      
pay = async (amount) => { 
    this.setState({
        loading: true,// the activityindicator starts
    })

//getting current users email to send to stripe
    const userEmail = this.props.screenProps.currentUser.email;

/*We use fetch with method POST to our route payment in server/server.js.
When your developing with expo you can't fetch localhost, it will not connect to the server. 
You will need to replace localhost with your public ip-address to get it working and the phone and your 
computer have to be connected to the same network wifi.
If it's a public wifi it can be possible it will through an error. Use your own network or connect your phone
to your private wifi. 
*/
    try {
      let response = await fetch(
        'http://192.168.0.33:5000/payment',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({amount: amount, email: userEmail}), //Sending the selected amount and useremail to server.js
      })

        if(response.ok){ // if the response is ok, go to PaymentSuccess.js
            this.props.navigation.navigate('paymentSuccess')
        } 
        else { //if the response is not ok, go to PaymentFailed.js
            this.props.navigation.navigate('paymentFailed')
        }

    } catch (error) {
        //If error - go to PaymentFailed.js
      this.props.navigation.navigate('paymentFailed')
    }

} 

    render() {
        // getting the param that we send from BeforePayScreen.js and place it in a variable
        const amount = this.props.navigation.getParam('amount');
    
      return (
        <LinearGradient 
        colors={['rgba(235,43,70,1)', 'rgba(0,21,72,1)']}
        style={{flex: 1, justifyContent: 'center'
        
        }}>

        <KeyboardAvoidingView  style={styles.container} behavior="padding" keyboardVerticalOffset={-80} enabled>
        <View style={styles.content}>
        <Text style={styles.text}>Var god fyll i dina uppgifter</Text>

        <View style={styles.inputContainer}>
        <View style={styles.box}>
            <Text style={styles.labelText}>För- och efternamn</Text>
            <TextInput style={styles.input}
                        placeholder="Ex Anna Andersson"
                        maxLength={30}
                        required={true}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                        autoFocus={true}
            />
        </View>

    
    <View style={styles.box}>
    
        <Text style={styles.labelText}>
        <Ionicons name="md-card" size={15}/>  Kortnummer
        </Text>
            <TextInput style={styles.input}
                        value={'4242 4242 4242 4242'} //the cardnumber is a testnumber from stripe 
            />
        </View>


        <View style={styles.smallBox}>
            <Text style={styles.labelText}>Utgångsdatum</Text>
                <TextInput style={styles.input}
                            keyboardType={'numeric'}
                            required={true}
                            value={'01/20'} //exp date is not needed in stripe test payments 
                />
        </View>
        <View style={styles.smallBox}>
            <Text style={styles.labelText}>CVC</Text>
            <TextInput style={styles.input}
                        maxLength={3}
                        keyboardType={'numeric'}
                        required={true}
                        value={'999'} //cvc is not needed in stripe test payments
            />
        </View>

        </View>


          <TouchableHighlight style={styles.button} onPress={()=> this.pay(amount)}> 
                <View>
                    {this.state.loading ? <ActivityIndicator size="small" color="white" animating={this.state.loading} />
                    : <Text style={styles.buttonText}>Betala</Text>
                }
                    </View>
                </TouchableHighlight>
            </View>
            </KeyboardAvoidingView>
        </LinearGradient>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        borderRadius: 10,
        width: '90%',
        height: '70%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex:0, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 40, 
    
      },
    name: {
        color: 'black',
        fontSize: 25,
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 10,
    },
    buttonText: {
    color: 'white',
    },
    input: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#dddbdb',
        backgroundColor: '#f9f9f9',
        borderRadius: 14,
        //marginBottom: '2%',
    },
    box: {
        width: '75%',
        margin: '4%',

    },
    smallBox: {
        width: '50%',
        margin: '4%',

    },
    text: {
        fontSize: 18, 
        fontWeight: 'bold',
        margin: 10,
    },
    labelText: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin:2,
    },
    inputContainer: {

        width: '90%',
        height: '68%',
        alignItems: 'center',
        flex:0, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        
    }


});