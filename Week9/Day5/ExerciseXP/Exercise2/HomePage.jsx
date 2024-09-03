import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <h1>Snap Shot Gallery</h1>
      <nav>
        <Link to="/mountain">Mountain</Link>
        <Link to="/beach">Beaches</Link>
        <Link to="/birds">Birds</Link>
        <Link to="/food">Food</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
}

export default HomePage;
