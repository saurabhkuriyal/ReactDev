"use client";
import { CornerDownRight, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Loader from "./Loader";
import ThinkingText from "./ThinkingText";

export default function ChatView(props) {
    const [prompt, setPrompt] = useState("");
    const [steps, setSteps] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        setActive(true);
        setSteps([]);

        if (props.steps.length === 0) return;

        let i = 0;
        const addStep = () => {
            if (i < props.steps.length - 1) {
                setSteps((prev) => [...prev, props.steps[i]]);
                i++;
                setTimeout(addStep, 1500);
            }
            if (i === props.steps.length - 1) setActive(false);
        };
        addStep();
    }, [props.steps]);

    return (
        <div className="relative h-[87vh] flex flex-col justify-between gap-3">
            {/* Chat messages */}
            <div
                className="flex-1 overflow-y-auto px-2 py-3 space-y-3
                   scrollbar-thin scrollbar-thumb-slate-700/60 scrollbar-track-transparent
                   hover:scrollbar-thumb-slate-500/70
                   scrollbar-thumb-rounded-full"
            >
                {/* User initial message */}
                {props.data && (
                    <div className="self-start max-w-[90%] bg-gradient-to-r from-purple-700/40 to-indigo-700/30 border border-white/10 text-white px-4 py-2 rounded-xl shadow-md">
                        {props.data}
                    </div>
                )}

                {/* Thinking / loader */}
                {active && <ThinkingText />}

                {/* AI steps */}
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="flex items-start gap-2 bg-neutral-900/70 border border-white/10 text-neutral-200 px-4 py-2 rounded-xl shadow-sm"
                    >
                        {active && <Loader className="mt-1" />}
                        <p className="whitespace-pre-wrap text-sm">
                            {String(step).replace(/^\//, "")}
                        </p>
                    </div>
                ))}
            </div>

            {/* Input box */}
            <div className="relative bg-neutral-950/70 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-md">
                <div className="flex gap-2 items-end">
                    <textarea
                        placeholder="Write your thoughts here..."
                        className="flex-1 bg-transparent text-white placeholder:text-neutral-500 outline-none resize-none h-16 px-2 scrollbar-none"
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                    />
                    {prompt.trim() && (
                        <Button
                            onClick={() => {
                                props.forHandlingSubmit(prompt);
                                setPrompt("");
                            }}
                            className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-xl"
                        >
                            <CornerDownRight />
                        </Button>
                    )}
                </div>

                {/* Bottom bar with icon */}
                <div className="flex justify-end mt-2">
                    <Link className="w-4 h-4 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
