import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Diana Wangari Wachira
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Full Stack Web Developer
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Diana725?tab=repositories" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 hover:text-white transition-colors">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/diana-wachira-56814120b/" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={32} />
          </a>
          <Link to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Mail size={32} />
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
 
  <Link to="introduction" smooth={true} duration={500}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer">
    Learn More
  </Link>
  
  <Link to="projects" smooth={true} duration={500}
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-8 py-3 rounded-lg transition-colors cursor-pointer">
    View Projects
  </Link>
</div>

      </div>
    </div>
  );
}