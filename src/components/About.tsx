import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400">AJ</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that make a difference. My journey began with a curiosity 
                about how things work, and it has evolved into a love for crafting elegant, 
                efficient code.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest web technologies, 
                contributing to open-source projects, or sharing knowledge with the developer 
                community. I believe in writing code that not only works but tells a story.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-teal-50 transition-colors duration-200">
                  <Code className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Clean Code</h3>
                  <p className="text-sm text-gray-600">Writing maintainable, scalable solutions</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-teal-50 transition-colors duration-200">
                  <Coffee className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600">Always exploring new technologies</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-teal-50 transition-colors duration-200">
                  <Heart className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">User Focus</h3>
                  <p className="text-sm text-gray-600">Creating meaningful user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;