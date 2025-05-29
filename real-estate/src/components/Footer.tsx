import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700  text-white py-6 mt-12 text-center">
     < p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
