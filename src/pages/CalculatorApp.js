import React from 'react';
import Calculator from '../components/Calculator';
import { CalculatorProvider } from '../context/CalculatorContext';
import Billing from '../components/Billing';
import { BillingProvider } from '../context/BillingContext';


const CalculatorApp = () => {
  return (
    <div>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
      <BillingProvider>
        <Billing />
      </BillingProvider>
    </div>
  );
};

export default CalculatorApp;
