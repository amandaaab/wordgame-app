import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';


const PolicyScreen = (props) => {

    return (
        <View style={styles.modal}>
            <Text>HEJ MODAL</Text>
            <TouchableHighlight onPress={() => props.modalClose()}>
                <Text>Stäng</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default PolicyScreen