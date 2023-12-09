import React from 'react';
import { useBilling } from '../context/BillingContext';

const Billing = () => {
  const { totalAmount, addToTotal, resetTotal } = useBilling();

  return (
    <div>
      <h2>Billing</h2>
      <p>Total Amount: {totalAmount}</p>
      <button onClick={() => addToTotal(10)}>Add $10</button>
      <button onClick={() => addToTotal(20)}>Add $20</button>
      <button onClick={resetTotal}>Reset Total</button>
    </div>
  );
};

export default Billing;
