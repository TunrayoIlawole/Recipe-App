import makeRequest from './api';
import displayClickedRecipe from './displayClickedRecipe';

function getClickedRecipe(keyword) {
    return makeRequest.get('get?', {
        params: {
            rId: keyword
        }
    }).then(response => {
        displayClickedRecipe(response.data.recipe);
        return response.data;
    })
}

export default getClickedRecipe;