import React from 'react'

const Card = (props) => {
  return (
    <div className='p-10'>
      <div className=' bg-zinc-400 w-70 h-80 rounded-[20px] flex p-10 flex-col'>
        <img className='rounded-[150px] h-20 w-20 bg-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhLiRvG4XHezJ6W7E7eSPdoWbVEJQoh9OXQ&s" alt="" />
      <h1 className='font-bold'>{props.name}</h1>
      <p>Muhammad umair from peshawar:</p>
      <p>age : {props.age} years</p>
      </div>
    </div>
  )
}

export default Card