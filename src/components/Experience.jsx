import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey in the tech industry and the experiences that shaped my skills
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {mockData.experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Experience Card */}
                <div className="ml-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 mb-2">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-blue-600" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-blue-600" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-700 font-medium">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-blue-600" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          {/* <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Currently Learning & Growing</h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  While gaining hands-on experience at Labmentix, I'm continuously expanding my skill set 
                  by exploring advanced React patterns, cloud technologies, and modern development practices. 
                  I believe in the power of continuous learning and staying updated with the rapidly evolving tech landscape.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {['Cloud Computing', 'DevOps', 'Advanced React', 'System Design', 'Testing'].map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;