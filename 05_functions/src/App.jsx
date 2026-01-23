import React from 'react'

const App = () => {
  const clicked = (elem) =>{
    alert("Button clicked:")
    console.log("button clicked:")
  }

  // if we want to pass parameters in the function:
  
  const fruit = (elem)=>{
    console.log(elem);
  }
  return (
    <div className='h-screen w-full bg-zinc-900 '> 
      <button className='bg-gray-700 m-2 rounded text-white p-1 font-bold' onClick={clicked}>Click ME</button>
      <button className='bg-gray-700 m-2 rounded text-white p-1 font-bold' onClick={()=> fruit("apple")}>Click for Fruits:</button>
    </div>
  )
}

export default App