


const Navbar = () => {


  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-gray-300  backdrop-blur-md bg-transparent shadow-md z-50">
     < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center text-red-600">
       < div className="text-2xl font-extrabold  select-none">
       <a href="#hero">CarShop</a>
          
        </div>
        <ul className="hidden sm:flex space-x-8 text-gray-800  ">
          <li className="hover:text-green-600 transition-colors"><a href="#">Home</a></li>
          <li className="hover:text-green-600 transition-colors"><a href="#popular">Popular</a></li>
          <li className="hover:text-green-600 transition-colors"><a href="#about">About</a></li>
          <li className="hover:text-green-600 transition-colors"><a href="#contact">Contact</a></li>
        </ul>
       < button
        
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
         Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
