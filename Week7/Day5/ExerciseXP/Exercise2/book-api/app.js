// app.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Sample data
let books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedYear: 2001 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedYear: 2002 },
];

// Routes
app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).send('Book not found.');
    res.json(book);
});

app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
    };
    books.push(book);
    res.status(201).json(book);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
