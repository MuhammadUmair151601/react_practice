import React from 'react'

const Time = () => {

  let time = new Date();
  return (
    <div>
      <p className='text-2xl mt-10'>This is the current time {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time;