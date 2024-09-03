import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MountainPage from './pages/MountainPage';
import BeachPage from './pages/BeachPage';
import BirdsPage from './pages/BirdsPage';
import FoodPage from './pages/FoodPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mountain" element={<MountainPage />} />
        <Route path="/beach" element={<BeachPage />} />
        <Route path="/birds" element={<BirdsPage />} />
        <Route path="/food" element={<FoodPage />} />
      </Routes>
    </Router>
  );
}

export default App;
