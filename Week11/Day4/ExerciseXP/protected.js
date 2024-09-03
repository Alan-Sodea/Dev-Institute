const authenticateToken = require('./middleware/auth');

app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});
