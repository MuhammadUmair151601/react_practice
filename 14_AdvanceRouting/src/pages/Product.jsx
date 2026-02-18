import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='H bg-black h-screen text-white font-bold text-3xl'>
      <div className='absolute top-15 flex gap-5'>
        <Link to='/Product/men'>men</Link>
      <Link to='/Product/women'>women</Link>
      </div>
     

      <h1>Product page</h1></div>
  )
}

export default Product