import makeRequest from './api';

function getResults(searchQuery) {
    return makeRequest.get('search?', {
        params: {
            q: searchQuery
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        const loader = document.querySelector('.loader');

        if (loader) {
            loader.parentElement.removeChild(loader);
        }

        document.querySelector('.error').classList.remove('hidden');
    })
}

export default getResults;