import React from 'react'

const App = () => {
  // sessionStorage.clear()
  // localStorage.clear()
  // these two commands used for clearing the local storage and session storage clearance:

  // localStorage.setItem('user', 'umair')
  // used for adding the item and its value

  // localStorage.removeItem('user','umar')
  // used for removing the item and its value

  let data = {
    name : "umair",
    age : 25,
    city : "peshawar"
  }

  //  localStorage.setItem('data',(data))
  // will take data but will show in object form so we will use json.stringify:

  // localStorage.setItem('data',JSON.stringify(data))
  // localStorage.setItem('data',parse(data))
  
  return (
    <div>

    </div>
  )
}

export default App