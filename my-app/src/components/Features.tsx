
import { FaCar, FaTools, FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCar size={36} className="text-red-600" />,
      title: "Wide Range of Cars",
      description: "Choose from SUVs, Sedans, Trucks and more - tailored to your needs.",
    },
    {
      icon: <FaTools size={36} className="text-yellow-500" />,
      title: "Certified Quality",
      description: "All cars are inspected and certified for top performance and safety.",
    },
    {
      icon: <FaPhoneAlt size={36} className="text-green-600" />,
      title: "Customer Support",
      description: "Our team is available 24/7 to assist you with all inquiries and support.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-100 to-red-200 dark:from-gray-900 dark:to-red-900 text-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 bg-white  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="zoom-in"
            >
              <div className="mb-4">{icon} </div>
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 ">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
