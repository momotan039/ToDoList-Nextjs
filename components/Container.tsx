import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'

function Container({children}:ScriptProps) {
  return (
    <div className="container mx-auto transition-all ease-in-out duration-300 px-3 sm:px-0">
        {children}
    </div>
  )
}

export default Container