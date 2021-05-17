import getResults from './Functions/getResults';
import displayResults from './Functions/displayResults';
import getRandomRecipe from './Functions/getRandomRecipe';

const domElements = {
    form: document.querySelector('.search'),
    input: document.querySelector('.search-field'),
    results: document.querySelector('.results'),
    loader: document.querySelector('.loader-con'),
    theCart: document.querySelector('.cart'),
    heartIcon: document.querySelector('.heart'),
    error: document.querySelector('.error'),
    pageBtns: document.querySelector('.pagination'),
    container: document.querySelector('.container'),
    modal: document.querySelector('.modal'),
    overlay: document.querySelector('.overlay'),
    modalClose: document.querySelector('.close-modal'),
    randomBtn: document.querySelector('.btn-random')
}

const loader = `
<div class = "loader"></div>
`;


let result;

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
            result = response.recipes;

            const loader = document.querySelector('.loader');

            if (loader) {
                loader.parentElement.removeChild(loader);
            }

            displayResults(result);
        })
    }
    catch (error) {

        console.log(error);
    }
}

function closeModal() {
    domElements.modal.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
}

domElements.form.addEventListener('submit', handleSubmit);

domElements.heartIcon.addEventListener('click', () => {
    domElements.theCart.classList.toggle('show');
    domElements.overlay.classList.remove('hidden');
});

domElements.pageBtns.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        domElements.results.innerHTML = '';
        domElements.pageBtns.innerHTML = '';

        displayResults(result, goToPage);
    }
})

domElements.randomBtn.addEventListener('click', getRandomRecipe);

domElements.modalClose.addEventListener('click', closeModal);

domElements.overlay.addEventListener('click', () => {
    closeModal();
    domElements.theCart.classList.remove('show');
})