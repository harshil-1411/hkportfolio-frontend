import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Code, Database, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  
  const categoryIcons = {
    'Full-Stack': Globe,
    'Frontend': Smartphone, 
    'Backend': Database,
    'API': Code
  };

  const filteredProjects = activeFilter === 'All' 
    ? mockData.projects 
    : mockData.projects.filter(project => project.category === activeFilter);

  const handleLiveDemo = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

 

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work in web development and software engineering
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3 p-2 bg-gray-100 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const CategoryIcon = categoryIcons[project.category] || Code;
              return (
                <Card key={project.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-56 bg-white flex items-center justify-center">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        <Button 
                          onClick={() => handleLiveDemo(project.liveDemo)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium"
                      >
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                These are just a few highlights from my portfolio. I'm always working on exciting new projects 
                and would love to discuss how we can collaborate on your next idea.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;