
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";




export function createMarkup({ hits }, cardContainer) {
    if (hits.length === 0) {
        onFetchError();
        return;
    }

    const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <li class="item">
                <a href="${largeImageURL}">
                    <img class="image" src="${webformatURL}" alt="${tags}" width="360">
                </a>
                <ul class="descr-list">
                    <li class="descr-item">
                        <h3 class="descr-title">Likes</h3>
                        <p class="descr-value">${likes}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Views</h3>
                        <p class="descr-value">${views}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Comments</h3>
                        <p class="descr-value">${comments}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Downloads</h3>
                        <p class="descr-value">${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join('');

    cardContainer.innerHTML = markup;

    const lightbox = new SimpleLightbox('.card-container a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

    lightbox.refresh();
}

export function onFetchError() {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}
