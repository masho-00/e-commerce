import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white">
         <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2020/11/07/55538-501275401_tiny.mp4"
        autoPlay
        loop
        
        muted
        playsInline
      />
      {/* style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    > */}
      <div className="bg-black bg-opacity-20 w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Find Your Dream Home
        </h2>
        <p  data-aos="zoom-in" className="text-lg md:text-xl mb-8 drop-shadow-md">
          Explore the best properties around the world with us.
        </p>
        <form className="flex max-w-2xl mx-auto gap-2">
          <input  data-aos="fade-up"
            type="text"
            placeholder="Search by city, neighborhood, address..."
            className="flex-grow p-3 rounded-l-md focus:outline-none text-gray-900"
          />
          <button  data-aos="fade-up"
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-md transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
