import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class HelpScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.text, styles.help]}>SPELREGLER</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis arcu, aliquam a sapien in, condimentum rhoncus nunc. Suspendisse aliquam luctus erat, ac consequat turpis commodo vitae. Suspendisse vestibulum efficitur leo id pulvinar. Aenean at volutpat ex. Quisque non lectus imperdiet, fermentum augue quis, vestibulum nibh. Donec pellentesque sed diam at tristique. Nulla magna quam, ullamcorper et nibh id, laoreet consectetur sapien. Suspendisse maximus, diam eget rutrum volutpat, metus nisi vulputate felis, ac tincidunt leo est sed nunc. Integer finibus egestas eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec arcu augue, tempus blandit ante ut.</Text>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,21,72,1)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    content: {
      width: '80%',
      height: '60%',
      padding: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 6,
    },
    text: {
        color: 'black',
        marginTop: 20
    },
    help: {
      fontSize: 28
    }

});
