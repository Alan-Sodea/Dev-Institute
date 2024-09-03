// routes/books.js
const express = require('express');
const router = express.Router();

let books = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const book = { id: nextId++, ...req.body };
    books.push(book);
    res.status(201).json(book);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { id, ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    books = books.filter(book => book.id !== id);
    res.status(204).end();
});

module.exports = router;
