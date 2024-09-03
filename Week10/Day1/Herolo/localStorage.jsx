// src/localStorage.js
export const saveToFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };
  