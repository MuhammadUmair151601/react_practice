import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div>
      <div className="h-75 w-65 p-4 rounded-[20px] m-7 shadow-2xl">
        <div className="header flex justify-between items-center">
          <img
            src={props.image}
            alt=""
            className="h-10  w-10 rounded-[50%] border border-gray-400"
          />
          <button className="bg-gray-200 rounded w-18 h-8 flex justify-between items-center p-1 text-gray-500">
            Saved <Bookmark />
          </button>
        </div>
        <div className="middle mt-10">
          <div className="flex items-baseline gap-1">
            <h1 className=" font-bold text-lg">{props.jobname}</h1>
            <p className="text-gray-500">{props.days}</p>
          </div>
        </div>
        <div>
          <h1 className=" font-bold mt-2 text-lg">{props.jobTitle}</h1>
          <div className="flex gap-2 ml-3 font-bold">
            <h1>part-time</h1>
            <h1>senior level</h1>
          </div>
        </div>
        <div className="footer mt-15 flex justify-between">
          <div>
            <h1 className="font-bold">$ 120/hr</h1>
            <h1 className="text-sm text-gray-500 ">{props.location}</h1>
          </div>
          <div>
            <button className="text-lg bg-black text-white rounded-[5px] w-30 h-8 flex items-center justify-center ">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
