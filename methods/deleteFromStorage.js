import AsyncStorage from '@react-native-async-storage/async-storage'

export const deleteFromStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}