import { refs } from './refs.js';

export const renderCards = cards => {
    return refs.galleryBox.insertAdjacentHTML(
        'beforeend',
        cards.reduce(
            (html, card) =>
                html +
                `<a class="gallery__item photo-card" href="${card.largeImageURL}">
            <div class="photo-card-box">
                <img class="gallery__image" src="${card.webformatURL}" alt="Tags: ${card.tags}" />
                <div class="photo-card-overlay">
                    <svg style="fill: #fff; opacity: 0.5" width="50" height="50">
                            <use xlink:href="#icon-enlarge"></use>
                    </svg>
                    </div>
                </div>
                <div class="info">
                    <p class="info-item">
                        <svg class="info-icon" width="20" height="20">
                            <use
                                xlink:href="#icon-likes"
                            ></use>
                        </svg>
                        <b>${card.likes}</b>
                    </p>
                    <p class="info-item">
                        <svg class="info-icon" width="20" height="20">
                            <use
                                xlink:href="#icon-views"
                            ></use>
                        </svg>
                        <b>${card.views}</b>
                    </p>
                    <p class="info-item">
                        <svg class="info-icon" width="20" height="20">
                            <use
                                xlink:href="#icon-comments"
                            ></use>
                        </svg>
                        <b>${card.comments}</b>
                    </p>
                    <p class="info-item">
                        <svg class="info-icon" width="20" height="20">
                            <use
                                xlink:href="#icon-downloads"
                            ></use>
                        </svg>
                        <b>${card.downloads}</b>
                    </p>
                </div>
            </div>
        </a>`,
            ''
        )
    );
};
