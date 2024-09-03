const _ = require('lodash');
const math = require('./math');

const sum = math.add(10, 5);
const product = math.multiply(4, 7);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Lodash version: ${_.VERSION}`);
