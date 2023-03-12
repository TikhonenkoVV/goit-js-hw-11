import throttle from 'lodash.throttle';
import { refs } from './js/refs.js';
import { onSubmit } from './js/form-submit.js';
import { onScroll } from './js/page-scroll.js';

refs.searchForm.addEventListener('submit', onSubmit);

refs.galleryBox.addEventListener('scroll', throttle(onScroll, 500));

refs.test.addEventListener('click', () => console.log(isLoad));
