import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userId:"123",
    username:"",
    email:""
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.userId=action.payload.userId,
            state.username=action.payload.username,
            state.email=action.payload.email
    }

    }
})

export const {setUser}=userSlice.actions;

export default userSlice.reducer;