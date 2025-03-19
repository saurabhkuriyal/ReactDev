"use client";

import { Button } from "@/components/ui/button";
//import axios from "axios";
import { useAppSelector } from "@/lib/hooks";
import { CornerDownRight, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignupDialog from "./SignupDialog";

export default function Hero() {

  const router = useRouter();

  const [prompt, setPrompt] = useState("");

  const [forDialog,setForDialog]=useState(true);

  const id=useAppSelector((state)=>state.userId)

  async function handleSubmit() {
    //router.push("/workspace/123");
    if(id===""){
      setForDialog(true);
    }else{
      setForDialog(false);
      //router.push(`/workspace/123?prompt=${encodeURIComponent(prompt)}`);
    }
    
  }

  function forClosing(e) {
    setForDialog(false);
  }

  return (


    <div className="container">

      <div className="flex flex-col justify-center items-center min-h-screen">

        <h1 className="text-white text-4xl px-2 py-5 mx-4">Build anything you want...</h1>
        <em className="text-white px-2 pb-5 mx-4">Harness the power of LLM in coding and development</em>

        <div className=" p-3 border rounded-xl max-w-2xl w-full bg-black">

          <div className="flex gap-2">
            <textarea placholder="Enter you text here"
              className="bg-black text-white outline-none resize-none w-full h-32 max-h-56"
              placeholder="Write your thoughts here"
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            {prompt !== "" ? <Button onClick={handleSubmit}><CornerDownRight /></Button> : null}

          </div>
          <div>
            <Link style={{ color: "white" }} />
          </div>
        </div>
      </div>

      <SignupDialog forDialog={forDialog} forClosing={forClosing}/>

    </div>
  );
}
