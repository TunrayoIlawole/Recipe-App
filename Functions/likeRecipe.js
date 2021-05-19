import displayLikedRecipe from './displayLikedRecipe';

const common = require('./common');

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
    
    common.persistData({ key: 'cartItems', isObject: true, data: cart })

    // localStorage.setItem('likes', JSON.stringify(cart));
    displayLikedRecipe(cart);
}

export default likeRecipe;

window.addEventListener('load', () => {
    cartItem = common.readStorage({
        key: 'cartItems',
        isObject: true
    })

    displayLikedRecipe(cartItem);
})