import { createContext } from "react";
import {useState} from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [status, setStates]=useState(true);

    const Login=()=>{
        setStates(true);
    }

    const LogOut=()=>{
        setStates(false);
    }


  return  <AuthContext.Provider value={{status,Login,LogOut}} >{children}</AuthContext.Provider>
}