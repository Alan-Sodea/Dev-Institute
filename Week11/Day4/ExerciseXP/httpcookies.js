router.post('/login', async (req, res) => {
  const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.send('Logged in');
});
