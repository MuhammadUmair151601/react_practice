import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='h-full bg-black flex flex-wrap '>
      <Card name = "Ali ahmed" age = {23}/>
      <Card  name= "shah fahad" age = {34}/>
      <Card name = "Asghar" age = {35}/>
      <Card name = "naeem" age = {64}/>
      <Card name = "adnan" age = {34}/>
    </div>
  )
}

export default App