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
}

export default getResults;