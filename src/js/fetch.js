import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs.js';
import { renderCards } from './render-markup.js';

const API_KEY = '34181261-dc9f612f556ce5adee055f5bd';
const URL = 'https://pixabay.com/api/';

export const getImg = async () => {
    try {
        const options = {
            params: {
                key: API_KEY,
                q: refs.searchInput.value.trim(),
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: 1,
                per_page: 40,
            },
        };
        await axios.get(URL, options).then(res => {
            if (res.status !== 200) throw new Error('Page not found');
            renderCards(res.data);
            Notify.info(`Hooray! We found ${res.data.totalHits} images.`);
        });
        await lightBox.refresh();
    } catch (error) {
        if (error.message) Notify.failure('Network ERROR. Page not found');
    }
};
