import axios from 'axios';

const baseURL = 'http://glucemiasserver.fdje.org/api';

const glucemiaApi = axios.create({
    baseURL, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})


export default glucemiaApi;
