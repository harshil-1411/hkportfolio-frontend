import React from 'react';
import { 
  Code, Palette, Code2, Component, Zap, Paintbrush, Layout, 
  Server, Database, Globe, HardDrive, GitBranch, Github 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const Skills = () => {
  const getIcon = (iconName) => {
    const icons = {
      Code, Palette, Code2, Component, Zap, Paintbrush, Layout,
      Server, Database, Globe, HardDrive, GitBranch, Github
    };
    return icons[iconName] || Code;
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: mockData.skills.frontend,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Backend Development',
      skills: mockData.skills.backend,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Database',
      skills: mockData.skills.database,
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      title: 'Tools & Version Control',
      skills: mockData.skills.tools,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                      {category.title}
                    </h3>
                    <div className={`h-1 w-20 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = getIcon(skill.icon);
                      return (
                        <div 
                          key={skillIndex}
                          className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${category.bgGradient} hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-gray-900">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                I believe in continuous improvement and staying updated with the latest technologies 
                and industry best practices. Currently exploring advanced React patterns, 
                microservices architecture, and cloud deployment strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;