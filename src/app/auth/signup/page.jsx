"use client";

import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function page() {

  const dispatch=useAppDispatch();
  const name=useAppSelector((state)=>state.username);

  const [ formDetails,setFormDetails]=useState({
    username:"",
    email:""
  })

  

  function handelChange(e){
    setFormDetails((prevValue)=>{
      return {...prevValue,
            [e.target.name]:e.target.value,}
    })

  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      const response=await axios.post("/api/user",formDetails);

      console.log("This is response",response.data.data);

      dispatch(
        setUser({
          userId:response.data.data.id,
          username:response.data.data.username,
          email:response.data.data.email})
        )

            
      
    } catch (error) {
      console.log(error);
      
    }
  }
  

  console.log("There is the name",name);

  
  return (
    <div>
            <h1> Signup form</h1><br />
            <label htmlFor="username"  >Username</label><br />
            <input type="text" onChange={handelChange} name="username" placeholder='enter you username' /><br />
            <label htmlFor="emial">Email</label><br />
            <input type="text" onChange={handelChange} name="email" placeholder='Enter your email'/><br /><br />c
            <button type="submit" className="bg-slate-50" onClick={handleSubmit}> Signup</button>
            <Link href="/auth/login" className="text-white">Login page</Link>
    </div>
  )
}
