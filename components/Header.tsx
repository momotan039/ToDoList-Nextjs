import React from 'react'
import Container from './Container'
import Link from 'next/link'

function Header() {
  return (
    <header className='bg-blue-600 text-white py-4'>
        <Container>
            <div className="flex items-center justify-between">
            <div className="logo">
                <h1 className='font-bold text-3xl'><Link href="/">TODO LIST</Link></h1>
            </div>
            <nav className='font-bold list-none flex gap-4'>
                <li><Link href="/todos">Todos</Link></li>
                <li><Link href="/add-new">Add ToDo</Link></li>
            </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header