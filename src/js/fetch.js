import axios from 'axios';
import { searchText } from './form-submit.js';

const API_KEY = '34181261-dc9f612f556ce5adee055f5bd';
axios.defaults.baseURL = 'https://pixabay.com/';

export const getImg = async page => {
    const options = {
        params: {
            key: API_KEY,
            q: searchText,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: page,
            per_page: 40,
        },
    };
    const { data } = await axios('api/', options);
    return data;
};
