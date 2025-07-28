import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* About Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {mockData.personal.name}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                {mockData.personal.bio.split('.').slice(0, 2).join('.')}. 
                Always excited to take on new challenges and create amazing digital experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/harshil-1411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harshilkharbanda14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/harshilkharbanda_14/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${mockData.personal.email}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href={`mailto:${mockData.personal.email}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {mockData.personal.email}
                  </a>
                </p>
                <p className="text-sm">
                  {mockData.personal.location}
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm px-4 py-2"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2025 {mockData.personal.name}. </span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;