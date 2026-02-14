import React from 'react'
import axios from 'axios'

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

// now calling apis using axios:
const getdata = async ()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(response.data)
}


  return (
    <div>
      <button onClick={getdata}>Get data</button>
    </div>
  )
}

export default App