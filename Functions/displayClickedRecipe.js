import getIngredients from './getIngredients';
import displayIngredients from './displayIngredients';

const domElements = {
  recipe: document.querySelector('.recipe')
}

function displayClickedRecipe(result) {
  const ingredients = getIngredients(result.ingredients);
  const markup = `
  <figure class="recipe-fig">
  <img src="${result.image_url}" alt="${result.title}" class="recipe-img" />
  <h1 class="recipe-title">
    <span>${result.title}</span>
  </h1>
</figure>

<div class="recipe-details">
  <div class="recipe-info">
    <svg class="recipe-info-icon">
      <use href="assets/icons.svg#icon-clock"></use>
    </svg>
    <span class="recipe-info-data recipe-info-data-minutes">45</span>
    <span class="recipe-info-text">minutes</span>
  </div>
  <button class="btn-round">
    <svg class="">
      <use href="assets/icons.svg#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="recipe-ingredients">
  <h2 class="heading-2">Recipe ingredients</h2>
  <ul class="recipe-ingredient-list">
    ${ingredients.map(el => displayIngredients(el)).join('')};
  </ul>
  <button class = "btn-small recipe__btn recipe__btn--add">
    <svg class = "search__icon">
    <use href = "../assets/icons.svg#icon-shopping-cart"></use>
    </svg>
    <span>Add to shopping list</span>
  </button>
</div>

<div class="recipe-directions">
  <h2 class="heading-2">How to cook it</h2>
  <p class="recipe-directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe-publisher">${result.publisher}</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn-small recipe-btn"
    href="${result.publisher_url}"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search-icon">
      <use href="assets/icons.svg#icon-arrow-right"></use>
    </svg>
  </a>
</div>
  `
  domElements.recipe.innerHTML = markup;

}

export default displayClickedRecipe;