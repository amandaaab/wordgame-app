import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class HelpScreen extends React.Component {
  
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.help}>SPELREGLER</Text>
                <Text style={styles.text}>
                För att börja spela trycker du på den gröna spela-knappen på förstasidan. 
                Spelet är då igång och du har 40 sekunder på dig, du ser kvarstående tid i högra hörnet och i 
                nedräknaren som blir mindre och mindre. De sista sekundrarna så ändrar nedräknaren färg till röd. 
                </Text>
                <Text style={styles.text}>
                Spelet går ut på att du ska skriva så många ord som möjligt inom en kategori. Du ser den slumpvalda
                kategorin högst upp i den röda rutan när spelet börjar. 
                </Text>

                <View>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  för varje godkänt ord får du en poäng</Text>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  ett godkänt ord blir grönt</Text>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  ett icke godkänt ord blir svart och överstruket</Text>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  det är inte möjligt att skriva samma ord flera gånger</Text>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  ord skrivs endast i singular, tex tandborste och ej tandborstar</Text>
                  <Text style={styles.item}><Ionicons color={'green'} name="md-checkmark" size={15}/>  när spelet är slut ser du din poäng totala poäng</Text> 
                </View>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,21,72,1)',
    justifyContent: 'flex-start',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '87%',
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 70,

  },
  text: {
    color: 'black',
    lineHeight: 25,
  },
  help: {
    fontSize: 28,
    color: 'black',

  },
  item: {
    marginTop: '2%',
    marginBottom: '2%'
  },
  innerContent: {
    width: '95%',
    height: '70%',
    flex: 1, 
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingTop: 20,
  }

});
