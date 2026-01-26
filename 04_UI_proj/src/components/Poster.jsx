import React from 'react'

const Poster = (props) => {
  return (
    <div>
      <div className='h-150 w-75 poster bg-cover bg-center bg-no-repeat  m-10 rounded-[20px] p-5 flex flex-col justify-between opacity-90'
      style={{ backgroundImage: `url(${props.image})` }}
      >
        <h1 className='h-12 w-12 bg-white rounded-[50px] flex justify-center items-center font-bold text-2xl '>{props.id}</h1>
        <p className='text-xl mt-25 text-white'>{props.detail}</p>
        <button style={{backgroundColor:props.color}} className='bg-blue-600 h-10 w-35 mt-5 rounded-[25px] mb-10 text-xl font-bold text-black transition-transform 
  duration-300 
  ease-in-out 
  hover:scale-x-[1.1]  cursor-pointer'>{props.button}</button>
      </div>
    </div>
  )
}

export default Poster