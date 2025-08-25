"use client";
import ChatView from "@/components/custom/ChatView";
import CodeView from "@/components/custom/CodeView";
import Header from "@/components/custom/Header";
import Prompt from "@/data/Prompt";
import { steps } from "@/data/StepsForFIle";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const data = searchParams.get("prompt");
  const [result, setResult] = useState({});
  const [newsteps, setSteps] = useState([]);

  // Load initial response
  useEffect(() => {
    if (data) handleSubmit(data);
  }, [data]);

  async function handleSubmit(prompt) {
    setSteps((prevSteps) => [...prevSteps, ...steps]);

    try {
      const PROMPT = Prompt.CODE_GEN_PROMPT + " " + prompt;
      const response = await axios.post("/api/AI-response", { Prompt: PROMPT });

      setResult((prevFiles) => ({
        ...prevFiles,
        ...response.data.code.files,
      }));

      setSteps((prevSteps) => [
        ...prevSteps,
        ...response.data.code.generatedFiles,
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* background gradient (same as Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>

      {/* content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="border-b border-white/10 shadow-md">
          <Header />
        </div>

        <div className="flex-1 py-6 px-4 md:px-8 grid md:grid-cols-4 grid-cols-1 gap-6">
          {/* Chat section */}
          <div className="col-span-1">
            <ChatView
              data={data}
              steps={newsteps}
              forHandlingSubmit={handleSubmit}
            />
          </div>

          {/* Code section */}
          <div className="col-span-3">
            <CodeView data={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
