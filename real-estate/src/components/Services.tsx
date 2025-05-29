import React from 'react';
import { FaHome, FaSearch, FaHandshake, FaFileContract } from 'react-icons/fa';
import type { Service } from '../types/types';

const services: Service[] = [
  {
    id: 1,
    icon: <FaSearch size={36} className="text-blue-600 mb-4" />,
    title: 'Property Search',
    description: 'Find properties matching your taste from a large database.',
  },
  {
    id: 2,
    icon: <FaHandshake size={36} className="text-blue-600 mb-4" />,
    title: 'Buyer & Seller Support',
    description: 'Expert advice and negotiation to get you the best deal.',
  },
  {
    id: 3,
    icon: <FaFileContract size={36} className="text-blue-600 mb-4" />,
    title: 'Legal Assistance',
    description: 'We help you with all paperwork and legal formalities.',
  },
  {
    id: 4,
    icon: <FaHome size={36} className="text-blue-600 mb-4" />,
    title: 'Home Management',
    description: 'Maintenance and management for your investment property.',
  },
];



const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-6">
        <h3  data-aos="zoom-in" className="text-4xl font-semibold mb-12 text-center text-gray-800">
          Our Services
        </h3>
        <div  data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className='px-40 sm:px-16'>{icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
