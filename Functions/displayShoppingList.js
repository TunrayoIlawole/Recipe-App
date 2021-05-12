const domElement = {
    shoppingList: document.querySelector('.shopping-list')
}

const displayShoppingList = (result) => {
    result.forEach(ingredient => {
        const markup = `
            <li class="shopping-item" data-itemid=${ingredient.ingredient}>
                <div class="shopping-count">
                    <input type="number" value="${ingredient.count}" step="${ingredient.count}">
                    <p>${ingredient.unit}</p>
                </div>
                <p class="shopping-description">${ingredient.ingredient}</p>
                <button class="shopping-delete btn-tiny">
                    X
                </button>
            </li>
            `;

        domElement.shoppingList.insertAdjacentHTML('beforeend', markup);
    })

    const deleteButtons = document.querySelectorAll('.shopping-delete');
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', (e) => {
                const item = e.target.parentElement;
    
                if(item) item.parentElement.removeChild(item);
            })
        })
    
}

export default displayShoppingList;