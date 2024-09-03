const products = require('./products');

function findProductByName(name) {
    return products.find(product => product.name === name);
}

// Example usage
const productNames = ['Laptop', 'Shoes', 'Watch'];
productNames.forEach(name => {
    const product = findProductByName(name);
    if (product) {
        console.log(`Product: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product with name ${name} not found.`);
    }
});
