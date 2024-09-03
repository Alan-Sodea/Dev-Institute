// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' }
    // Add more emojis as needed
];

// Utility function to get random elements from an array
function getRandomElements(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Endpoint to get a random emoji and options
app.get('/game', (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const distractors = getRandomElements(emojis.filter(e => e !== correctEmoji), 3);
    const options = [correctEmoji, ...distractors].sort(() => 0.5 - Math.random());

    res.json({
        emoji: correctEmoji.emoji,
        options: options.map(o => o.name),
        answer: correctEmoji.name
    });
});

// Endpoint to check the player's guess
app.post('/guess', (req, res) => {
    const { guess, answer } = req.body;
    if (guess === answer) {
        res.json({ result: 'Correct!' });
    } else {
        res.json({ result: 'Wrong. Try again!' });
    }
});

// Endpoint to get leaderboard (mock data)
app.get('/leaderboard', (req, res) => {
    const leaderboard = [
        { name: 'Alice', score: 100 },
        { name: 'Bob', score: 80 },
        { name: 'Charlie', score: 60 }
    ];
    res.json(leaderboard);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
