
import React, { createContext, useReducer, useContext } from 'react';

// initial state
const initialState = {
  value: 0,
};

// actions
const actionTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
};

// reducer function
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { value: state.value + action.payload };
    case actionTypes.SUBTRACT:
      return { value: state.value - action.payload };
    case actionTypes.MULTIPLY:
      return { value: state.value * action.payload };
    case actionTypes.DIVIDE:
      return { value: state.value / action.payload };
    default:
      return state;
  }
};

// Create the context
const CalculatorContext = createContext();

// context provider
export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const add = (value) => dispatch({ type: actionTypes.ADD, payload: value });
  const subtract = (value) => dispatch({ type: actionTypes.SUBTRACT, payload: value });
  const multiply = (value) => dispatch({ type: actionTypes.MULTIPLY, payload: value });
  const divide = (value) => dispatch({ type: actionTypes.DIVIDE, payload: value });

  return (
    <CalculatorContext.Provider
      value={{ value: state.value, add, subtract, multiply, divide }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

// custom hook to consume the context
export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};
