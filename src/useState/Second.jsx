import React, { useState } from "react";

export default function Second() {
  const [count, setCount] = useState(0);
  const cost_per_item = 5
  const totalPrice=count*cost_per_item
  //no need of using extra useState for totalPrice or useffect to run when qunatity is increase
  // as we know that when state value is updated components gets re-render, So above defined totalPrice will also run.
  

  return (
    <>
      <div className="container">
        <h3>Cart of items </h3>
        <h4>Item: {count}</h4>
        <h4>Total cost: {totalPrice}</h4>
        <button onClick={()=>setCount(count+1)}>Add item</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}