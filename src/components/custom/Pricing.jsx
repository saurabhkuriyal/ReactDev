"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "0 INR",
            period: "/mo",
            features: [
                "limited tokens",
                "limited downloads",
                "Community support",
                "Help center access",
            ],
            cta: "Sign up for free",
            variant: "outline",
        },
        {
            name: "Pro",
            price: "159 INR",
            period: "/mo",
            features: [
                "Abundant tokens",
                "Unlimited downloads",
                "Priority email support",
                "Help center access",
            ],
            cta: "Get started",
            variant: "default",
        },
        {
            name: "Enterprise",
            price: "599 INR",
            period: "/mo",
            features: [
                "20 users included",
                "Everything in Pro",
                "Phone and email support",
                "Help center access",
            ],
            cta: "Contact us",
            variant: "default",
            highlight: true,
        },
    ];

    return (
        <section className="relative w-full bg-black py-20 text-white" id="pricing">
            <div className="absolute " />

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Pricing
                    </h2>
                    <p className="text-neutral-400 mt-2">
                        Choose the plan that works best for you.
                    </p>
                </div>

                {/* Pricing grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl border ${plan.highlight
                                    ? "bg-neutral-900 border-purple-600 shadow-lg"
                                    : "bg-neutral-950 border-white/10"
                                } p-8 flex flex-col justify-between hover:scale-105 transition-transform`}
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-neutral-400 ml-1">{plan.period}</span>
                                </div>
                                <ul className="mt-6 space-y-2 text-neutral-400 text-sm">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="/UnderDevelopment" className="text-sm font-medium text-gray-300 hover:text-white transition">
                                    <Button
                                variant={plan.variant}
                                className={`mt-8 w-full ${plan.highlight
                                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                                        : ""
                                    }`}
                            >
                                {plan.cta}
                            </Button>                
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
