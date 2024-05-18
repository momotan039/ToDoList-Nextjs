'use client'
import Card from '@/components/Card'
import { ToDoType } from '@/components/Todo'
import { appContextType, useAppContext } from '@/context/appContext'
import React,{useState,useEffect} from 'react'
import {Edit} from 'lucide-react'

interface Params{
  id:string
}
function EditTask({params}:{params:Params}) {
    const app=useAppContext()
    const [task, setTask] = useState<ToDoType>({title:'',done:false,description:''})
    const taskId=params.id;
    useEffect(() => {
      const _task=app.todos.find(f=>f.id===parseInt(taskId));
      if(_task)
      setTask(_task)
    },[taskId,app.todos])

    const editTodo=()=>{
      const _task=app.todos.find(f=>f.id===parseInt(taskId));
      if(_task)
      {
        _task.title=task.title
      _task.description=task.description
      alert("Todo Edeted successfully!")
      }
    }
    
    return (
      <div className="flex justify-center mt-12">
        <Card bg='bg-blue-200 shadow-xl shadow-blue-300/80' >
          <h1 className="text-slate-900 font-bold  text-4xl mb-2 ">
            <Edit className='inline' size={60}/> Edit Current Task
          </h1>
          <input value={task.title} onChange={(e)=>setTask({...task,title:e.target.value})} type="text" className='rounded px-1 py-1 text-blue-950 font-bold w-full' placeholder='Edit Title Todo' />
          <textarea value={task.description} onChange={(e)=>setTask({...task,description:e.target.value})} rows={8} placeholder='Edit the description' className=' rounded mt-3 px-1 text-blue-950 font-bold w-full'></textarea>
            <button onClick={editTodo} className='py-3 mt-3 w-1/3 font-bold text-white text-xl bg-slate-700 rounded transition-all hover:bg-slate-800'>Edit</button>
        </Card>
      </div>
    )
}

export default EditTask