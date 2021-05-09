import getIngredients from './getIngredients';

function displayIngredients(ingredient) {
    return `
    <li class="recipe-ingredient">
        <svg class="recipe-icon">
            <use href="src/img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe-quantity">${ingredient.count}</div>
        <div class="recipe-description">
            <span class="recipe-unit">${ingredient.unit}</span>
                ${ingredient.ingredient}
        </div>
    </li>`
}

export default displayIngredients;