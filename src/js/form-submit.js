import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { renderCards } from './render-markup';
import { getImg } from './fetch.js';
import { lightBox } from './simple-light-box';
import { setNextPageAuto } from './IntersetionObserver';
import { setNextPage } from './load-more';
import { infinitySckroll } from './IntersetionObserver';

Notify.init({
    position: 'left-top',
});

let isAutoLoad = true;
export let searchText;
export let totalImg;
export const loadTogler = status => (isAutoLoad = status);
export const getStatus = () => isAutoLoad;

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
        infinitySckroll.unobserve;
        if (totalHits > 0) {
            Notify.success(`Hooray! We found ${totalHits} images.`);
            renderCards(hits);
            const lastCard = document.querySelector('.photo-card:last-child');
            if (isAutoLoad) {
                infinitySckroll.observe(lastCard);
                setNextPageAuto(2);
            } else {
                if (totalHits > 40)
                    refs.buttonLoadMore.classList.remove('visually-hidden');
                setNextPage(2);
            }
            lightBox.refresh();
            totalImg = totalHits;
        } else Notify.warning(`We found ${totalHits} images.`);
    }
    e.target.reset();
};
