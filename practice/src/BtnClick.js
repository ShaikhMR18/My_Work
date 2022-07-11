import React from "react";
import { useState } from "react";

const BtnClick = (props) => {
  const [col, setColor] = useState("black");
  // const [text, setText] = useState("TechWind");

  const colorChange = () => {
    setColor("red");
    // setText("Thanks");
  };
  return (
    <div>
      <h3 style={{ color: col }}>React</h3>
      <button onClick={colorChange}>Click to Change Color</button>
    </div>
  );
};

export default BtnClick;
