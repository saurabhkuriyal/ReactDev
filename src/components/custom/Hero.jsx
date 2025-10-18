"use client";
import Footer from '@/components/custom/Footer';
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { CornerDownRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignupDialog from "./SignupDialog";

export default function Hero() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [forDialog, setForDialog] = useState(false);

  const id = useAppSelector((state) => state.userId);
  const username = useAppSelector((state) => state.username);

  useEffect(() => {
    if (id) setForDialog(false);
  }, [id]);

  async function handleSubmit() {
    if (!prompt.trim()) return;
    if (!id) {
      setForDialog(true);
    } else {
      router.push(`/workspace/123?prompt=${encodeURIComponent(prompt)}`);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

      <div className="container relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6">
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
          
          {username && (
            <h2 className="text-sm sm:text-base text-neutral-300 mb-3">
              Welcome back, {username}!
            </h2>
          )}

          {/* Responsive headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 leading-tight">
            From Idea to Code, Instantly
          </h1>

          <p className="text-neutral-400 mt-4 text-base sm:text-lg max-w-xl">
            Describe your vision. Our AI crafts the code, turning your thoughts into functional applications.
          </p>

          {/* Prompt input */}
          <div className="group relative w-full my-8 sm:my-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-60 group-focus-within:opacity-80 transition duration-500"></div>
            
            <div className="relative p-3 bg-neutral-950 rounded-xl flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-2 transition-all duration-300 ring-1 ring-white/10 focus-within:ring-purple-500/50">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-500 mt-1 sm:mt-1.5 flex-shrink-0" />
              
              <textarea
                placeholder="e.g., A responsive pricing page with three tiers..."
                className="bg-transparent text-neutral-200 placeholder:text-neutral-600 outline-none resize-none w-full h-28 sm:h-20 text-sm sm:text-base leading-relaxed"
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                value={prompt}
              />
              
              <Button
                onClick={handleSubmit}
                disabled={!prompt.trim()}
                className="self-end sm:self-auto bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition-colors"
              >
                <CornerDownRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer pinned at bottom */}
        <div className="absolute bottom-3 sm:bottom-5">
          <Footer />
        </div>
      </div>

      <SignupDialog forDialog={forDialog} forClosing={() => setForDialog(false)} />
    </div>
  );
}
