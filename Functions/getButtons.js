const getButton = (page, type) => {
    return `
        <button class="btn-inline pagination-btn-${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>${type === 'prev' ? '⬅️' : '➡️'}</span>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>
    `;
}

export default getButton;