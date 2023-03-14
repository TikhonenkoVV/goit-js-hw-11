import { getImg } from './fetch';
import { infinitySckroll } from './IntersetionObserver';
import { refs } from './refs';
import { renderCards } from './render-markup';
import { lightBox } from './simple-light-box';

let nextPage = 2;

export const setNextPage = page => (nextPage = page);

export const onLoadMore = async () => {
    refs.buttonLoadMore.classList.add('visually-hidden');
    const { totalHits, hits } = await getImg(nextPage);
    renderCards(hits);
    lightBox.refresh();
    const lastPage = () => Math.ceil(totalHits / 40);
    if (nextPage < lastPage())
        refs.buttonLoadMore.classList.remove('visually-hidden');
    else {
        const lastCard = document.querySelector('.photo-card:last-child');
        infinitySckroll.observe(lastCard);
    }
    nextPage += 1;
};
