import getResults from './Functions/getResults';
import displayResult from './Functions/displayResult';

const domElements = {
    form: document.querySelector('.search'),
    input: document.querySelector('.search-field'),
    results: document.querySelector('.results'),
    loader: document.querySelector('.loader-con'),
    theCart: document.querySelector('.cart'),
    heartIcon: document.querySelector('.heart')
}

const loader = `
<div class = "loader"></div>
`;

function handleSubmit(e) {
    e.preventDefault();

    const inputValue = domElements.input.value;

    const searchQuery = inputValue.trim();

    const searchResults = domElements.results;
    searchResults.innerHTML = '';

    domElements.loader.insertAdjacentHTML('afterbegin', loader);

    try {
        const results = getResults(searchQuery);

        results.then(response => {
            const recipes = response.recipes;

            const loader = document.querySelector('.loader');

            if (loader) {
                loader.parentElement.removeChild(loader);
            }

            displayResult(recipes);
        })
    }
    catch (error) {
        console.log(error);
    }
}

domElements.form.addEventListener('submit', handleSubmit);

domElements.heartIcon.addEventListener('click', () => {
    domElements.theCart.classList.toggle('show');
})