// routes/todos.js
const express = require('express');
const router = express.Router();

let todos = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const todo = { id: nextId++, ...req.body };
    todos.push(todo);
    res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = { id, ...req.body };
        res.json(todos[index]);
    } else {
        res.status(404).send('To-Do item not found');
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});

module.exports = router;
