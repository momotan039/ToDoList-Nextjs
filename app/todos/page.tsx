'use client'
import React, { useEffect } from 'react'
import Todos from '@/components/Todos'
import { useAppContext } from '@/context/appContext'

function AllTodos() {
   const appState=useAppContext()
  return (
    <div className="m-5">
    <Todos todos={appState.todos}/>
  </div>
  )
}

export default AllTodos