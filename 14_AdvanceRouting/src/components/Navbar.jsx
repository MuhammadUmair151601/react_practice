import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-cyan-900 text-white flex h-15 justify-between items-center px-10'>
        <h1 className='font-bold text-3xl'>Logo</h1>
        <div className='flex gap-8 font-bold cursor-pointer'>
          <Link to= '/'>Home</Link>
          <Link to= '/About'>About</Link>
          <Link to= '/Product'>Product</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar