import React from 'react'
import Todo, { ToDoType } from './Todo'


function Todos({ todos }: { todos: Array<ToDoType> }) {
  const doneTasks = todos.filter(f => f.done)
  const inProgoresTasks = todos.filter(f => !f.done)
  return (
    <>
      {
        inProgoresTasks.length>0? <>
          <h1 className='divide-red-50 text-white font-bold text-2xl divide-y-2 divide-white'>In Progress Tasks </h1>
          <div className="bg-gray-800 flex flex-wrap">
            {todos.filter(f=>!f.done).map((t, i) => {
              return <Todo key={t.id} task={t} />
            })}
          </div>
        </>
          :null
      }

      {
        doneTasks.length >0? <>
          <h1 className='divide-red-50 text-white font-bold text-2xl'>Done Tasks </h1>
          <div className="bg-gray-800 flex flex-wrap">
            {todos.filter(f => f.done).map((t, i) => {
              return <Todo key={t.id} task={t} />
            })}
          </div>
        </>
        :null
      }
    </>
  )
}

export default Todos