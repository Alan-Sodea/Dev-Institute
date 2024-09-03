import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

function HomeScreen() {
  return <h1>home</h1>;
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  throw new Error('I crashed!');
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
