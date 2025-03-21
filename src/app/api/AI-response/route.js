import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        
        const {Prompt}=await req.json();

        const result = await chatSession.sendMessage(Prompt);

        console.log("reached here");
        
        const data=result.response.text();
        //console.log("This is response",result.response.text());

        return NextResponse.json({success:true,
            code:JSON.parse(data)
            }
        );


    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,error})
    }
}