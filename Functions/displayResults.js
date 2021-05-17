import displayResult from './displayResult';
import displayButtons from './displayButtons';

const displayResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    displayResult(recipes.slice(start, end));

    // render the pagination buttons
    displayButtons(page, recipes.length, resPerPage);
}

export default displayResults;