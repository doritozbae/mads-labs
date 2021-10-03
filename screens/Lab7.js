import React from "react"
import { View, Text, StyleSheet, PermissionsAndroid, ToastAndroid } from 'react-native'

import CustomButton from '../components/CustomButton'

const Lab7 = props => {

    const showToast = text => {
        ToastAndroid.show(text, ToastAndroid.SHORT)
    }

    const requestCameraPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)) {
                        showToast('разрешено')
                    } else {
                        showToast('запрещено')
                    }
                }
            )
    }

    const requestReadContactsPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)) {
                        showToast('разрешено')
                    } else {
                        showToast('запрещено')
                    }
                }
            )
    }

    const requestReadSmsPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS)) {
                        showToast('разрешено')
                    } else {
                        showToast('запрещено')
                    }
                }
            )
    }

    const requestRecordAudioPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)) {
                        showToast('разрешено')
                    } else {
                        showToast('запрещено')
                    }
                }
            )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Нажмите на кнопку для запроса разрешений</Text>
            <CustomButton onPress={requestCameraPermission}>камера</CustomButton>
            <CustomButton onPress={requestReadContactsPermission}>чтение контактов</CustomButton>
            <CustomButton onPress={requestReadSmsPermission}>чтение смс</CustomButton>
            <CustomButton onPress={requestRecordAudioPermission}>запись звука</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    title: {
        textAlign: 'center',
        marginVertical: 10
    },
    permissionInfo: {
        flexDirection: 'row',
        marginVertical: 5
    }
})

export default Lab7