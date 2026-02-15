// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// useeffect is used to do the multiple tasks in parallel side by side with other operations like api calling and dom manupulation while the website is performing other operations.
// const App = () => {
//   const [num, setnum] = useState(0);
//   const [num2, setnum2] = useState(10);
//   useEffect(function () {
//     console.log("useeffect is running:");
//   }, [num]);
// ye do dafa chalega so strict mode ko hataa lo:
// [] means app nay dependencies ka array pass kar diya ab ye aik dafa chalega.
//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setnum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setnum2(num2 + 10);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function Achanging() {
    console.log("a is changing");
  }
  function Bchanging() {
    console.log("B is changing");
  }
  useEffect(
    function () {
      Achanging();
    },
    [a],
  );
  useEffect(
    function () {
      Bchanging();
    },
    [b],
  );
  return (
    <div>
      <h1>value of A is {a}</h1>
      <h1>value of B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
