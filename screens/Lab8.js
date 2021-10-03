import React, { useState, useRef } from "react"
import { View, StyleSheet, TextInput } from 'react-native'
import { WebView } from 'react-native-webview'

import CustomButton from "../components/CustomButton"

const Lab8 = props => {
    const [uri, setUri] = useState('https://github.com/willoyn')
    const webviewRef = useRef()
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TextInput
                    value={uri}
                    onChangeText={setUri}
                    style={{ marginVertical: 5 }}
                />
                <CustomButton onPress={() => webviewRef.current.goBack()}>назад</CustomButton>
            </View>

            <WebView
                ref={webviewRef}
                source={{ uri: uri }}
                onError={error => console.log('WEBVIEW ERROR')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Lab8