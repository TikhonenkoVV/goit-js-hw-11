import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImg } from './fetch';
import { renderCards } from './render-markup';
import { lightBox } from './simple-light-box';
import { totalImg } from './form-submit';

let isRenderDenied = false;
let nextPage = 2;

export const setNextPage = page => (nextPage = page);

export const accessTogler = status => (isRenderDenied = status);

export const onScroll = async e => {
    if (isRenderDenied) return;
    const scrollOffset = 120;
    const scrollPosition = e.target.scrollHeight - e.target.scrollTop;
    const imgCount = (nextPage - 1) * 40;
    if (scrollPosition - scrollOffset <= e.target.clientHeight) {
        if (
            imgCount >= totalImg &&
            e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        ) {
            isRenderDenied = true;
            nextPage = 2;
            Notify.info(
                "We're sorry, but you've reached the end of search results."
            );
            return;
        }
        const { hits } = await getImg(nextPage);
        renderCards(hits);
        lightBox.refresh();
        nextPage += 1;
    }
};
