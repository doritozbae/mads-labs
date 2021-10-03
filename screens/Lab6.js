import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'

import CustomButton from "../components/CustomButton"

import { writeToStorage } from "../methods/writeToStorage"
import { readFromStorage } from "../methods/readFromStorage"
import { deleteFromStorage } from "../methods/deleteFromStorage"

const Lab6 = props => {
    const studentsKey = 'students'
    const [dataFromStorage, setDataFromStorage] = useState()
    const [isAddingMode, setIsAddingMode] = useState(true)

    const [lastName, setLastName] = useState()
    const [group, setGroup] = useState()
    const [faculty, setFaculty] = useState()

    const addStudent = async () => {
        let studentsList = await readFromStorage(studentsKey)

        const student = {
            lastName: lastName,
            group: group,
            faculty: faculty
        }

        if (studentsList) {
            studentsList.push(student)
        } else studentsList = [student]

        writeToStorage(studentsKey, studentsList)
    }

    const showStudents = async () => {
        setIsAddingMode(false)
        setDataFromStorage(await readFromStorage(studentsKey))
    }

    const deleteStudents = () => {
        deleteFromStorage(studentsKey)
    }

    const renderStudentsList = item => {
        return (
            <View style={styles.studentItem}>
                <Text>{item.item.lastName}</Text>
                <Text>{item.item.group}</Text>
                <Text>{item.item.faculty}</Text>
            </View>
        )
    }

    const AddingComponent = (
        <>
            <TextInput
                placeholder='Введите фамилию'
                value={lastName}
                onChangeText={setLastName}
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
            <CustomButton onPress={addStudent}>сохранить</CustomButton>
        </>
    )

    const ShowingComponent = (
        <FlatList
            data={dataFromStorage}
            keyExtractor={() => Math.random()}
            renderItem={renderStudentsList}
        />
    )

    return (
        <View style={styles.screen}>
            <View style={styles.buttonsRow}>
                <CustomButton onPress={() => setIsAddingMode(true)}>добавить</CustomButton>
                <CustomButton onPress={showStudents}>показать</CustomButton>
                <CustomButton onPress={deleteStudents}>удалить всех</CustomButton>
            </View>
            {isAddingMode ? AddingComponent : ShowingComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    studentItem: {
        marginVertical: 10
    }
})

export default Lab6