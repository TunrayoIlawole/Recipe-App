function getIngredients(ingredients) {
    const unitsLong = ['teaspoons', 'teaspoon', 'tablespoon', 'tablespoons', 'ounces', 'ounce', 'cups', 'pounds'];
    const unitsShort = ['tsp', 'tsp', 'tbsp', 'tbsp', 'oz', 'oz', 'cup', 'pound'];
    const units = [...unitsShort, 'kg', 'g'];

    const newIngredients = ingredients.map(el => {
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
            ingredient = ingredient.replace(unit, unitsShort[i]);
        });

        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(e12 => units.includes(e12));

        let objIng;
        if (unitIndex > -1) {
            const arrCount = arrIng.slice(0, unitIndex);

            let count;
            if (arrCount.length === 1) {
                count = eval(arrIng[0].replace('-', '+'));
            } else {
                count = eval(arrIng.slice(0, unitIndex).join('+'));
            }

            objIng = {
                count,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            };
        } else if (parseInt(arrIng[0], 10)) {
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        } else if (unitIndex === -1) {
            objIng = {
                count: 1,
                unit: '',
                ingredient
            }
        }

        return objIng;
    })

    ingredients = newIngredients;
    return ingredients;
}

export default getIngredients;