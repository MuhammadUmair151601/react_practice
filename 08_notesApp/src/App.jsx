import React, { useState } from "react";

const App = () => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log(title);
    settitle('')
  };
  const [title, settitle] = useState('')
  // Used for the input value taken as a heading
  const [Detail, setDetail] = useState('')
  return (
    <div className="flex justify-betweenm px-20 items-center h-full bg-black ">
      
      <div className="min-h-screen lg:flex lg:h-full">
        
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col gap-5 px-20 pt-5 w-150"
        >
          <h1 className="text-3xl text-white font-bold">Add Notes</h1>
          <input
            className="bg-gray-700 h-15 px-10 outline-none text-xl text-white border-2 rounded"
            type="text"
            placeholder="Enter notes heading"
            value={title}
            onChange={(e)=>{
              settitle(e.target.value)
            }}
          />
          <textarea
            className="bg-gray-700 h-35 outline-none py-2 px-10 text-xl text-white  border-2 rounded"
            type="text"
            placeholder="Enter Details"
          />
          <button className="p-5 text-black bg-white border-2 rounded text-2xl font-bold cursor-pointer">
            Add Notes
          </button>
        </form>
        <div className="lg:w-1/2 p-10 flex flex-col">
          <h1 className="text-3xl font-bold text-white ml-10">My Notes</h1>
            <div className="flex  mt-5 gap-5 flex-wrap h-full lg:border-l-2 lg:border-white overflow-y-auto">
            <div className="h-50 w-50 p-5 bg-white mt-10 rounded-[5px] ml-10"></div>
            <div className="h-50 w-50 p-5 bg-white mt-10 rounded-[5px] ml-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
