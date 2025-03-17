"use client";

import axios from "axios";
import { useState } from "react";

export default function page() {

  const [ formDetails,setFormDetails]=useState({
    username:"",
    email:""
  })

  function handelChange(e){
    setFormDetails((prevValue)=>{
      return {...prevValue,
            [e.target.name]:e.target.value,}
    })

    console.log("This is form Detail",formDetails);
    
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      const response=await axios.post("/api/user",formDetails);

      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <div>
            <h1> Signup form</h1><br />
            <label htmlFor="username"  >Username</label><br />
            <input type="text" onChange={handelChange} name="username" placeholder='enter you username' /><br />
            <label htmlFor="emial">Email</label><br />
            <input type="text" onChange={handelChange} name="email" placeholder='Enter your email'/><br /><br />c
            <button type="submit" className="bg-slate-50" onClick={handleSubmit}> Signup</button>
    </div>
  )
}
