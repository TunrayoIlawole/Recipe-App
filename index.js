import getResults from './Functions/getResults';
import displayResult from './Functions/displayResult';
import displayDailyRecipe from './Functions/displayDailyRecipe';

const domElements = {
    form: document.querySelector('.search'),
    input: document.querySelector('.search-field'),
    results: document.querySelector('.results'),
    loader: document.querySelector('.loader-con'),
    theCart: document.querySelector('.cart'),
    heartIcon: document.querySelector('.heart'),
    modal: document.querySelector('.modal'),
    overlay: document.querySelector('.overlay'),
    modalClose: document.querySelector('.close-modal'),
    error: document.querySelector('.error')
}

const loader = `
<div class = "loader"></div>
`;


function showDailyRecipe() {
    const foods = ['pizza', 'fish', 'beef', 'pasta', 'steak', 'cake'];
    const randomFood = foods[Math.trunc(Math.random() * foods.length)];
    console.log(randomFood);

    domElements.modal.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');

    try {
        const results = getResults(randomFood);

        results.then(response => {
            const recipes = response.recipes;

            const randomIndex = Math.trunc(Math.random() * recipes.length);
            const randomRecipe = recipes[randomIndex];

            console.log(randomRecipe);
            displayDailyRecipe(randomRecipe);
        })
    } catch (error) {
        console.log(error);
    }
}

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

window.addEventListener('load', showDailyRecipe);

domElements.modalClose.addEventListener('click', () => {
    domElements.modal.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
})