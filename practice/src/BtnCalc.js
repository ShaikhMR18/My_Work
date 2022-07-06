import React from "react";

export default function BtnCalc(props) {
  const handle = () => {
    props.increamentBy(props.increment);
  };
  return (
    <div>
      <button onClick={handle}>
        +{props.increment}
      </button>
    </div>
  );
}
