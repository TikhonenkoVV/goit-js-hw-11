import { colorTheme } from './theme';
import { storageSave } from './storage';
import { loadTogler } from './form-submit';
import { refs } from './refs';

export const onOptionChange = e => {
    if (e.target.nodeName === 'INPUT') {
        if (e.target.name === 'load') {
            refs.galleryBox.innerHTML = '';
            storageSave('load', e.target.value);
            if (e.target.value === 'user') {
                loadTogler(false);
            } else {
                refs.buttonLoadMore.classList.add('visually-hidden');
                loadTogler(true);
            }
        }
        if (e.target.name === 'theme') {
            colorTheme(e.target.value);
            storageSave('theme', e.target.value);
        }
    }
};
