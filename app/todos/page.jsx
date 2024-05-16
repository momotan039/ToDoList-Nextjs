'use client'
import React, { useEffect } from 'react'
import Todos from '@/components/Todos'
import { useAppContext } from '@/context/appContext'

function page() {
    const todos=[
        {title:'This is 1 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 2 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 3 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 4 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 5 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 6 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 7 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 8 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
        {title:'This is 9 ToDo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magni.'},
    ]
   const ctx=useAppContext()
   console.log(ctx);
  return (
    <div className="m-5">
    <Todos todos={todos}/>
  </div>
  )
}

export default page