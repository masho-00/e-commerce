
const Hero = () => {
 

  return (
    <div className="relative w-full h-screen overflow-hidden mb-10">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2024/09/09/230471_tiny.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12 bg-gradient-to-b from-black/70 to-black/30">
        <h1
          data-aos="fade-down"
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4"
        >
          Drive Your Dream
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl max-w-3xl mb-10 drop-shadow-md"
        >
          Find the perfect car for your lifestyle. Quality cars, excellent
          service.
        </p>

       
      </div>
    </div>
  );
};

export default Hero;
