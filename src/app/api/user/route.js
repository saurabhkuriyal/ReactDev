import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {

        const {username,email}= await req.json();

        const user= await prisma.user.create({
            data:{username,email},
        })

        console.log("There is the user",user);
        
        
        return NextResponse.json({status:200},{success:true,data:user});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({status:500},{success:false,error});
        
    }
}