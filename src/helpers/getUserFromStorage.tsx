import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserFromStorage = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        return JSON.parse(user!);

    } catch (error) {
        throw error;
    }
}

export default getUserFromStorage;