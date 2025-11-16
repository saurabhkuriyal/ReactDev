import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {

        //console.log("here is the request",req);

        const { username, email } = await req.json();

        // console.log("here is the username",username);
        // console.log("here is the email",email);

        const user = await prisma.user.create({
            data: { username, email },
        })

        //console.log("There is the user",user);


        return NextResponse.json({ status: 200, success: true, data: user });

    } catch (error) {
        console.log("There is the error", error);
        return NextResponse.json({ status: 500, success: false, error: error.message }, { status: 500 });

    }
}