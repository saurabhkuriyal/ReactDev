"use client";
import { useAppSelector } from "@/lib/hooks";

export default function page() {

    const name=useAppSelector((state)=>state.username);

    //console.log("This is the name", name);
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <h1 className="text-white"> Hello from Login Page--{name}</h1>
        </div>
    )
}
