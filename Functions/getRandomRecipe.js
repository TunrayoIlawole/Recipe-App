import displayRandomRecipe from './displayRandomRecipe';
import getResults from './getResults';

const domElements = {
    modal: document.querySelector('.modal'),
    overlay: document.querySelector('.overlay'),
    modalClose: document.querySelector('.close-modal'),
    randomBtn: document.querySelector('.btn-random')
}

const getRandomRecipe = () => {
    const foods = ['pizza', 'fish', 'beef', 'pasta', 'steak', 'cake', 'lasagna', 'lobster'];
    const randomFood = foods[Math.trunc(Math.random() * foods.length)];

    domElements.modal.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');

    try {
        const results = getResults(randomFood);

        results.then(response => {
            const recipes = response.recipes;

            const randomIndex = Math.trunc(Math.random() * recipes.length);
            const randomRecipe = recipes[randomIndex];

            displayRandomRecipe(randomRecipe);
        })
    } catch (error) {
        console.log(error);
    }
}

export default getRandomRecipe;