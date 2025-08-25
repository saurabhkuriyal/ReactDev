"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function SignupDialog(props) {
    const dispatch = useAppDispatch();
    const [mounted, setMounted] = useState(false);

    // ✅ Fix hydration error by rendering only on client
    useEffect(() => {
        setMounted(true);
    }, []);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log("Google Access Token:", tokenResponse.access_token);

            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v2/userinfo",
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
            );

            console.log("User Info:", userInfo.data);

            const payload = {
                username: userInfo.data.name,
                email: userInfo.data.email,
            };

            try {
                const response = await axios.post("/api/user", payload);

                console.log("Response from user", response);
                dispatch(
                    setUser({
                        userId: response.data.data.id,
                        username: response.data.data.username,
                        email: response.data.data.email,
                    })
                );
            } catch (error) {
                console.log("here is the error");
                console.log(error);
            }
        },
        onError: (errorResponse) => console.log("Login Error:", errorResponse),
    });

    // ✅ Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) return null;

    return (
        <Dialog open={props.forDialog} onOpenChange={(e) => props.forClosing(e)}>
            <DialogContent className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 rounded-2xl shadow-2xl max-w-md mx-auto">
                <DialogHeader className="space-y-4">
                    {/* Title */}
                    <div className="flex justify-center items-center">
                        <DialogTitle className="text-2xl font-semibold tracking-wide">
                            Just a step away . . .
                        </DialogTitle>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <DialogDescription className="text-slate-400 text-center text-sm">
                            Sign in securely with Google to continue
                        </DialogDescription>

                        {/* Button */}
                        <Button
                            onClick={googleLogin}
                            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 
            hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 
            text-white font-medium px-6 py-3 rounded-xl shadow-lg 
            transition-all duration-300 hover:scale-[1.03]"
                        >
                            <span className="mr-2">🔑</span> Sign in with Google
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
