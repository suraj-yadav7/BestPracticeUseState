import React, { useState,useEffect } from "react";

// Rigt way to fecth data and use loading element instead of optional chaining
export default function Fourth() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://dummyjson.com/posts/1").then((response)=>{
      return response.json()}).then((result)=> {
      setData(result)
      console.log(result)
      setLoading(false)
    }).catch((error) => console.log("error occured while fetching data", error))
  },[])
  return(
    <>{
      loading? ("Data is Loading...."):
      <div className="container">
      <h3>{data.title}</h3>
        <p>{data.body}</p>
        <ul>
        {
        data.tags.map((elem,index)=> <li key={index}>{elem}</li>)
          }
        </ul>
      </div>
    }
    </>
  )
};