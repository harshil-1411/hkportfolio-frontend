import React from 'react';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const About = () => {
  const stats = [
    { icon: TrendingUp, label: 'Projects Completed', value: mockData.stats.projectsCompleted },
    { icon: Calendar, label: 'Years Experience', value: mockData.stats.yearsExperience },
    { icon: TrendingUp, label: 'Clients Satisfied', value: mockData.stats.clientsSatisfied }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {mockData.personal.bio}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Currently pursuing my MCA at {mockData.personal.education.replace('MCA - ', '')}, I'm constantly 
                  expanding my knowledge in modern web technologies and best practices. My passion 
                  lies in creating efficient, scalable, and user-friendly applications that solve 
                  real-world problems.
                </p>
              </div>

              {/* Education & Location */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Education:</span>
                  <span>{mockData.personal.education}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Location:</span>
                  <span>{mockData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;