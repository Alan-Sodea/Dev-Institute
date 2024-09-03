import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    let calcResult;

    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        calcResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        calcResult = 'Invalid operation';
    }

    setResult(calcResult);
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
        <button onClick={handleCalculation}>Calculate</button>
        {result !== null && (
          <div className="result">
            <h2>Result: {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
