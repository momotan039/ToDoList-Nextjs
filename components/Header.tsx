'use client'
import React, { useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/constants/nav-links'

function Header() {
  const [openedMenu, setOpenMenu] = useState(false)
  return (
    <header className=' text-white py-4 bg-gradient-to-r from-blue-700'>
        <Container>
            <div className="flex items-center justify-between">
            <div className="logo">
                <h1 className='font-bold text-3xl'><Link href="/">TODO LIST</Link></h1>
            </div>
            {/* main nav */}
            <nav className='hidden font-bold list-none gap-4 md:flex'>
                {navLinks.map((n,i)=>{
                  return <Link key={i} href={n.href}>{n.name}</Link>
                })}
            </nav>
            <button onClick={()=>setOpenMenu(!openedMenu)}  className='md:hidden'>{openedMenu?<X/>:<Menu/>}</button>
             {/* mobile nav */}
             <nav className={`bg-blue-900/80 p-3 fixed top-11 right-1 rounded-sm flex flex-col space-y-2 ${openedMenu?'block':'hidden'}`}>
             {navLinks.map((n,i)=>{
                  return <Link onClick={()=>setOpenMenu(false)} className='hover:font-bold' key={i} href={n.href}>{n.name}</Link>
                })}
             </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header