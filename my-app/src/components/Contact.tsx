
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactInfo from "./ContactInfo";

const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-tr from-red-50 to-red-100  text-gray-900 ">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
     < h2 data-aos="fade-left" className="text-4xl font-bold mb-10 text-center">
        Contact Us
      </h2>
      <div className="space-y-8">
       < ContactInfo icon={<FaPhoneAlt />} title="Phone" info="+251 912 345 679" />
        <ContactInfo icon={<FaEnvelope />} title="Email" info="info@carshop.com" />
        <ContactInfo icon={<FaMapMarkerAlt />} title="Address" info="789 Auto Yeka, Addis Ababa" />
      </div>
    </div>
  </section>
);



export default Contact;
