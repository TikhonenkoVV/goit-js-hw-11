import axios from 'axios';
import { accessTogler } from './page-scroll.js';
import { searchText } from './form-submit.js';

const API_KEY = '34181261-dc9f612f556ce5adee055f5bd';
axios.defaults.baseURL = 'https://pixabay.com/';

export const getImg = async page => {
    accessTogler(true);
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
    accessTogler(false);
    return data;
};
