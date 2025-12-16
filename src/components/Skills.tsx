import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiFirebase,
  SiGit,
  SiLinux,
  SiJest,
  SiWebpack,
  SiAwslambda
} from 'react-icons/si';
import { FaServer, FaCogs, FaAws } from 'react-icons/fa';

const Skills = () => {
  const technologies = [
    { icon: <SiAngular className="text-red-600" />, name: 'Angular' },
    { icon: <SiReact className="text-blue-500" />, name: 'React' },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js' },
    { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript' },
    { icon: <SiJavascript className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind CSS' },
    { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-600 dark:text-gray-300" />, name: 'Express.js' },
    { icon: <SiNestjs className="text-red-600" />, name: 'Nest.js' },
    { icon: <SiGraphql className="text-pink-500" />, name: 'GraphQL' },
    { icon: <FaServer className="text-blue-600" />, name: 'REST APIs' },
    { icon: <SiPostgresql className="text-blue-700" />, name: 'PostgreSQL' },
    { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
    { icon: <SiRedis className="text-red-600" />, name: 'Redis' },
    { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
    { icon: <FaAws className="text-orange-500" />, name: 'AWS' },
    { icon: <SiAwslambda className="text-orange-500" />, name: 'AWS Lambda' },
    { icon: <SiDocker className="text-blue-500" />, name: 'Docker' },
    { icon: <SiGit className="text-orange-600" />, name: 'Git' },
    { icon: <SiLinux className="text-black dark:text-white" />, name: 'Linux' },
    { icon: <SiJest className="text-red-600" />, name: 'Jest' },
    { icon: <SiWebpack className="text-blue-400" />, name: 'Webpack' },
    { icon: <FaCogs className="text-gray-600 dark:text-gray-400" />, name: 'CI/CD' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="relative w-full overflow-hidden -mx-6">
          <div className="flex w-max animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group flex flex-col items-center gap-2 mx-4 sm:mx-6 md:mx-8 min-w-[80px] sm:min-w-[90px] md:min-w-[100px] flex-shrink-0 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;