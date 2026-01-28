import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(0)

  const increase = () =>{
    setNum(Num + 1)
  }

  const decrease = () =>{
    setNum(Num - 1)
  }

  const jump5 = () =>{
    setNum(Num + 5)
  }

  const zero = () =>{
    setNum(0)
  }
  return (
    <div className=''>
      <h1 className=''>count: {Num}</h1>
      <button onClick={increase}>increment</button>
      <button onClick={decrease}>decrement</button>
      <button onClick={jump5}>Jump 5 values</button>
      <button onClick={zero}>clear</button>
    </div>
  )
}

export default App