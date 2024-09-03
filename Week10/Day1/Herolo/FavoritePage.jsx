// src/components/FavoritesPage.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { getFavorites } from '../localStorage';

const FavoritesPage = () => {
  const favorites = getFavorites();

  return (
    <Container>
      <Typography variant="h4">Favorites</Typography>
      {favorites.length === 0 ? (
        <Typography>No favorites yet.</Typography>
      ) : (
        favorites.map((fav, index) => (
          <Card key={index} style={{ marginTop: '10px' }}>
            <CardContent>
              <Typography variant="h6">{fav.name}</Typography>
              <Typography>Temperature: {fav.temp}°C</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default FavoritesPage;
