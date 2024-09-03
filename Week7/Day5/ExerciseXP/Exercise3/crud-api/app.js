// app.js
const express = require('express');
const app = express();
const port = 5000;

// Import the data module
const dataService = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
