import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from './fetch';
import { renderCards } from './render-markup';
import { getStatus, totalImg } from './form-submit';
import { lightBox } from './simple-light-box';

let nextPage = 2;

const lastPage = () => Math.ceil(totalImg / 40);

export const setNextPageAuto = page => (nextPage = page);

export const infinitySckroll = new IntersectionObserver(
    ([entry], observer) => {
        if (nextPage - 1 === lastPage() || getStatus() === false) {
            if (entry.isIntersecting) {
                Notify.info(
                    "We're sorry, but you've reached the end of search results."
                );
                infinitySckroll.unobserve(entry.target);
                return;
            }
        }
        if (entry.isIntersecting) {
            infinitySckroll.unobserve(entry.target);
            observerReload(entry);
        }
    },
    {
        threshold: 1,
    }
);

const observerReload = async e => {
    const { hits } = await getImg(nextPage);
    renderCards(hits);
    lightBox.refresh();
    const lastCard = document.querySelector('.photo-card:last-child');
    infinitySckroll.observe(lastCard);
    nextPage += 1;
};
