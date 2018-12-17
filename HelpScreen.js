import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class HelpScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>HELP HERE!</Text>
          <Text style={styles.text}>Let's talk about the game rules</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis arcu, aliquam a sapien in, condimentum rhoncus nunc. Suspendisse aliquam luctus erat, ac consequat turpis commodo vitae. Suspendisse vestibulum efficitur leo id pulvinar. Aenean at volutpat ex. Quisque non lectus imperdiet, fermentum augue quis, vestibulum nibh. Donec pellentesque sed diam at tristique. Nulla magna quam, ullamcorper et nibh id, laoreet consectetur sapien. Suspendisse maximus, diam eget rutrum volutpat, metus nisi vulputate felis, ac tincidunt leo est sed nunc. Integer finibus egestas eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec arcu augue, tempus blandit ante ut, sodales molestie erat. Aliquam ullamcorper, libero ut sodales hendrerit, velit lacus porta dui, id imperdiet lacus tortor vitae nulla.</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000416',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }

});
