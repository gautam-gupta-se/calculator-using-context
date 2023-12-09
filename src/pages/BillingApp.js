import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  totalAmount: 0,
};

const actionTypes = {
  ADD_TO_TOTAL: 'ADD_TO_TOTAL',
  RESET_TOTAL: 'RESET_TOTAL',
};

const billingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_TOTAL:
      return { totalAmount: state.totalAmount + action.payload };
    case actionTypes.RESET_TOTAL:
      return { totalAmount: 0 };
    default:
      return state;
  }
};

const BillingContext = createContext();

export const BillingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(billingReducer, initialState);

  const addToTotal = (amount) => dispatch({ type: actionTypes.ADD_TO_TOTAL, payload: amount });
  const resetTotal = () => dispatch({ type: actionTypes.RESET_TOTAL });

  return (
    <BillingContext.Provider value={{ totalAmount: state.totalAmount, addToTotal, resetTotal }}>
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = () => {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
};
