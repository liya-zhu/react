import React, { useState } from "react";

export function Time() {
  var [state, setState] = useState({ property: "This is a string" });
  //setUsername("julia")

  /*array destructuring
  var arr=[1,2]
  var[x,y]=arr
  */

  var time = new Date().toTimeString();
  console.log(time);

  //stirng interpoltion
  var str = `The time is ${time}`;

  function someFunction(event) {
    setState(event.target.value);
    console.log("rerender");
  }

  var name = "julia";

  return (
    <div>
      <input type="text" value={state} onChange={someFunction} />
      <h1>Hi {name}</h1>
      <p>the time is:</p>
      <p>{time}</p>
    </div>
  );
}
