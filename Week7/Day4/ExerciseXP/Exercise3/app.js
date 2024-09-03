const { readFile, writeFile } = require('./fileManager');

// Reading from "Hello World.txt"
const helloContent = readFile('Hello World.txt');
console.log(`Read from Hello World.txt: ${helloContent}`);

// Writing to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
console.log('Content written to Bye World.txt');
