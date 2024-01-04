"use client";
import { useToast } from "@/components/ui/use-toast";
import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext<any | null>(null);

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("");
  const {toast} = useToast()
  useEffect(() => {
    const preToken = localStorage.getItem('token')
    if(preToken === null) setToken('');
    else setToken(preToken);
  },[])
  const deleteToken = () => {
    toast({description:'LoggdOut Successfully'})
    localStorage.removeItem('token');
    setToken('');
  }
  const updateToken = (newToken:string) => {
    localStorage.setItem('token',newToken);
    setToken(newToken)
  }
  return <TokenContext.Provider value={{token,updateToken,deleteToken}}>{children}</TokenContext.Provider>;
};
