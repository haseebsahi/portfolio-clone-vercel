import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code that stands the test of time.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into manageable solutions with innovative approaches.'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively in teams, mentoring juniors, and contributing to technical discussions.'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Continuous Learning',
      description: 'Staying updated with latest technologies and best practices in software development.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Passionate software engineer with a love for creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center transition-colors duration-300">
              <img
                src="/hs-headshot-0.png"
                alt="Haseeb Sultan"
                className="w-64 h-64 rounded-full object-cover object-center shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              With over 5 years of experience in software development, I specialize in building 
              scalable web applications and robust backend systems. My journey began with a 
              curiosity for technology and has evolved into a deep passion for creating software 
              that solves real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              I thrive in collaborative environments where I can contribute to meaningful projects, 
              mentor fellow developers, and continuously learn from the ever-evolving tech landscape. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;