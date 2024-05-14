import React from 'react'
import Container from './Container'

function Header() {
  return (
    <header className='bg-blue-600 text-white py-4'>
        <Container>
            <div className="flex items-center justify-between">
            <div className="logo">
                <h1 className='font-bold text-3xl'><a href="/">TO DO LIST</a></h1>
            </div>
            <nav className='font-bold list-none flex gap-4'>
                <li><a href="">Add ToDo</a></li>
            </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header