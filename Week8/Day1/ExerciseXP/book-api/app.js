// app.js
const express = require('express');
const app = express();
const port = 3000;
const booksRouter = require('./routes/books');

app.use(express.json());
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
