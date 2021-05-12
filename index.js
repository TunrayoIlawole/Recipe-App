import getResults from './Functions/getResults';
import displayResult from './Functions/displayResult';

const domElements = {
    form: document.querySelector('.search'),
    input: document.querySelector('.search-field'),
    results: document.querySelector('.results'),
    loaderCon: document.querySelector('.loader')
}

const loader = `
<div class = "loader">
    <svg>
        <use href = "assets/icons.svg#icon-cw"></use>
    </svg>
</div>
`;

function handleSubmit(e) {
    e.preventDefault();

    const inputValue = domElements.input.value;

    const searchQuery = inputValue.trim();

    const searchResults = domElements.results;
    searchResults.innerHTML = '';

    domElements.loaderCon.insertAdjacentHTML('afterbegin', loader);

    try {
        const results = getResults(searchQuery);

        results.then(response => {
            const recipes = response.recipes;
            console.log(recipes);

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

// let requestFile = "https://forkify-api.herokuapp.com/api/search?q=pizza";

// let stuff = "https://forkify-api.herokuapp.com/api/get?rId=47746";