import AsyncStorage from '@react-native-async-storage/async-storage'

export const readFromStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue !== null ? JSON.parse(jsonValue) : null
    } catch (error) {
        console.log(error)
    }
}
