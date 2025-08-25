// import { chatSession } from "@/configs/AiModel";
import { AiResponse } from "@/configs/AiModel";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        
        const {Prompt}=await req.json();

        const result = await AiResponse(Prompt);

        console.log("reached here");
        
        const data=result.candidates[0].content.parts[0].text;
        console.log("This is response------",data);

        return NextResponse.json({success:true,
            code:JSON.parse(data)
            }
        );


    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,error})
    }
}