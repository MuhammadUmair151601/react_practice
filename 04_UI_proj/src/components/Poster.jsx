import React from 'react'

const Poster = (props) => {
  // const image = props;
  return (
    <div>
      <div className='poster h-130 w-70 bg-blue-400 m-10 rounded-[20px] p-5 flex flex-col justify-between'>
        {/* style={{ backgroundImage: `url(${props.image})` }} */}
        <h1 className='h-12 w-12 bg-white rounded-[50px] flex justify-center items-center font-bold text-2xl '>{props.id}</h1>
        <p className='text-xl mt-25'>{props.detail}</p>
        <button className='bg-blue-500 h-10 w-35 mt-5 rounded-[25px] mb-10'>{props.button}</button>
      </div>
    </div>
  )
}

export default Poster