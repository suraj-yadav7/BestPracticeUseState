import React, { useState } from "react";
const costomHook = () => {

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("clicke run at btn")
  };
  return [count, handleClick]
}

// Parent component
export default function Fifth() {
  let customCall=costomHook()
  console.log("the custom function value",customCall)
  
  return (
    <>
      <div className="container">
        <h2>Parent Component</h2>
        <h3>Increment value in Parent component </h3>
        <p>Here we have defined one customhook called "customHook and used in two component : followed 'DRY Principle'"</p>
        <h4>Value: {customCall[0]}</h4>
        <button onClick={customCall[1]}>increment</button>
      </div>
      <div className="childComp">
        <Sixth />
      </div>
    </>
  )
};

// Child component
function Sixth() {
  let customCall2=costomHook()
  return (
    <>
        <h2>Child Component</h2>
       <div className="containerSixth">
        <h3>Increment value in child component</h3>
        <h4>Value: {customCall2[0]}</h4>
        <button onClick={customCall2[1]}>increment</button>
      </div>
    </>
  )
};