import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full-Stack Developer',
    'React Specialist',
    'Node.js Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {mockData.personal.name}
                  </span>
                </h1>
                
                <div className="text-2xl lg:text-3xl text-gray-700 h-16 flex items-center justify-center lg:justify-start">
                  <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
                    {displayText}
                  </span>
                </div>
                
                <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {mockData.personal.bio}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <a href="/harshil kharbanda final.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 pt-4">
                <a 
                  href="https://github.com/harshil-1411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harshilkharbanda14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/harshilkharbanda_14/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={mockData.personal.headshot}
                    alt={mockData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-20 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;