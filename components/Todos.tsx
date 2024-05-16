import React from 'react'
import Todo from './Todo'

export interface TodoType{
    title:string,
    description:string
}
function Todos({todos}:{todos:Array<TodoType>}) {
  return (
    <div className="bg-gray-800 flex flex-wrap">
    {todos.map((t,i)=>{
        return <Todo key={i} title={t.title} description={t.description}/>
    })}
  </div>
  )
}

export default Todos