import React, { useState } from "react";


function Toggle() {
  const [ isOn, setIsOn ] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }


  return <button onClick={handleClick} style = {{ backgroundColor: "blue" }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
