"use Client";

import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className="flex justify-between mx-2 py-2 px-4">
            <h1 className=" text-white text-2xl font-bold">WebBuild </h1>
            <div className="gap-2">
                <Button variant="ghost" className="mx-1 text-white">Login</Button>
                <Button variant="secondary" className="mx-1">Signup</Button>
            </div>
        </div>
    )
}
