import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
            <View style={{ ...styles.button, ...props.buttonStyle }}>
                <Text style={{ ...styles.text, ...props.textStyle }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        borderRadius: 13,
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf:'center',
        height: 30,
        margin: 3
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
    }
})

export default CustomButton