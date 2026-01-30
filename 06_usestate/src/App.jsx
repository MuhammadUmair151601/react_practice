// import React, { useState } from 'react'

// const App = () => {
//   const [Num, setNum] = useState(0)

//   const increase = () =>{
//     setNum(Num + 1)
//   }

//   const decrease = () =>{
//     setNum(Num - 1)
//   }

//   const jump5 = () =>{
//     setNum(Num + 5)
//   }

//   const zero = () =>{
//     setNum(0)
//   }
//   return (
//     <div className=''>
//       <h1 className=''>count: {Num}</h1>
//       <button onClick={increase}>increment</button>
//       <button onClick={decrease}>decrement</button>
//       <button onClick={jump5}>Jump 5 values</button>
//       <button onClick={zero}>clear</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [Num, setNum] = useState([1,2,3,4,5])

//   const btnclicked = () =>{
//     const newNum = [...Num]
//     setNum(newNum)
//     newNum.push(99)
    
//     console.log(newNum)
//   }
//   return (
//     <div>
//       <button onClick={btnclicked}>Click Here</button>
//     </div>
//   )
// }

// export default App

