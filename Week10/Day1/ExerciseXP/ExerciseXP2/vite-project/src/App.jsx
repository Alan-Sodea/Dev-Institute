import React, { useRef, useState } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    setCharCount(inputRef.current.value.length);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {charCount}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
