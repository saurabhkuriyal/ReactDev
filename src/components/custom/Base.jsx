"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Base() {
    return (
        <footer className="w-full border-t border-white/10 bg-black text-neutral-400">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Side - Nav Links */}
                <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
                    <Link
                        href="/"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-white transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        href="/features"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Features
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Right Side - Social Links */}
                <div className="flex items-center gap-5">
                    <a
                        href="https://www.linkedin.com/in/saurabh-kuriyal-075a95238/"
                        target="_blank"
                        className="p-2 rounded-lg bg-neutral-950 hover:bg-purple-600/20 hover:text-white transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://x.com/Kuriyal7"
                        target="_blank"
                        className="p-2 rounded-lg bg-neutral-950 hover:bg-purple-600/20 hover:text-white transition-colors"
                    >
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/saurabhkuriyal"
                        target="_blank"
                        className="p-2 rounded-lg bg-neutral-950 hover:bg-purple-600/20 hover:text-white transition-colors"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href={`mailto:sourabhkuriyal77@gmail.com`}
                        target="_blank"
                        className="p-2 rounded-lg bg-neutral-950 hover:bg-purple-600/20 hover:text-white transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>

            {/* Bottom small text */}
            <div className="text-center text-xs text-neutral-600 border-t border-white/5 py-3">
                © {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
        </footer>
    );
}
