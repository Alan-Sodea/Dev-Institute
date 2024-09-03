// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

// Assuming quotes data is in quotes.json and looks like [{ "quote": "...", "author": "..." }, ...]
import quotesData from './data/quotes.json';

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [usedQuotes, setUsedQuotes] = useState([]);

  // Function to get a random quote
  const getRandomQuote = () => {
    const availableQuotes = quotesData.filter(q => !usedQuotes.includes(q));
    if (availableQuotes.length === 0) {
      // All quotes have been used, reset the used quotes list
      setUsedQuotes([]);
      return quotesData[Math.floor(Math.random() * quotesData.length)];
    }
    return availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
  };

  // Function to handle button click
  const handleClick = () => {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
    setUsedQuotes([...usedQuotes, newQuote]);

    // Change colors randomly
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById('quote').style.color = getRandomColor();
    document.getElementById('button').style.backgroundColor = getRandomColor();
  };

  // Function to generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Initialize with a random quote
  if (!currentQuote) {
    handleClick();
  }

  return (
    <div className="App">
      <header>
        <h1 id="quote">{currentQuote ? currentQuote.quote : 'Loading...'}</h1>
        <p>{currentQuote ? `— ${currentQuote.author}` : ''}</p>
        <button id="button" onClick={handleClick}>New Quote</button>
      </header>
    </div>
  );
}

export default App;
