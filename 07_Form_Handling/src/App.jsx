import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted:", value);

    setValue("");
  };

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)}
        }>
        <input
          type="text"
          placeholder="enter something"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
