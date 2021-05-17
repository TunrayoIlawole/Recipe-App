const domElements = {
    dailyRecipe: document.querySelector('.recipe-con')
}

const displayRandomRecipe = (result) => {
    const markup = `
    <div class = "recipe-image">
        <img src = "${result.image_url}" alt = "${result.title}" />
    </div>
    <h3>${result.title}</h3>
    <div class = "recipe-details">
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
                <span>Directions ➡️</span>
            </a>
        </div>
    </div>`;


    domElements.dailyRecipe.innerHTML = markup;
}

export default displayRandomRecipe;