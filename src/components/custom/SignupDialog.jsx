"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "../ui/button";


export default function SignupDialog(props) {

    const dispatch=useAppDispatch();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log("Google Access Token:", tokenResponse.access_token);

            // Use the access token to fetch user profile
            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v2/userinfo",
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
            );

            console.log("User Info:", userInfo.data);

            const payload = {
                username: userInfo.data.name,
                email: userInfo.data.email
            }

            try {

                const response = await axios.post("/api/user", payload);

                console.log("Response from user", response);
                dispatch(
                    setUser({
                        userId: response.data.data.id,
                        username: response.data.data.username,
                        email: response.data.data.email
                    })
                )

            } catch (error) {
                console.log(error);

            }



        },
        onError: errorResponse => console.log("Login Error:", errorResponse),
    });


    return (
        <div><Dialog open={props.forDialog} onOpenChange={(e)=>{props.forClosing(e)}}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Just a step far..</DialogTitle>
                    <DialogDescription className="flex justify-center items-center">
                        <Button className="bg-blue-600" onClick={googleLogin}>Sign in with google</Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        </div>
    )
}
