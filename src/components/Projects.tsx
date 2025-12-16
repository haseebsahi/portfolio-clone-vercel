import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digistaff',
      description: 'Digistaff is a cutting-edge staffing platform that streamlines scheduling, workforce management, and end-to-end staffing operations with advanced technology.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/digistaff.png',
      tags: ['AWS', 'React', 'Node.js', 'PostgreSQL', 'GraphQL'],
      github: 'https://github.com',
      demo: 'https://digistaff.ca/',
      featured: true
    },
    {
      title: 'Sharrai.ae',
      description: 'Sharrai is a seamless UAE-based platform for buying and selling used cars, created by the team behind Sharjah’s renowned Souq Al Haraj for Cars.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/sharrai-sc.png',
      tags: ['Socket.io', 'Node.js', 'Angular', 'Reactive Forms', 'WebRTC'],
      github: 'https://github.com',
      demo: 'https://sharrai.ae/',
      featured: true
    },
    {
      title: 'DQAC',
      description: 'A project dedicated to auditing digital Quran texts to ensure complete accuracy, reliability, and preservation of the holy message across apps and websites.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/dq-site-sc.png',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Nest.js', 'AWS', 'Cognito'],
      github: 'https://github.com',
      demo: 'https://certifyquran.com/',
      featured: true
    },
    {
      title: '0-100',
      description: 'A fast-paced 0–100 number-guessing quiz game you can play live with anyone, anywhere—friends, family, or even solo on the go.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/0-100-sc.png',
      tags: ['Angular 20', 'Node.js', 'Firebase', 'AWS Serverless', 'DynamoDB'],
      github: 'https://github.com',
      demo: 'https://0-100.games/',
      featured: false
    },
    {
      title: 'Almadfoon',
      description: 'Built scalable backend APIs and an Angular admin portal for a UAE restaurant’s multi-platform home-delivery system, enabling real-time orders, seamless management, and high-performance integration across apps and web.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/almadfoon-sc.png',
      tags: ['Next.js', 'Sanity', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://almadfoon.com/',
      featured: false
    },
    {
      title: 'Digiebot',
      description: 'DigieBot is a patent-pending automated trading bot that uses real-time volume and time-and-sales data to execute smart, market-driven trades—so you can profit even while you sleep.',
      image: 'https://haseebsahi.github.io/assets/images/haseeb-projects/digiebot-web-sc.png',
      tags: ['Angular 15', 'Node.js', 'PHP', 'Blockchain', 'Smart Contracts'],
      github: 'https://github.com',
      demo: 'http://www.digiebot.com/',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'lg:grid-cols-2' : ''
              } ${project.featured ? 'grid' : 'flex flex-col'} bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-400`}
            >
              <div className={`${project.featured ? 'order-1 lg:order-1' : ''} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Eye size={18} className="text-gray-700" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={18} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className={`p-8 ${project.featured ? 'order-2 lg:order-2 flex flex-col justify-center' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;