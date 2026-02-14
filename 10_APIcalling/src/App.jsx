import React from 'react'


const App = () => {
   
// const getdata = ()=>{
//  const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
//  console.log(response)
// }

// if we want to work asynchronously:

// const getdata = async ()=> {
//  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  console.log(response)
// }

// if we want json data in return:
// const getdata = async ()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await response.json();
//   console.log(data)
// }


  return (
    <div>
      <button onClick={getdata}>Get data</button>
    </div>
  )
}

export default App