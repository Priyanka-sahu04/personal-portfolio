import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Contact Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 items-center">
          
          {/* Email Address */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full">
              <Mail size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Email</h3>
            <p className="text-gray-400">
              <a href="mailto:info@example.com" className="hover:text-purple-400 transition">info@example.com</a>
            </p>
            <p className="text-gray-400">
              <a href="mailto:support@example.com" className="hover:text-purple-400 transition">support@example.com</a>
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full">
              <MapPin size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Address</h3>
            <p className="text-gray-400">82 12th Street, Office 14</p>
            <p className="text-gray-400">Edinburgh, UK</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full">
              <Github size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mt-4">GitHub</h3>
            <p className="text-gray-400">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">github.com/your-github</a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full">
              <Linkedin size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mt-4">LinkedIn</h3>
            <p className="text-gray-400">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">linkedin.com/in/your-profile</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
