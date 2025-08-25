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

  useEffect(() => {
    if (props.data && Object.keys(props.data).length > 0) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        ...props.data,
      }));
      setLoading(false);
    }
  }, [props.data]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Tabs */}
      <div className="flex gap-3 p-2 w-full h-12">
        <h2
          className={`text-sm cursor-pointer px-3 py-1 rounded-full transition ${
            active ? "bg-blue-500 text-white" : "text-white/70 hover:text-white"
          }`}
          onClick={() => setActive(true)}
        >
          Code
        </h2>
        <h2
          className={`text-sm cursor-pointer px-3 py-1 rounded-full transition ${
            !active ? "bg-blue-500 text-white" : "text-white/70 hover:text-white"
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
            <span className="text-3xl md:text-4xl font-bold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-breath">
              Generating...
            </span>
          </div>
        )}
      </div>

      {/* Breathing animation */}
      <style jsx>{`
        @keyframes breath {
          0%, 100% { opacity: 0.55; transform: scale(0.98); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
          50% { opacity: 1; transform: scale(1.02); filter: drop-shadow(0 0 18px rgba(99,102,241,0.35)); }
        }
        .animate-breath { animation: breath 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
