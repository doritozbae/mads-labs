import React, { useRef, useEffect, useState } from "react"
import { View, Text, StyleSheet, Animated, TextInput } from 'react-native'

import CustomButton from "../components/CustomButton"

const SyncBeatingCircle = props => {
    const fadeAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    fadeAnimation,
                    {
                        toValue: 1,
                        duration: 600,
                        useNativeDriver: true,
                        isInteraction: false
                    }
                ),
                Animated.timing(
                    fadeAnimation,
                    {
                        toValue: 0.2,
                        duration: 600,
                        useNativeDriver: true,
                        isInteraction: false
                    }
                )
            ]),
            {
                iterations: -1
            }
        ).start()
    }, [fadeAnimation])

    return (
        <Animated.View
            style={{ ...props.style, opacity: fadeAnimation }}
        >
        </Animated.View>
    )
}

const Lab4 = props => {

    // async animation //
    const fadeAnimation = useRef(new Animated.Value(0)).current
    const [animationDuration, setAnimationDuration] = useState('500')

    const fadeIn = () => {
        Animated.timing(
            fadeAnimation,
            {
                toValue: 1,
                duration: parseInt(animationDuration),
                useNativeDriver: true,
                isInteraction: false
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            fadeAnimation,
            {
                toValue: 0,
                duration: parseInt(animationDuration),
                useNativeDriver: true,
                isInteraction: false
            }
        ).start()
    }
    // async animation //

    return (
        <View style={styles.screen}>
            <View style={styles.rowContainer}>
                <Text>Синхронная анимация работает</Text>
                <SyncBeatingCircle style={styles.redCircle}></SyncBeatingCircle>
            </View>
            <View style={styles.rowContainer}>
                <Text>Асинхронная анимация здесь</Text>
                <Animated.View
                    style={{ ...styles.redCircle, opacity: fadeAnimation }}
                >
                </Animated.View>
            </View>
            <View style={styles.rowContainer}>
                <CustomButton onPress={fadeIn}>показать</CustomButton>
                <CustomButton onPress={fadeOut}>спрятать</CustomButton>
            </View>
            <View style={styles.rowContainer}>
                <Text>Введите задержку: </Text>
                <TextInput
                    value={animationDuration}
                    onChangeText={setAnimationDuration}
                    keyboardType='numeric'
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    redCircle: {
        backgroundColor: 'red',
        width: 15,
        height: 15,
        borderRadius: 20,
        marginHorizontal: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    input: {
        width: '50%',
    }
})

export default Lab4