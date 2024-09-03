// server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const usersFilePath = path.join(__dirname, 'users.json');

// Helper function to read users from file
const readUsersFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(JSON.parse(data));
        });
    });
};

// Helper function to write users to file
const writeUsersToFile = (users) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

// POST /register: Register a new user
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const users = await readUsersFromFile();
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name,
            lastName,
            email,
            username,
            password: hashedPassword,
        };
        users.push(newUser);
        await writeUsersToFile(users);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// POST /login: Login user
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const users = await readUsersFromFile();
        const user = users.find(u => u.username === username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /users: Retrieve all users
app.get('/users', async (req, res) => {
    try {
        const users = await readUsersFromFile();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }});

app.listen(3000, () => console.log("Listening on port 3000"));