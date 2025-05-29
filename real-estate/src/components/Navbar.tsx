import React from "react";


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md transition-colors z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1  className="text-3xl font-bold text-blue-700 dark:text-blue-400 select-none">
          RealEstate
        </h1>
        <button className="text-gray-700  transition">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
