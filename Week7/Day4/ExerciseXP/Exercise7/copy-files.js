const fs = require('fs');

const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(destinationFile, data, 'utf8', (err) => {
        if (err) throw err;
        console.log('File copied successfully!');
    });
});
