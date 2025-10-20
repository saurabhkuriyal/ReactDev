"use client";

export default function ProductIntro() {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden py-20">
            {/* background gradient */}
            {/* <div className="absolute"></div> */}

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image placeholder */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-[320px] h-[220px] md:w-[450px] md:h-[300px] lg:w-[520px] lg:h-[360px] rounded-2xl bg-neutral-900 border border-white/10 shadow-lg flex items-center justify-center">
                            <span className="text-neutral-600 text-sm">
                                <img src="/hero.webp" alt="image" />
                            </span>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                            Build Smarter, Launch Faster
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                            Immerse yourself in React development and bring your ideas to life
                            effortlessly. With seamless AI-powered workflows, create beautiful
                            and scalable web applications that adapt to every device.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
