import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <section className="py-16 bg-gradient-to-tr from-red-50 to-red-100 dark:from-gray-800 dark:to-red-800 text-gray-900 dark:text-gray-100">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
     < h2 data-aos="fade-left" className="text-4xl font-bold mb-10 text-center">
        Contact Us
      </h2>
      <div className="space-y-8">
       < ContactInfo icon={<FaPhoneAlt />} title="Phone" info="+1 (555) 321-9876" />
        <ContactInfo icon={<FaEnvelope />} title="Email" info="info@carshop.com" />
        <ContactInfo icon={<FaMapMarkerAlt />} title="Address" info="789 Auto Blvd, Motor City" />
      </div>
    </div>
  </section>
);

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex items-center space-x-4" data-aos="fade-up">
    <div className="text-red-600 dark:text-red-400 text-2xl">{icon}</div>
   <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300">{info}</p>
    </div>
  </div>
);

export default Contact;
