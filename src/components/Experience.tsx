import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Digistaff Inc.",
      position: "Senior Full Stack Engineer",
      duration: "March 2025 - Present",
      location: "Toronto, Canada · Remote",
      type: "Full-time",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions for multiple high-impact projects.",
      achievements: [
        // 'Architected and built a microservices platform serving 20K+ users.',
        // 'Improved application performance by 40% through optimization techniques.',
        // 'Led a team of 5 developers on a critical product launch.',
        // 'Implemented CI/CD pipelines reducing deployment time by 60%.'
        "Built and improved key features for a staffing platform used by thousands of workers across Canada, including shift scheduling, payments, and performance reports.",
        "Contributed to the platform’s React-based portal and website, improving page responsiveness, fixing UI bugs, and streamlining user interactions for smoother navigation.",
        "Fixed major bugs and improved system flows to make the platform faster and more reliable.",
        "Solved tricky timezone issues that affected users in different regions, making sure schedules worked smoothly everywhere.",
        "Set up tools to send emails (using AWS SES), push notifications (using SNS), and SMS/calls (using Twilio) for campaigns and alerts.",
      ],
    },
    {
      company: "DPL IT",
      position: "Software Engineer",
      duration: "March 2023 - February 2025",
      location: "Islamabad, Pakistan · Hybrid",
      type: "Full-time",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Led frontend development of a digital authentication platform in React and contributed to Nest.js backend APIs, delivering the product from scratch to production under tight deadlines.",
        "Built a real-time, serverless trivia game on AWS (Lambda, API Gateway, DynamoDB) using Node.js/TypeScript, attracting 5,000+ organic users in its first month.",
        "Optimized DynamoDB queries and developed Angular components, including an SSR-enabled admin panel and SEO-focused landing pages that improved web-to-app conversions by 50%",
        "Worked closely with stakeholders in an Agile setup, ensuring on-time releases and boosting overall system performance by 30% through targeted optimizations.",
      ],
    },
    {
      company: "Vizz Web Solutions Pvt Ltd.",
      position: "MEAN Stack Developer",
      duration: "February 2022 - March 2023",
      location: "Islamabad, Pakistan · Onsite",
      type: "Full-time",
      description:
        "Focused on creating exceptional user interfaces and experiences for early-stage startup products. Worked closely with designers and product managers.",
      achievements: [
        "Upgraded a large-scale Angular app from v6 to v14, cutting initial load time by 70% and reducing bundle size from 6MB to 750KB through lazy loading and performance optimizations.",
        "Built RESTful APIs in Node.js, optimized complex MongoDB queries, and improved backend response time by 35% through profiling and query tuning.",
        "Refactored legacy code and enhanced frontend responsiveness for a smoother user experience.",
        "Collaborated in Agile teams to ensure continuous delivery, efficient sprint execution, and consistent feature releases.",
      ],
    },
    {
      company: "The Right Software Pvt Ltd.",
      position: "Web Developer",
      duration: "November 2020 - January 2022",
      location: "Rawalpindi, Pakistan · Onsite",
      type: "Contract",
      description:
        "Provided web development services to various clients, from small businesses to growing startups. Specialized in modern web technologies and mobile-responsive designs.",
      achievements: [
        "Delivered full-stack features across diverse client projects, contributing to a 30% improvement in project turnaround efficiency.",
        "Built scalable RESTful APIs in Node.js with MongoDB, powering Android, iOS, and Angular applications.",
        "Developed responsive, modular Angular UIs using SCSS and Material, reducing client-reported UI bugs by ~35%.",
        "Integrated third-party services (Firebase, Stripe Connect, Noon Payments, Google APIs) and engineered high-speed data-scraping pipelines using Cheerio and Puppeteer to process data from 100+ sites within minutes.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            My journey through various roles and companies, building expertise
            and delivering impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block transition-colors duration-300" />

                <div className="md:ml-16 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                        <Briefcase size={16} className="mr-2" />
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
