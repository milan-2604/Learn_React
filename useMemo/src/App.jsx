import { useState,useMemo } from 'react';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [number, setNumber] = useState(0);
  //without using useMemo
  // const expensiveResult = slowFunction(number);

  // using useMemo for optimization
const expensiveResult = useMemo(() => {
    return slowFunction(number);
  }, [number]); // only re-run when `number` changes
  return (
    <div className="App">
      <h2>Expensive Calculation Demo</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value) || 0)}
        placeholder="Enter a number"
      />
      <button onClick={() => setNumber(inputValue)}>Calculate</button>
      <p>Result: {expensiveResult}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log('Calling slow function...');
  for (let i = 0; i < 1e9; i++) {} // simulate delay
  return num * 2;
}


export default App
