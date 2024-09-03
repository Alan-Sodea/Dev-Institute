// client/src/App.js (update the existing code)
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch('http://localhost:5000/api/hello');
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }

    fetchMessage();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: inputValue }),
      });
      const data = await response.text();
      setResponseMessage(data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{message}</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;
