// app.js
const express = require('express');
const app = express();
const port = 3000;
const quizRouter = require('./routes/quiz');

app.use(express.json());
app.use('/quiz', quizRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
