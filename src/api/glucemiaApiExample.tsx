import axios from 'axios';

const baseURL = 'http://192.168.200.15:8005/api';

const glucemiaApi = axios.create({
    baseURL, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})


export default glucemiaApi;