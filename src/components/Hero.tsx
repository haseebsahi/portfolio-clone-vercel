import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const titles = ["Software Engineer", "Full Stack Developer"];

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds

      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage: "url(/home-bg-img.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm transition-colors duration-300" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold text-white">HS</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Haseeb Sultan
            </span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {displayText}
              <span className="text-white animate-pulse">|</span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Passionate about creating innovative solutions and building
            exceptional digital experiences. I transform ideas into robust,
            scalable applications using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-medium border-2 border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/haseebsahi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/haseeb-sultan-9536961b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:haseebsultansahi@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
