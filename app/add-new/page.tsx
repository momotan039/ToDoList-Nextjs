'use client'
import Card from '@/components/Card'
import { ToDoType } from '@/components/Todo'
import { appContextType, useAppContext } from '@/context/appContext'
import { useState,useEffect } from 'react'

function page() {
  const app=useAppContext()
  const [task, setTask] = useState<ToDoType>({title:'',done:false,description:''})
  const createTodo=()=>{
    const len=app.todos.length
    task.id=len>0?app.todos[len-1].id+1:1;
    app.setAppState((d:appContextType)=>({...d,todos:[...d.todos,task]}))
    alert("Todo added successfully!")
    setTask({title:'',done:false,description:''})
  }
  
  return (
    <div className="flex justify-center mt-12">
      <Card bg='bg-blue-200 shadow-xl shadow-blue-300/80' >
        <h1 className="text-white font-bold  text-4xl mb-2 hero__title">
          ➕Add New To Do
        </h1>
        <input value={task.title} onChange={(e)=>setTask({...task,title:e.target.value})} type="text" className='rounded px-1 py-1 text-blue-950 font-bold w-full' placeholder='Enter new Todo' />
        <textarea value={task.description} onChange={(e)=>setTask({...task,description:e.target.value})} rows='8' placeholder='Enter here a description' className=' rounded mt-3 px-1 text-blue-950 font-bold w-full'></textarea>
          <button onClick={createTodo} className='py-3 mt-3 w-1/3 font-bold text-white text-xl bg-slate-700 rounded transition-all hover:bg-slate-800'>Add</button>
      </Card>
    </div>
  )
}

export default page