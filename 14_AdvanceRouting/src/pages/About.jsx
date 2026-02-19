import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const click = ()=>{
    navigate('/')
  }

  const back = ()=>{
    navigate(-1)
  }

  const next = ()=>{
    navigate(+1)
  }
  return (
    <div className='H bg-black h-screen text-white font-bold text-3xl'>
      <button onClick={click} className='bg-cyan-900 text-white font-bold text-2xl rounded absolute top-25 left-2 cursor-pointer'>Go to Home</button>
      <button onClick={back} className='bg-cyan-900 text-white font-bold text-2xl rounded absolute top-25 left-40 cursor-pointer'>Back</button>
      <button onClick={back} className='bg-cyan-900 text-white font-bold text-2xl rounded absolute top-25 left-60 cursor-pointer'>next</button>
     <h1>About page</h1>
      </div>
  )
}

export default About