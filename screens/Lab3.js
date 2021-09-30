import React, { useState } from "react"
import { View, StyleSheet, ToastAndroid, ImageBackground } from 'react-native'

import CustomButton from "../components/CustomButton"
import image from '../assets/lab3.jpg'

const Lab3 = props => {
    const [additionalStyle, setAdditionalStyle] = useState({})
    const [isImageVisible, setIsImageVisible] = useState(false)

    const showToast = text => {
        ToastAndroid.show(text, ToastAndroid.SHORT)
    }

    const screen = (
        <>
            <CustomButton
                onPress={() => {
                    setAdditionalStyle({
                        backgroundColor: 'green'
                    })
                    showToast('green')
                }}
            >зеленый</CustomButton>

            <CustomButton
                onPress={() => {
                    setAdditionalStyle({
                        backgroundColor: 'red'
                    })
                    showToast('red')
                }}
            >красный</CustomButton>

            <CustomButton
                onPress={() => {
                    setAdditionalStyle({
                        backgroundColor: 'blue'
                    })
                    showToast('blue')
                }}
            >синий</CustomButton>

            <CustomButton
                onPress={() => {
                    setAdditionalStyle({
                        backgroundColor: 'yellow'
                    })
                    showToast('yellow')
                }}
            >желтый</CustomButton>

            <CustomButton
                onPress={() => setIsImageVisible(!isImageVisible)}
            >изображение</CustomButton>

            <CustomButton
                onPress={() => showToast('https://github.com/willoyn')}
            >разработчик</CustomButton>
        </>
    )
    return (
        <View style={{ ...styles.screen, ...additionalStyle }}>
            {isImageVisible ?
                <ImageBackground source={image} style={styles.image}>
                    {screen}
                </ImageBackground> : screen
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center'
    },
    image: {

    }
})

export default Lab3