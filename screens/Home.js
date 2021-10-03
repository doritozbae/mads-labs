import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Home = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <Text>Практические задания по курсу</Text>
                <Text style={{ textAlign: 'center' }}>"Мобильные приложения для информационных систем"</Text>
                <Text>Жук Антон, Лучина Ян</Text>
                <Text>920605</Text>
            </View>
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
    textContainer: {
        alignItems: 'center',
    }
})

export default Home