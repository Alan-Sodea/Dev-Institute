// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simulate a database with an array
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

// Routes
app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found.');
    res.json(post);
});

app.post('/posts', (req, res) => {
    const post = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(post);
    res.status(201).json(post);
});

app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found.');

    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found.');

    posts.splice(postIndex, 1);
    res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found.');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
