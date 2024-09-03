router.post('/login', async (req, res) => {
    const accessToken = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id }, 'your_jwt_secret_refresh', { expiresIn: '7d' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.json({ accessToken });
  });
  