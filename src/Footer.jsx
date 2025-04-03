import { MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">

          {/* Address */}
          <div className="flex flex-col items-center">
            <a href="https://www.google.com/maps/place/Navgurukul+Raipur/@21.2235189,81.6946669,19.59z/data=!4m6!3m5!1s0x3a28c3e0fe1d858f:0x742754bec029c6c2!8m2!3d21.2235625!4d81.6948281!16s%2Fg%2F11v5bbl9ms?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-purple-500 transition">
              <MapPin size={32} className="text-purple-400" />
            </a>
            <h3 className="text-lg font-semibold mt-4">Address</h3>
            <p className="text-gray-400">
                V.I.P. Road, Raipur, Chhattisgarh
            </p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <a href="https://github.com/Priyanka-sahu04" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-purple-500 transition">
              <Github size={32} className="text-purple-400" />
            </a>
            <h3 className="text-lg font-semibold mt-4">GitHub</h3>
            <p className="text-gray-400">
              <a href="https://github.com/Priyanka-sahu04" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">github.com/Priyanka-sahu04</a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/priyanka-sahu-0ba32430b/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-purple-500 transition">
              <Linkedin size={32} className="text-purple-400" />
            </a>
            <h3 className="text-lg font-semibold mt-4">LinkedIn</h3>
            <p className="text-gray-400">
              <a href="https://www.linkedin.com/in/priyanka-sahu-0ba32430b/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">linkedin.com/in/priyanka-sahu</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
