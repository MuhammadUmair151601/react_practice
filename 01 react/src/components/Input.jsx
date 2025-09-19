import React from 'react'

const Input = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* first row */}
      <div className="flex gap-[20px]">
        <input className="border rounded px-5 py-1" type="text" placeholder="Enter data" />
        <input className="border rounded px-5 py-1" type="date" />
        <button className="border rounded px-5 py-1 bg-green-700 text-white font-bold">
          Add
        </button>
      </div>

      {/* Second Row */}
      <div className="flex gap-[165px]">
        <h1>milk</h1>
        <h1>20/03/2020</h1>
        <button className="border rounded px-5 py-1 bg-red-700 text-white font-bold">
          Delete
        </button>
      </div>

      {/* Third Row */}
      <div className="flex gap-[150px]">
        <h1>Meeting</h1>
        <h1>25/08/2025</h1>
        <button className="border rounded px-5 py-1 bg-red-700 text-white font-bold">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Input
