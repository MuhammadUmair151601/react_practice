import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
const App = () => {
  return (
    <div className="h-[470px] w-[550px] flex justify-center ml-100">
    <div className="flex flex-col items-center">
      <Header></Header>
      <Input></Input>
    </div>
    </div>
  )
}

export default App