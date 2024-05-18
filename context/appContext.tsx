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
  const data = [
    { id: 1, done: false, title: 'Grocery Shopping', description: 'Buy milk, eggs, bread, and vegetables from the supermarket.' },
    { id: 2, done: true, title: 'Morning Jog', description: 'Run 5 kilometers in the park and stretch afterwards.' },
    { id: 3, done: false, title: 'Project Meeting', description: 'Attend the project meeting at 10 AM and discuss milestones.' },
    { id: 4, done: false, title: 'Read a Book', description: 'Read at least 50 pages of the current book.' },
    { id: 5, done: true, title: 'Call the Plumber', description: 'Schedule an appointment with the plumber to fix the kitchen sink.' },
    { id: 6, done: false, title: 'Workout Session', description: 'Complete a 30-minute workout session at the gym.' },
    { id: 7, done: false, title: 'Pay Bills', description: 'Pay the electricity and internet bills online.' },
    { id: 8, done: true, title: 'Write Blog Post', description: 'Draft and publish a blog post about the latest tech trends.' },
    { id: 9, done: false, title: 'Plan Weekend Trip', description: 'Plan the itinerary and book accommodations for the weekend trip.' },
    { id: 10, done: false, title: 'Organize Closet', description: 'Sort and organize clothes in the closet and donate old items.' },
  ];
  const [appState, setAppState] = useState({todos:data})
  return (
    <AppContext.Provider value={{...appState,setAppState:setAppState}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider