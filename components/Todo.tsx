'use client'
import React from 'react'
import Card from './Card'

 interface ToDoProps{
    title:string,
    description:string
}
function Todo({title,description}:ToDoProps) {
  return (
    <div className="p-2 w-1/4">
      <Card bg='bg-blue-700' padding='py-4 px-3' height='h-36'>
        <h1 className="text-white font-bold  text-3xl">{title}</h1>
        <p className="text-amber-300 font-bold mt-4">{description}</p>
      </Card>
    </div>
  )
}

export default Todo