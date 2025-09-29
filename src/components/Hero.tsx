import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'React Specialist', 'Problem Solver'];
  const typedText = useTypingEffect(roles, 120, 80, 2000);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl text-gray-600 font-medium">
              I'm a <span className="text-teal-500 font-semibold">{typedText}</span>
              <span className="animate-pulse text-teal-500">|</span>
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            I create beautiful, functional web applications that solve real-world problems. 
            Passionate about clean code, user experience, and continuous learning.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;