"use client";

import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className=" bg-black">
            <div className="flex justify-between mx-2 py-2 px-4 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <h1 className=" text-white text-2xl font-bold">ReactDev </h1>
            <div className="gap-2">
                <Button variant="ghost" className="mx-1 text-white">Login</Button>
                <Button variant="secondary" className="mx-1">Signup</Button>
            </div>
            </div>
        </div>
    )
}
