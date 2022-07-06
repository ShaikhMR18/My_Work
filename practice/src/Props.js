import React from "react";

function Props(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.product}</h2>
      <h3>${props.price}</h3>
    </div>
  );
}

export default Props;
// import React from 'react'

// export default function Props() {
//   return (
//     <div>Props</div>
//   )
// }
