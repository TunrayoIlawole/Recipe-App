const domElement = {
    theCart: document.querySelector('.cart'),
    heart: document.querySelector('.heart'),
    cartEmpty: document.querySelector('.cart-empty')
}

const displayLikedRecipe = (cart) => {
    domElement.theCart.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.id = item.recipe_id;

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemImage = document.createElement('img');
        itemImage.src = item.image_url;
        itemImage.alt = item.title;

        const itemName = document.createElement('p');
        itemName.classList.add('item-title');
        itemName.textContent = item.title;

        itemDetails.append(itemImage);
        itemDetails.append(itemName);

        const removeItem = document.createElement('div');
        removeItem.classList.add('remove-nom');

        const remove = document.createElement('p');
        remove.classList.add('remove');
        remove.textContent = 'X';

        removeItem.append(remove);

        cartItem.append(itemDetails);
        cartItem.append(removeItem);

        removeItem.addEventListener('click', (e) => {
            const id = item.id;

            let ids, index;
            ids = cart.map(curr => {
                return curr.id;
            });

            index = ids.indexOf(id);
            if (index !== -1) {
                cart.splice(index, 1);
            }

            if (cart.length === 0) {
                domElement.cartEmpty.display = "block";
                domElement.heart.innerHTML = '🤍';
            } else {
                domElement.cartEmpty.display = "none";
                domElement.heart.innerHTML = '🧡';
            }

            displayLikedRecipe(cart);

        })

        domElement.theCart.append(cartItem);
    });
}

export default displayLikedRecipe;