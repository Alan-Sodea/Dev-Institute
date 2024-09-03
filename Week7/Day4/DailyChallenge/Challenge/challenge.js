// challenge.js
const greet = require('./greeting');
const displayMessage = require('./colorful-message');
const readFile = require('./read-file');

const userName = 'Alice';

console.log(greet(userName));
displayMessage();
readFile();
