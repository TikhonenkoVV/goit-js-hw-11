import { refs } from './refs';

export const toggleMenu = e => {
    if (
        e.currentTarget.nodeName === 'BUTTON' ||
        e.target.classList.contains('backdrop')
    )
        refs.backdrop.classList.toggle('is-hidden');
};
