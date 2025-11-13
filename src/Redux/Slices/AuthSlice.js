import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name : "auth",
    initialState : false, 
    reducers : {
        login : (state) => {
            return true;
        }, 
        logout : (state) => {
            return false;
        }
    }
})

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;