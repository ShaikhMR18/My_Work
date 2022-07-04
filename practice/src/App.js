import { useState } from "react";
import './Button';
import './Display';
import './App.css';
import Button from "./Button";
import Display from "./Display";

function App() {
  const [counter,setCounter]= useState(0);

  const incrementBy = (value)=>{
    setCounter(counter+parseInt(value));
  }
  
  return (
    <div className="App">
      <Button incrementBy={incrementBy} />
      <Display message={counter}/>
    </div>
  );
}

export default App;
