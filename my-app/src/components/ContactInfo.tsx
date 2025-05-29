interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}
const ContactInfo = ({icon, title,info}: ContactInfoProps) => {
    return(
  <div className="flex items-center space-x-4" data-aos="fade-up">
    <div className="text-red-600  text-2xl">{icon}</div>
   <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-700 ">{info}</p>
    </div>
  </div>
    )
};
export default ContactInfo;

