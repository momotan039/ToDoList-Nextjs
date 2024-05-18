'use client'
import React from 'react'
import Card from './Card'
import { appContextType, useAppContext } from '@/context/appContext'
import Link from 'next/link'

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
        <input title='check'  checked={task.done} onChange={changeStatus} type="checkbox" className='absolute top-6 right-24 w-6 h-6 cursor-pointer peer/check' />
        <label  className="peer-checked/check:text-amber-400 peer-checked/check:font-bold peer-checked/check:block text-amber-400/50">Done</label>
        <button title='Remove' onClick={deltedTask} className='absolute top-6 right-6 w-6 h-6 bg-white'>❌</button>
        <Link title='Edit' className='absolute top-6 right-14 w-6 h-6 bg-white' href={'/edit-todo/'+task.id}>📝</Link>
        <h1 className={`text-white   font-bold ${task.done ? 'line-through' : ''}  text-3xl `}>{task.title}</h1>
        <p className="text-amber-300 font-bold mt-4">{task.description}</p>
      </Card>
    </div>
  )
}

export default Todo