import React from 'react'
import { useParams } from 'react-router-dom'
const Course = () => {
   const params = useParams()
  return (
    <div>
      <h1 className='H bg-black h-screen text-white font-bold text-3xl'>{params.CourseId} course details</h1>
      </div>
  )
}

export default Course