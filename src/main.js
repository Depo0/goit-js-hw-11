


import { getPictures } from './js/pixabay-api.js';
import { createMarkup, onFetchError } from './js/render-functions';

const formSearch = document.querySelector('.form-search');
const cardContainer = document.querySelector('.card-container');
const loader = document.querySelector('.loader');

formSearch.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const userValue = form.elements.search.value.toLowerCase();

    showLoader();

    getPictures(userValue)
        .then((data) => createMarkup(data, cardContainer))
        .catch(onFetchError)
        .finally(() => {
            form.reset();
            hideLoader();
        });
}

function showLoader() {
    loader.style.display = 'flex';
}

function hideLoader() {
    
    loader.style.display = 'none';
}
