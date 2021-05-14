import displayLikedRecipe from './displayLikedRecipe';

const domElement = {
    heart: document.querySelector('.heart')
}

const cart = [];

const likeRecipe = (recipe, id, button) => {
    domElement.heart.innerHTML = '🧡';

    const prevItem = cart.find(item => item.id === id || item.recipe_id === id);

    if (!prevItem) {
        cart.push({
            ...recipe,
            id: id
        });
    } else {
        button.disabled = true;
    }
    
    console.log(cart);
    displayLikedRecipe(cart);
}

export default likeRecipe;