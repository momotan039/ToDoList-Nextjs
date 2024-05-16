import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'

export interface CardProps{
children:ReactNode,
bg?:string,
width?:string,
height?:string,
padding?:string
}

function Card({children,bg,width,height,padding}:CardProps) {
  return (
    <div 
      className={`${bg||'bg-slate-800'} 
                  ${width}
                  ${height}
                   rounded 
                  ${padding||'p-3'}`}>
        {children}
    </div>
  )
}

export default Card