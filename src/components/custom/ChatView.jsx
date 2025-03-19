"use client"
import { CornerDownRight, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Loader from "./Loader";
import ThinkingText from "./ThinkingText";

export default function ChatView(props) {

    const [prompt, setPrompt] = useState("");
    const [steps, setSteps] = useState([]);
    const [active,setActive]=useState(true);


    useEffect(() => {

        setActive(true);
        
        setSteps([]); // Reset steps when new steps are received

        if (props.steps.length === 0) return;

        let i = 0;

        const addStep = () => {
            if (i < props.steps.length-1) {
                setSteps((prev) => [...prev, props.steps[i]]);
                i++;
                setTimeout(addStep, 1500); // Call itself after 1.5 seconds
            }

            if(i===props.steps.length-1){
                setActive(false);
            }
        };

        addStep(); // Start the recursive function
    }, [props.steps]);



    return (

        <div>
            <div className="relative h-[87vh] flex flex-col justify-between gap-3">

                <div className="flex-1 mx-1 my-2 overflow-y-scroll">
                    <h2 className="text-white px-3 py-2 bg-gray-800 rounded-lg flex flex-col justify-start px-2 py-1">{props.data}</h2>
                    {active &&<ThinkingText/>}
                    {
                        steps.map((step,i) => (
                            <div key={i} className="bg-slate-900 rounded-lg m-2 flex gap-2">
                            {active && <Loader className="p-1"/>}
                            <h1 className="text-white mx-2">{String(step).replace(/^\//, "")}</h1>
                            </div>
                        ))
                    }
                </div>

                {/* input */}
                <div className=" p-3 border rounded-xl max-w-2xl w-full bg-black">

                    <div className="flex gap-2">
                        <textarea placholder="Enter you text here"
                            className="bg-black text-white outline-none resize-none w-full h-15"
                            placeholder="Write your thoughts here"
                            onChange={(e) => setPrompt(e.target.value)}
                        ></textarea>
                        {prompt !== "" ? <Button onClick={() => { props.forHandlingSubmit(prompt) }}><CornerDownRight /></Button> : null}

                    </div>
                    <div>
                        <Link style={{ color: "white" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
