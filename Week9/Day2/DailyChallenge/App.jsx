import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const increaseVote = (languageName) => {
    setLanguages(languages.map(lang => 
      lang.name === languageName
        ? { ...lang, votes: lang.votes + 1 }
        : lang
    ));
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      <ul>
        {languages.map(lang => (
          <li key={lang.name}>
            <span>{lang.name} ({lang.votes} votes)</span>
            <button onClick={() => increaseVote(lang.name)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
