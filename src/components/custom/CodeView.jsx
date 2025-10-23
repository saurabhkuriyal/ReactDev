"use client";
import LookUp from "@/data/LookUp";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";

export default function CodeView(props) {
  const [active, setActive] = useState(true);
  const [files, setFiles] = useState(LookUp?.DEFAULT_FILE);
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState("Generating...");

  useEffect(() => {

    cycleMessages();
    if (props.data && Object.keys(props.data).length > 0) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        ...props.data,
      }));
      setLoading(false);
    }
  }, [props.data]);

  //for messages due to loading
  const messages = [
    "on Processing",
    "still working",
    "need a bit more time",
    "almost there",
    "wrapping up",
    "just a moment",
  ]

  function cycleMessages() {

    messages.forEach((msg, index) => {

      setTimeout(() => {
        setLoadingMessages(msg);
      }, index * 5000); // Change message every 4 seconds
    })
  }


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Tabs */}
      <div className="flex gap-3 p-2 w-full h-12">
        <h2
          className={`text-sm cursor-pointer px-3 py-1 rounded-full transition ${active ? "bg-blue-500 text-white" : "text-white/70 hover:text-white"
            }`}
          onClick={() => setActive(true)}
        >
          Code
        </h2>
        <h2
          className={`text-sm cursor-pointer px-3 py-1 rounded-full transition ${!active ? "bg-blue-500 text-white" : "text-white/70 hover:text-white"
            }`}
          onClick={() => setActive(false)}
        >
          Preview
        </h2>
      </div>

      {/* Sandpack area with blur overlay when loading */}
      <div className="relative">
        <SandpackProvider
          files={files}
          options={{ externalResources: ["https://unpkg.com/@tailwindcss/browser@4"] }}
          customSetup={{ dependencies: { ...LookUp?.DEPENDANCY } }}
          template="react"
          theme="dark"
        >
          <SandpackLayout>
            {active ? (
              <>
                <SandpackFileExplorer style={{ height: "80vh" }} />
                <SandpackCodeEditor style={{ height: "80vh" }} />
              </>
            ) : (
              <SandpackPreview style={{ height: "80vh" }} showNavigator />
            )}
          </SandpackLayout>
        </SandpackProvider>

        {/* Overlay that blurs the live editor/preview behind it */}
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
            <div className="flex flex-col items-center gap-3">
              {/* Small attractive loader (bouncing dots) */}
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0s" }}></span>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>

              {/* Sliding/Fading "CREATING" */}
              <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade">
                {loadingMessages}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Breathing animation */}
      <style jsx>{`
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  .animate-typing {
    animation: typing 2s steps(10, end) infinite alternate;
  }
`}</style>
    </div>
  );
}
