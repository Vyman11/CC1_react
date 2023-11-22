import React from 'react'
import { createContext, useState } from "react";
export const LangContext=createContext();
export default function Context({children}) {
    const[lang,setLang]=useState("EN")
  return (
    <LangContext.Provider value={{lang,setLang}}>
      {children}
    </LangContext.Provider>
  )
}
