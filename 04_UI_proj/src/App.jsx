import React from 'react'
import Nav from './components/Nav'
import Leftcard from './components/Leftcard'
import Secondcard from './components/Secondcard'

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <div className='flex justify-between gap-20 p-10'>
        <Leftcard></Leftcard>
      <Secondcard></Secondcard>
      </div>
    </div>
  )
}

export default App