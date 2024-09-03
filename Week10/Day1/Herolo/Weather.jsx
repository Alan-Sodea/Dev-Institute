// src/components/WeatherPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { saveToFavorites, getFavorites } from '../localStorage';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  const handleSearch = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    setWeather(response.data);
  };

  const handleAddFavorite = () => {
    if (weather && !favorites.find(fav => fav.name === weather.name)) {
      const updatedFavorites = [...favorites, { name: weather.name, temp: weather.main.temp }];
      setFavorites(updatedFavorites);
      saveToFavorites(updatedFavorites);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Weather Page</Typography>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
        style={{ marginRight: '10px' }}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">Search</Button>
      {weather && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h5">{weather.name}</Typography>
            <Typography variant="h6">Temperature: {weather.main.temp}°C</Typography>
            <Button onClick={handleAddFavorite} variant="contained" color="secondary">Add to Favorites</Button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default WeatherPage;
