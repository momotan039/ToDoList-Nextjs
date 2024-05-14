import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'

function Container({children}:ScriptProps) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container