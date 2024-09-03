router.post('/refresh', (req, res) => {
    const { refreshToken } = req.cookies;
    if (refreshToken == null) return res.sendStatus(401);
  
    jwt.verify(refreshToken, 'your_jwt_secret_refresh', (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign({ userId: user.userId }, 'your_jwt_secret', { expiresIn: '15m' });
      res.json({ accessToken });
    });
  });
  