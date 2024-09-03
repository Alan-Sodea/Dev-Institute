import React, { useState } from 'react';

function Phone() {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhoneInfo(prevInfo => ({ ...prevInfo, color: 'blue' }));
  };

  return (
    <div>
      <p>Brand: {phoneInfo.brand}</p>
      <p>Model: {phoneInfo.model}</p>
      <p>Color: {phoneInfo.color}</p>
      <p>Year: {phoneInfo.year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
