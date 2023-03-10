import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { getImg } from './js/fetch.js';
import { renderCards } from './js/render-markup.js';
import { refs } from './js/refs.js';

const API_KEY = '34181261-dc9f612f556ce5adee055f5bd';
const URL = 'https://pixabay.com/api/';

let lightBox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});

const getImg = async () => {
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
        lightBox.refresh();
    } catch (error) {
        if (error.message) {
            console.log(error.message);
            Notify.failure('Network ERROR. Page not found');
        }
    }
};

const onSubmit = e => {
    e.preventDefault();
    getImg();
    e.target.reset();
};

refs.searchForm.addEventListener('submit', onSubmit);
