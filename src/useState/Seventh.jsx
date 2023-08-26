import React, {useState, useEffect} from "react"

export default function Seventh(){
  const [id, setId] = useState(0)
  console.log("paren", id)

  return(
    <>
      <div className="container">
      <h3>Parent Component</h3>
        <h4>Count : {id}</h4>
        <button onClick={()=>setId(Math.floor(Math.random()*100))}>Show me new post</button>
        <p>This below one is child component</p>
        <ChildComponent id={id}/>
      </div>
    </>
  )
};

const ChildComponent=({id})=>{
  const [text, setText] = useState("")
  // console.log("id type" typeOf(id))
  useEffect(()=>{
    fetch(`https://dummyjson.com/posts/${id}`)
    .then((response)=>{
      return response.json()
    }).then((result)=> setText(result.body)).catch((error)=> console.log("error occured while fetching data", error))
  },[id])
  return(
    <>
    <div className="childContianer">
      <h4>Child component data</h4>
    <p>{text}</p>
    </div>
    </>
  )
}