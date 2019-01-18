import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';


const PolicyScreen = (props) => {

    return (
        <View style={styles.modal}>
            <Text style={styles.title}>Användarvillkor</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia nunc quis feugiat scelerisque. Sed non facilisis massa. Etiam ut orci volutpat, facilisis leo non, posuere tellus. Nulla facilisi. Aenean mollis mollis lacus.
            </Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia nunc quis feugiat scelerisque. Sed non facilisis massa. Etiam ut orci volutpat, facilisis leo non, posuere tellus. Nulla facilisi. Aenean mollis mollis lacu.
            </Text>
            <Text style={styles.text}>
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin porta velit, non sagittis augue. Etiam varius odio ut ex facilisis posuere. Donec suscipit, eros quis tristique suscipit.
            </Text>
            <TouchableHighlight style={styles.closeButton} onPress={() => props.modalClose()}>
                <Text>Stäng</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 30
    },
    title: {
        fontSize: 30,
        padding: 20,
        margin: 30
    },
    text: {
        margin: 10
    },
    closeButton: {
        backgroundColor: 'green',
        padding: 20, 
        margin: 30
    }
})

export default PolicyScreen