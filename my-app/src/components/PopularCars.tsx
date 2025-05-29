
import { cars } from "../data/data";

const PopularCars = () => {


  return (
    <section id="popular" className="py-16 bg-white text-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-right" className="text-4xl font-bold mb-12 text-center">
          Popular Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map(({ image, name, price }) => (
            <div
              key={name}
              className="bg-white  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
            >
             < img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-red-600  font-semibold">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCars;
