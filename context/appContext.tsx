'use client'
import { ToDoType } from '@/components/Todo';
import { ScriptProps } from 'next/script';
import React, { useState } from 'react'

export interface appContextType{
    setAppState?:any,
    todos:ToDoType[]
}
const AppContext=React.createContext<appContextType>({todos:[]});

export function useAppContext(){
    return React.useContext(AppContext)
}

function AppContextProvider({children}:ScriptProps) {
  const data=[
    {id:1,done:false,title:'This is 1 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    {id:2,done:false,title:'This is 2 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    {id:3,done:true,title:'This is 3 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    {id:4,done:false,title:'This is 4 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    {id:5,done:false,title:'This is 5 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    {id:6,done:false,title:'This is 6 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
]
  const [appState, setAppState] = useState({todos:data})
  return (
    <AppContext.Provider value={{...appState,setAppState:setAppState}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider