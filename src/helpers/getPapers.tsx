import AsyncStorage from '@react-native-async-storage/async-storage';
import glucemiaApi from "../api/glucemiaApi";
import { Paper } from "../interfaces/appInterfaces";

const getPapers = async (): Promise<Paper[]> => {
    try {
        const token = await AsyncStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }
        const response = await glucemiaApi.get('/papers', { headers: headers });
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export default getPapers;