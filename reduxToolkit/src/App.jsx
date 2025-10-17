
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './featuresCounter/counterSlice';
import { useState } from 'react';

function App() {
  const [number,setNumber]=useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement(){
      dispatch(increment());
  }
  function handleDecrement(){
      dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncrementByAmout(){
    dispatch(incrementByAmount(parseInt(number)))
  }
  return (
    <>
      <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrement}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
         <br />
        <br />
        <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
         <br />
        <button onClick={handleIncrementByAmout}>Increment By Amount {number}</button>
      </div>
    </>
  )
}

export default App
