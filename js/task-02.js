const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const AddIngredients = ingredient => {
    return ingredient.map(item => {
        const liEl = document.createElement('li')
        liEl.textContent = item
        liEl.classList.add('item')

        return liEl
    })
}

const elements = AddIngredients(ingredients)
ulEl.append(...elements)