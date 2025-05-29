import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-800 text-white h-[400px] ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2  data-aos="zoom-in" className="text-4xl font-bold mb-6 ">About Us</h2>
        <p  data-aos="fade-up" className=" text-lg max-w-3xl mx-auto">
          We’re dedicated to finding you the perfect home. Our passionate team of agents and
          real estate experts offer personalized solutions to help you buy, sell, or rent your
          ideal home with ease and confidence.
        </p>
      </div>
    </section>
  );
};

export default About;
