import { useState } from "react";
import "./Button";
import "./Display";
import "./App.css";
import BtnClick from "./BtnClick";
// import Button from "./Button";
// import Display from "./Display";
// import BtnCalc from "./BtnCalc";
// import Result from "./Result";
import Props from "./Props";

function App() {
  //const [counter, setCounter] = useState(0);

  // const incrementBy = (value) => {
  //   setCounter(counter + value);
  //   console.log("Virtual value :" + value);
  //   console.log("Counter value :" + counter);
  // };

  return (
    <div className="App">
      {/* <Button incrementBy={incrementBy} />
      <Display message={counter}/> */}
      {/* <BtnCalc increamentBy={incrementBy} increment={1} />
      <BtnCalc increamentBy={incrementBy} increment={2} />
      <BtnCalc increamentBy={incrementBy} increment={3} />
      <BtnCalc increamentBy={incrementBy} increment={4} />
      <BtnCalc increamentBy={incrementBy} increment={5} />
      <Result counter={counter} /> */}
      {/* <Props name="Google" product="Company" price={200} />
      <Props name="Microsoft" product="Company" price={500} />
      <Props name="Amazon" product="Company" price={400} /> */}
      <BtnClick/>
    </div>
  );
}

export default App;
