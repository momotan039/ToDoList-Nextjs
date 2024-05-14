import { ScriptProps } from 'next/script'
import React from 'react'

function Card({children}:ScriptProps) {
  return (
    <div className="bg-gray-500 w-3/6 rounded p-3">
        {children}
    </div>
  )
}

export default Card