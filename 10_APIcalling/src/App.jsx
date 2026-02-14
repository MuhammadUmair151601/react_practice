import React, { useState } from 'react'
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
// const getdata = async ()=>{
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//   console.log(response.data)
// }

// now how to show the fetched data in UI:
const [data, setdata] = useState([])

const getdata = async ()=>{
  const response = await axios.get('https://dummyjson.com/users')
  setdata(response.data.users)
  // console.log(response.data)
}


  return (
    <div>
      <button onClick={getdata}>get data</button>
      
      <div>
      {data.map((elem,idx)=>{
        return (
          <div>
        <h1>Hello, {elem.firstName} {elem.lastName}</h1>
        <img src={elem.image} width="100" />
        <p>{elem.address.city}</p>
        </div>
        )
      })}
      </div>
  </div>
  )
}

export default App