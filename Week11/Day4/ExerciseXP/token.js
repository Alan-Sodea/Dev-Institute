const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
