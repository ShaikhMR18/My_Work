import { useState } from "react";
import './App.css';

function App() {
  const [counter,setCounter]= useState(0);

  const Change=()=>{
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <button onClick={Change}>{counter}</button>
    </div>
  );
}

export default App;
