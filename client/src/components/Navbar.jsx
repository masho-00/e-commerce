import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto w-full">
      <div className="bg-cyan-600 text-white flex items-center justify-between text-xl font-bold p-2 shadow-lg">
        <Link to={"/"}>Logo</Link>
        <Link to={'/login'} className='border-2 border-white rounded-lg px-4 py-2 bg-transparent hover:bg-cyan-800' >Join Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
