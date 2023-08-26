// component re-rendering text with primitive and non primitive datatypes
import React, { useState,useEffect } from "react";

export default function Third() {
  
  const [price, setPrice] = useState(0);

  const [emp, setEmp] = useState({
    name:"suraj",
    designation:"developer",
    number:3
  })
  
  console.log("component is re-rendering")

  // case:1
  const handleClick1= () => {
    // when setPrice has similar value like initial value of useState:price, then component don't reneder as. both are same primitive value
    setPrice(0)
  }

  // case:2
const handleClick2 =()=>{
  // here component will re-render even though both inital value and setEmp value are similar because this object, array deals with reference/pointer.
  setEmp({
    name:"suraj",
    designation:"developer",
    number:3
    
  })
}

  
  return (
    <>
      <div className="container">
        <h4>Price:{price}</h4>
        <button onClick={handleClick1}>Price Inc</button>
        <h3>Employee Data</h3>
        <h4>name:{emp.name}</h4>
        <button onClick={handleClick2}>EmpName</button>
      </div>
    </>
  )
};