"use client"
import { useSelectedLayoutSegments } from "next/navigation";
import React, { useState } from "react";

const page = () => {
    const[title,settitle]=useState("")
    const[desk,setdesk]=useState("")
    const[maintask,setmaintask]=useState([])

  const deletehandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
    const submithandler = (e)=>{
        e.preventDefault()
        // console.log(title)
        // console.log(desk)
        setmaintask([...maintask,{title,desk }])
        settitle("")
        setdesk("")

    }
let randertask = <h2>No Task Avilable</h2>
if (maintask.length>0) {
  randertask= maintask.map((t,i)=>{
    return(
      
          <div className=" flex justify-between  mb-5 w-4/2">
          <h5 className="  text-xl font-semibold ">{t.title}</h5>
          <h6 className="  text-x2 font-semibold "><p className="w-3/3">{t.desk}</p></h6>
          <button 
          onClick={()=>{
            deletehandler(i)
          }}
          className=" rounded  px-4 py-2.5 bg-black  text-white  ">Delete</button>
        
      </div>
     
    )
  })
  
}

  return(
    <>
      <h1 className="bg-white  bg-opacity-50 text-black items-center text-5xl   " > My Todo list</h1>
      <form onSubmit={submithandler}>
        <input value={title} type="text"  
               placeholder="Enter Task Here"  
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        className=" border-2 text-3x placeholder-black bg-white  bg-opacity-50 text-black items-center  border-zinc-800 m-5 px-4 py-2" /> 
        <input value={desk} type="text" placeholder="Enter Description  here" 
        onChange={(e)=>{
          setdesk(e.target.value)
        }}
        className=" border-2 text-3x bg-white placeholder-black  bg-opacity-50 text-black items-center  border-zinc-800 m-5 px-4 py-2" /> 
        <button  className="  bg-black text-white px-4 py-2 text-1xl font-bold rounded m-5 "> Add Task</button>
      </form>
        <hr />
        <div className=" bg-white  bg-opacity-25 text-black items-center  p-8"  >
          <ul>
            {randertask}
          </ul>
        </div>
    </>
  )
}
export default page