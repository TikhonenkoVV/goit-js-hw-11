import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { renderCards } from './render-markup';
import { getImg } from './fetch.js';
import { lightBox } from './simple-light-box';
import { setNextPage } from './page-scroll';

export let searchText;
export let totalImg;

export const onSubmit = async e => {
    e.preventDefault();
    refs.galleryBox.innerHTML = '';
    if (refs.searchInput.value.trim() === '') {
        e.target.reset();
        return;
    }
    searchText = refs.searchInput.value.trim();
    const { totalHits, hits } = await getImg(1);
    if (hits) {
        Notify.success(`Hooray! We found ${totalHits} images.`);
        renderCards(hits);
        lightBox.refresh();
        totalImg = totalHits;
        setNextPage(2);
    }
    e.target.reset();
};
