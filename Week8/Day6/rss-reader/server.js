// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const Parser = require('rss-parser');

const app = express();
const port = 3000;
const rssFeedUrl = 'https://thefactfile.org/feed/';
const parser = new Parser();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'pages'));
app.use(express.static(path.join(__dirname, 'public')));

let allPosts = [];

(async () => {
  try {
    let feed = await parser.parseURL(rssFeedUrl);
    allPosts = feed.items;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
})();

// Route to render all posts
app.get('/', (req, res) => {
  res.render('index', { posts: allPosts });
});

// Route to render search page
app.get('/search', (req, res) => {
  res.render('search', { posts: [] });
});

// Route to handle search by title
app.post('/search/title', (req, res) => {
  const title = req.body.title.toLowerCase();
  const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(title));
  res.render('search', { posts: filteredPosts });
});

// Route to handle search by category
app.post('/search/category', (req, res) => {
  const category = req.body.category.toLowerCase();
  const filteredPosts = allPosts.filter(post => post.category && post.category.toLowerCase().includes(category));
  res.render('search', { posts: filteredPosts });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
