import getClickedRecipe from './getClickedRecipe';

const domElements = {
    results: document.querySelector('.results'),
}

const displayResult = (results) => {
    results.forEach(item => {
        const resultItem = document.createElement('li');
        resultItem.classList.add('preview');
        resultItem.id = `${item.recipe_id}`;
    
        const resultLink = document.createElement('a');
        resultLink.className = "preview-link preview-link-active";
        resultLink.setAttribute('href', `#${item.recipe_id}`);
        

        const figure = document.createElement('figure');
        figure.classList.add('preview-fig');
        const resultImage = document.createElement('img');
        resultImage.setAttribute('alt', `${item.title}`);
        resultImage.src = `${item.image_url}`;
        figure.append(resultImage);

        const resultData = document.createElement('div');
        resultData.classList.add('preview-data');
        const resultTitle = document.createElement('h4');
        resultTitle.classList.add('preview-title');
        resultTitle.textContent = `${item.title}`;
        const resultPublisher = document.createElement('p');
        resultPublisher.classList.add('preview-publisher');
        resultPublisher.textContent = `${item.publisher}`;
        const resultGenerated = document.createElement('div');
        resultGenerated.classList.add('preview-user-generated');
        const resultSvg = `<svg>
            <use href = "../assets/icons.svg#icon-user"></use>
        </svg>`;
        resultGenerated.innerHTML = resultSvg;

        resultData.append(resultTitle);
        resultData.append(resultPublisher);
        resultData.append(resultGenerated);

        resultLink.append(figure);
        resultLink.append(resultData);

        resultItem.append(resultLink);

        domElements.results.append(resultItem);

        resultItem.addEventListener('click', () => {
            const id = resultItem.id;
            getClickedRecipe(id);
        })
    });
    
}

export default displayResult;