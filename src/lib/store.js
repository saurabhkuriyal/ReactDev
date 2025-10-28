import userReducer from "@/lib/features/userSlice";
import { configureStore } from '@reduxjs/toolkit';

//redux global store
export const makeStore = () => {
    return configureStore({
        reducer: userReducer
    })
}