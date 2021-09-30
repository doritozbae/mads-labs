import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CustomButton from "../../components/CustomButton"

const Layouts = props => {
    const [layout, setLayout] = useState('Linear vertical')
    let studentCard

    const lastName = props.route.params.lastName
    const middleName = props.route.params.middleName
    const firstName = props.route.params.firstName
    const group = props.route.params.group
    const faculty = props.route.params.faculty

    switch (layout) {
        case 'Linear vertical':
            studentCard = (
                <View>
                    <Text style={styles.linearLayout}>{lastName}</Text>
                    <Text style={styles.linearLayout}>{firstName}</Text>
                    <Text style={styles.linearLayout}>{middleName}</Text>
                    <Text style={styles.linearLayout}>{group}</Text>
                    <Text style={styles.linearLayout}>{faculty}</Text>
                </View>
            )
            break
        case 'ScrollView':
            studentCard = (
                <ScrollView>
                    <Text style={styles.scrollviewLayout}>{lastName}</Text>
                    <Text style={styles.scrollviewLayout}>{firstName}</Text>
                    <Text style={styles.scrollviewLayout}>{middleName}</Text>
                    <Text style={styles.scrollviewLayout}>{group}</Text>
                    <Text style={styles.scrollviewLayout}>{faculty}</Text>
                </ScrollView>
            )
            break
        case 'Table':
            studentCard = (
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.linearLayout}>{lastName}</Text>
                        <Text style={styles.linearLayout}>{firstName}</Text>
                        <Text style={styles.linearLayout}>{middleName}</Text>
                        <Text style={styles.linearLayout}>{group}</Text>
                        <Text style={styles.linearLayout}>{faculty}</Text>
                    </View>
                    <View>
                        <Text style={styles.linearLayout}>{lastName}</Text>
                        <Text style={styles.linearLayout}>{firstName}</Text>
                        <Text style={styles.linearLayout}>{middleName}</Text>
                        <Text style={styles.linearLayout}>{group}</Text>
                        <Text style={styles.linearLayout}>{faculty}</Text>
                    </View>
                    <View>
                        <Text style={styles.linearLayout}>{lastName}</Text>
                        <Text style={styles.linearLayout}>{firstName}</Text>
                        <Text style={styles.linearLayout}>{middleName}</Text>
                        <Text style={styles.linearLayout}>{group}</Text>
                        <Text style={styles.linearLayout}>{faculty}</Text>
                    </View>
                </View>
            )
            break
    }

    return (
        <View style={styles.screen}>
            <View style={styles.layoutButtons}>
                <CustomButton
                    onPress={() => setLayout('Linear vertical')}
                >Linear vertical Layout</CustomButton>
                <CustomButton
                    onPress={() => setLayout('ScrollView')}
                >ScrollView Layout</CustomButton>
                <CustomButton
                    onPress={() => setLayout('Table')}
                >Table Layout</CustomButton>
            </View>

            {studentCard}

            <CustomButton
                onPress={() => props.navigation.goBack()}
            >назад</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    layoutButtons: {
        alignItems: 'flex-start'
    },
    linearLayout: {
        margin: 5,
        backgroundColor: 'black',
        color: 'white'
    },
    scrollviewLayout: {
        marginHorizontal: 5,
        marginVertical: 60,
        backgroundColor: 'black',
        color: 'white'
    }
})

export default Layouts