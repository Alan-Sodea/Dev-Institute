import React, { useState } from 'react';
import Garage from './Garage';

function Car({ model }) {
  const [color, setColor] = useState('red');

  return (
    <div>
      <header>This car is {color} {model}</header>
      <Garage size="small" />
    </div>
  );
}

export default Car;
