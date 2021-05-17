import getButton from './getButtons';

const domElements = {
    pageBtns: document.querySelector('.pagination')
}

const displayButtons = (page, numResults, resPerPage) => {
    console.log('Hey');
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        console.log('Well');
        button = getButton(page, 'next');
    } else if (page < pages) {
        button = `
        ${getButton(page, 'prev')}
        ${getButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        button = getButton(page, 'prev');
    }

    domElements.pageBtns.insertAdjacentHTML('afterbegin', button);
}

export default displayButtons;