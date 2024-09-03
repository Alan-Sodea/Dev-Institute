import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter with value: ${e.target.value}`);
    }
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <input type="text" onKeyDown={handleKeyDown} />
      <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
