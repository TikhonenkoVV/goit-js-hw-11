import { refs } from './js/refs.js';
import { onSubmit } from './js/form-submit.js';
import { toggleMenu } from './js/toogle-option.js';
import { onLoad } from './js/on-load.js';
import { onOptionChange } from './js/option.js';
import { onLoadMore } from './js/load-more.js';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

new SimpleBar(refs.container);

refs.searchForm.addEventListener('submit', onSubmit);

refs.openOptions.addEventListener('click', toggleMenu);

refs.closeOptions.addEventListener('click', toggleMenu);

refs.backdrop.addEventListener('click', toggleMenu);

refs.optionsForm.addEventListener('click', onOptionChange);

refs.buttonLoadMore.addEventListener('click', onLoadMore);

onLoad();
