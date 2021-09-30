import React, { useState } from "react"
import { View, StyleSheet, TextInput } from 'react-native'

import CustomButton from '../../components/CustomButton'

const Input = props => {

    const [lastName, setLastName] = useState()
    const [firstName, setFirstName] = useState()
    const [middleName, setMiddleName] = useState()
    const [group, setGroup] = useState()
    const [faculty, setFaculty] = useState()

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder='Введите фамилию'
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                placeholder='Введите имя'
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder='Введите отчество'
                value={middleName}
                onChangeText={setMiddleName}
            />
            <TextInput
                placeholder='Введите номер группы'
                value={group}
                onChangeText={setGroup}
            />
            <TextInput
                placeholder='Введите факультет'
                value={faculty}
                onChangeText={setFaculty}
            />
            <CustomButton
                onPress={() => props.navigation.navigate('Layouts', {
                    lastName: lastName,
                    firstName: firstName,
                    middleName: middleName,
                    group: group,
                    faculty: faculty
                })}
                buttonStyle={styles.button}
            >сохранить</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    }
})

export default Input