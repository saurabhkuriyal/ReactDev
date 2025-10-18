"use client";


export default function About() {
    return (
        <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>

            <div className="container relative z-10 flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-20">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-6">
                    About Us
                </h1>

                {/* Subheading */}
                <p className="text-lg text-neutral-400 text-center max-w-3xl mb-12">
                    We believe turning ideas into functional, production-ready websites
                    should be effortless. That’s why we built a platform where your words
                    become code, instantly.
                </p>

                {/* Content sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
                    <div className="p-6 rounded-2xl bg-neutral-950/60 ring-1 ring-white/10 hover:ring-purple-500/40 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            Our Mission
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Our mission is simple: empower creators, developers, and
                            businesses by removing the technical barriers of web development.
                            With AI-driven code generation, you can focus on creativity while
                            we handle the complexity.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-950/60 ring-1 ring-white/10 hover:ring-purple-500/40 transition-all">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            How It Works
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Just type in a prompt describing the website you envision — whether
                            it’s a portfolio, landing page, or e-commerce store. Our system
                            instantly translates your ideas into elegant, responsive React
                            websites ready to deploy.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-950/60 ring-1 ring-white/10 hover:ring-purple-500/40 transition-all md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            Why Choose Us?
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            We’re redefining how people build for the web. Traditional
                            development is powerful but time-consuming — we merge AI with the
                            best of React to give you **speed, flexibility, and quality**.
                            Whether you’re a beginner, a designer, or a developer looking to
                            save time, our platform adapts to your needs.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}
