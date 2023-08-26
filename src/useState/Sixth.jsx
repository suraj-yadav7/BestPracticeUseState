import React, { useState,useEffect } from "react";

export default function Sixth() {
const [count, setCount] = useState(0)
  


 // method 1 
/*
useEffect(()=>{
  const i = setInterval(()=>{
    console.log("setInterval function in useEffect")
    //value will not increase every 1.5s second as setCount(0+1) runeverytime, taking only initial value of count. It can be achieved by clear function of useEffect.
    setCount(count+1)
  },1500)
  
  return()=>{
    clearInterval(i)
    }
},[count])
  */

  // Method 2
  useEffect(()=>{
      console.log("val", count)
    setInterval(()=>{
      setCount((prev) => prev + 1)
    },1000)
  },[])
  
  return (
    <>
      <div className="contianer">
      <h4>SetTinerval in useEffect </h4>
        <h5>Count : {count}</h5>
      </div>
    </>
  )
};