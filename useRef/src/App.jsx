import { useState} from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
 const [seconds,setSeconds] = useState(0);
 const [running,setRunning]=useState(false);
  let timeRef = useRef(null);
  function startTime(){
    timeRef.current=setInterval(()=>{setSeconds(prev=>prev+1)},1000);
    setRunning(true);
  }
  function stopTime(){
    clearInterval(timeRef.current)
    timeRef.current=null;
    setRunning(false)
  }
  function restartTime(){
    stopTime();
    setSeconds(0);

  }
  return (
   <div>
    <h1>Time: {seconds}</h1>
    <button onClick={startTime} disabled={running}>Start</button>
    <button onClick={stopTime} disabled={!running}>Stop</button>
    <button onClick={restartTime} disabled={!running || seconds===0} >Restart</button>
   </div>
  )
}

export default App
