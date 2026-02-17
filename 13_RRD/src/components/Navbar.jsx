import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-900 flex justify-between h-15 items-center px-10">
      <h3 className="text-3xl font-bold text-white">Logo</h3>
      <div className="flex gap-10 text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
