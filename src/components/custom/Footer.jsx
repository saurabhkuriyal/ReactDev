'use client';
import { useRouter } from 'next/navigation';
import { Button } from "../ui/button";

export default function Footer(){

    const router = useRouter();

    function handleClick(e){
        router.push('/UnderDevelopment');
    }


    return <>
        <div >
        <Button 
            variant="ghost"
            id="portfolio"
            className="mx-1 text-white border border-r-2"
            onClick={handleClick}>
                Create Portolio Website
        </Button>
        <Button variant="ghost" className="mx-1 text-white border border-r-2">Create a todo App</Button>
        <Button variant="ghost" className="mx-1 text-white border border-r-2">Create a Branding Page</Button>
        </div>
        
    </>
}