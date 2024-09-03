// server/routes/tasks.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, '../../tasks.json');

// Helper function to read tasks from file
const readTasksFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(tasksFilePath, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(JSON.parse(data));
        });
    });
};

// Helper function to write tasks to file
const writeTasksToFile = (tasks) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

// GET /tasks: Retrieve a list of all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await readTasksFromFile();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Error reading tasks' });
    }
});

// GET /tasks/:id: Retrieve a specific task by ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const tasks = await readTasksFromFile();
        const task = tasks.find(t => t.id === id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error reading tasks' });
    }
});

// POST /tasks: Create a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const tasks = await readTasksFromFile();
        const newTask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description
        };
        tasks.push(newTask);
        await writeTasksToFile(tasks);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Error writing tasks' });
    }
});

// PUT /tasks/:id: Update a task by ID
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const tasks = await readTasksFromFile();
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }
        tasks[taskIndex] = { id, title, description };
        await writeTasksToFile(tasks);
        res.json(tasks[taskIndex]);
    } catch (err) {
        res.status(500).json({ error: 'Error updating task' });
    }
});

// DELETE /tasks/:id: Delete a task by ID
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const tasks = await readTasksFromFile();
        const newTasks = tasks.filter(t => t.id !== id);
        if (tasks.length === newTasks.length) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await writeTasksToFile(newTasks);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting task' });
    }
});

module.exports = router;
