import React, { useState } from "react";

export default function First() {
  const [count, setCount] = useState(0);

  // here at one click value is increased by two times.
  const handleClick = () => {
    // because the count variable is taken as argument
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div className="container">
        <h3>Increment/Decrement </h3>
        <h4>Value: {count}</h4>
        <button onClick={handleClick}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}
