'use client'
import React from 'react'
import Card from './Card'
import { appContextType, useAppContext } from '@/context/appContext'
import Link from 'next/link'
import {X,Edit,SquareCheckBig,Square} from 'lucide-react'

export interface ToDoType {
  id?: number,
  title: string,
  description: string,
  done: boolean
}
export interface ToDoProps {
  task: ToDoType
}

function Todo({ task }: ToDoProps) {
  const app=useAppContext()
  const changeStatus=()=>{
    task.done=!task.done;
    app.setAppState((s:appContextType)=>({...s,todos:app.todos}))
  }
  const deltedTask=()=>{
    app.setAppState((s:appContextType)=>({...s,todos:app.todos.filter(f=>f.id!=task.id)}))
  }
  return (
    <div className="transition duration-300  p-2 w-full  md:w-2/4 xl:w-1/4 relative ">
      <Card bg={`shadow-md shadow-red-100/70 bg-gradient-to-r ${task.done ? 'from-teal-700 ' : 'from-blue-700'}`} padding='py-4 px-3'>
        <button title='Remove' onClick={deltedTask} className='absolute top-6 right-6 w-6 h-6 bg-white'><X color='red'/></button>
        <Link title='Edit' className='absolute top-6 right-14 w-6 h-6 bg-white' href={'/edit-todo/'+task.id}><Edit color='black'/></Link>
        <button title='Check' onClick={changeStatus} className='absolute top-6 left-4 w-6 h-6 bg-white'>{task.done?<SquareCheckBig color='#123123'/>:<Square/>}</button>
        <h1 className={`text-white mt-6  font-bold ${task.done ? 'line-through' : ''}  text-3xl `}>{task.title}</h1>
        <p className="text-amber-300 font-bold mt-4">{task.description}</p>
      </Card>
    </div>
  )
}

export default Todo