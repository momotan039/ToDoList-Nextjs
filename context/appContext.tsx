'use client'
import { ScriptProps } from 'next/script';
import React, { useState } from 'react'

interface appContextType{
    setAppState:any,
    name?:string
}
const AppContext=React.createContext<appContextType>({});

export function useAppContext(){
    return React.useContext(AppContext)
}

function AppContextProvider({children}:ScriptProps) {
  const [appState, setAppState] = useState({name:'mohammed'})
  return (
    <AppContext.Provider value={{...appState,setAppState:setAppState}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider