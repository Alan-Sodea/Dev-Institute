function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'banana', 'orange');
}



// Part 2

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'kiwi');
    displayJuice();
}