const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Files in the directory:', files);
});
