"use client";
import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import Header from "@/components/custom/Header";
import Prompt from "@/data/Prompt";
import { steps } from "@/data/StepsForFIle";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function page() {

  const searchParams = useSearchParams();
  const data = searchParams.get("prompt");
  let [result,setResult]=useState({});
  let [newsteps,setSteps]=useState([]);

  //console.log("This is data", data);

  //after getting user feedback
  useEffect(()=>{

    handleSubmit(data);
  },[])
  // for handling Submit
  async function handleSubmit(prompt) {

    setSteps(prevSteps=>[
      ...steps
    ])

    try {
      
        const PROMPT=Prompt.CODE_GEN_PROMPT+" "+prompt;
        // console.log("-------",PROMPT);
        
        
        const response=await axios.post("/api/AI-response",
            {
                Prompt:PROMPT
            });

        console.log("This is response from backend",response.data.code);

        console.log("This is response for files",response.data.code.files);

        setResult(prevFiles => ({
          
          ...prevFiles, // Keep previous files
          ...response.data.code.files, // Merge new files
        }));

        setSteps(prevSteps=>[
          ...prevSteps,
          ...response.data.code.generatedFiles,
        ])

        console.log("Result is ",newsteps);
        
        

    } catch (error) {
        console.log(error);

    }
}
  

useEffect(() => {
  console.log("Updated result in Workspace:", result);
}, [result]);

  return (
    <div>
      <Header/>
      <div className="py-3 px-4 grid md:grid-cols-4 grid-cols-1 gap-7">
        <div className="col-span-1 bg-black rounded-lg ">
          <ChatView data={data} steps={newsteps} forHandlingSubmit={handleSubmit}/>
        </div>
        <div className="col-span-3">
          <CodeView data={result}/>
        </div>
        
      </div>
    </div>
  )
}
