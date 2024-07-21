


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "44781960-4338c4c6360104e4623fadff2";
const imageType = 'photo';
const orientation = 'horizontal';
const safeSearch = true;

export function getPictures(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        });
}
