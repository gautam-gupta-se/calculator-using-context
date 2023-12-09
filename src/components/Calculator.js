import React from 'react';
import { useCalculator } from '../context/CalculatorContext';

const Calculator = () => {
  const { value, add, subtract, multiply, divide } = useCalculator();

  const handleOperation = (operation) => {
    const inputValue = parseFloat(prompt('Enter a value:'));
    if (!isNaN(inputValue)) {
      switch (operation) {
        case 'add':
          add(inputValue);
          break;
        case 'subtract':
          subtract(inputValue);
          break;
        case 'multiply':
          multiply(inputValue);
          break;
        case 'divide':
          divide(inputValue);
          break;
        default:
          break;
      }
    } else {
      alert('Please enter a valid number.');
    }
  };


  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {value}</p>
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subtract</button>
      <button onClick={() => handleOperation('multiply')}>Multiply</button>
      <button onClick={() => handleOperation('divide')}>Divide</button>
    </div>
  );
};

export default Calculator;