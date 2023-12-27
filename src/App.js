import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import { CalculatorProvider } from "./context/CalculatorContext";
import Billing from "./components/Billing";
import { BillingProvider } from "./context/BillingContext";
import PracticeDayOne from "./pages/PracticeDayOne";
import TableComponent from "./pages/PracticeDayOnePartTwo";
function App() {
  return (
    <div>
      <TableComponent />
      {/* <PracticeDayOne /> */}
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
      <BillingProvider>
        <Billing />
      </BillingProvider>
    </div>
  );
}

export default App;
