const makeRequest = axios.create({
    baseURL: 'https://forkify-api.herokuapp.com/api/',
});

export default makeRequest;