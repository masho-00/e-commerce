import React from 'react';
import { properties } from '../data/data';




const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3  data-aos="zoom-in" className="text-4xl font-semibold text-center mb-12 text-gray-800 ">
          Featured Properties
        </h3>
        <div  data-aos="fade-up-right" className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {properties.map(({ id, title, location, price, bedrooms, bathrooms, image }) => (
            <div
              key={id}
              className="bg-white  rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img className="w-full h-56 object-cover" src={image} alt={title} />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 ">{title}</h4>
                <p className="text-blue-600 font-semibold mb-2">{price}</p>
                <p className="text-gray-600  mb-2">{location}</p>
                <div className="flex space-x-6 text-gray-700 ">
                  <span>{bedrooms} Beds</span>
                  <span>{bathrooms} Baths</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
