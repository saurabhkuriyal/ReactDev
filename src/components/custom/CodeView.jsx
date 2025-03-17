"use client"
import LookUp from "@/data/LookUp";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";

export default function CodeView(props) {

  const [active,setActive]=useState(true);
  const [files,setFiles]=useState(LookUp?.DEFAULT_FILE)
  //console.log("this is props.data form outside of useEffect",files);
  

  useEffect(() => {
    if (props.data) {
      //console.log("This is props.Data",props.data);
      
      setFiles(prevFiles => ({
        ...prevFiles,
        ...props.data // Ensure props.data is an object with the correct structure
      }));
    }
  }, [props.data]); 

  
  

  return (
    <div className="">
    
    <div className="flex gap-3 p-2 bg-gray-950 w-full h-10">
      <h2 className={`text-sm cursor-pointer p-1 rounded-full ${active ?`text-white bg-blue-500`:` text-white`} `} onClick={()=>setActive(true)}>Code</h2>
      <h2 className={`text-sm cursor-pointer p-1 rounded-full ${!active ?`text-white bg-blue-500`:` text-white`} `} onClick={()=>setActive(false)}>Preview</h2>
    </div>
    <SandpackProvider 
    files={files}
    options={{
      externalResources:['https://unpkg.com/@tailwindcss/browser@4']
    }}
    customSetup={{
      dependencies:{
        ...LookUp?.DEPENDANCY
      }
    }}
    template="react" theme={'dark'}>
    <SandpackLayout>
    {active ?<>
      <SandpackFileExplorer style={{height:"80vh"}}/>
      <SandpackCodeEditor style={{height:"80vh"}}/>
    </>:<>
    <SandpackPreview style={{height:"80vh"}} showNavigator={true}/>
    </>
      
    }
    
      
    </SandpackLayout>
  </SandpackProvider>
    </div>
  )
}
