"use client";
import Footer from '@/components/custom/Footer';
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { CornerDownRight, Sparkles } from "lucide-react"; // Added Sparkles for a nice touch
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
    if (id) {
      setForDialog(false);
    }
  }, [id]);

  async function handleSubmit() {
    if (!prompt.trim()) return; // Prevent submission of empty prompts

    if (!id) {
      setForDialog(true);
    } else {
      router.push(`/workspace/123?prompt=${encodeURIComponent(prompt)}`);
    }
  }

  // Handle 'Enter' key press for submission, but 'Shift+Enter' for new line
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents adding a new line
      handleSubmit();
    }
  };

  return (
    // Main container with a subtle, premium background effect
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container relative z-10 flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center text-center max-w-3xl w-full">
          
          {username && (
            <h2 className="text-lg text-neutral-300 mb-4">
              Welcome back, {username}!
            </h2>
          )}

          {/* Animated gradient text for a modern, eye-catching headline */}
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
            From Idea to Code, Instantly
          </h1>

          <p className="text-neutral-400 mt-4 text-lg max-w-xl">
            Describe your vision. Our AI crafts the code, turning your thoughts into functional applications.
          </p>

          {/* Revamped prompt input area with interactive glow effect */}
          <div className="group relative w-full my-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-60 group-focus-within:opacity-80 transition duration-500"></div>
            <div className="relative p-3 bg-neutral-950 rounded-xl w-full flex items-start gap-2 transition-all duration-300 ring-1 ring-white/10 focus-within:ring-purple-500/50">
              <Sparkles className="h-6 w-6 text-neutral-500 mt-1.5 flex-shrink-0" />
              <textarea
                placeholder="e.g., A responsive pricing page with three tiers..."
                className="bg-transparent text-neutral-200 placeholder:text-neutral-600 outline-none resize-none w-full h-28 md:h-20 leading-relaxed"
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                value={prompt}
              ></textarea>
              <Button 
                onClick={handleSubmit} 
                disabled={!prompt.trim()}
                className="self-end bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition-colors"
              >
                <CornerDownRight />
              </Button>
            </div>
          </div>
        </div>

        <div className='absolute bottom-5'>
          <Footer />
        </div>
      </div>

      <SignupDialog forDialog={forDialog} forClosing={() => setForDialog(false)} />
    </div>
  );
}