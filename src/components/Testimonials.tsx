import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      name: 'Yash Dhaliwal',
      position: 'CEO, Digistaff Inc.',
      company: 'Digistaff Inc.',
      image: 'https://raw.githubusercontent.com/haseebsahi/haseebsahi.github.io/refs/heads/main/assets/images/yash.jpg',
      rating: 5,
      review: 'Working with Haseeb was an absolute pleasure. He delivered services for our staffing platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is outstanding.',
      project: 'Digistaff'
    },
    {
      name: 'Erik Afzelius',
      position: 'Product Manager',
      company: 'Humla Games LLC',
      image: 'https://haseebsahi.github.io/assets/images/erik.jpeg',
      rating: 4,
      review: 'Listens, learns, respects and is dedicated like few!',
      project: '0-100'
    },
    {
      name: 'Jason Melancon',
      position: 'Attorney',
      company: 'Melancon | Rimes',
      image: 'https://haseebsahi.github.io/assets/images/c-1.png',
      rating: 5,
      review: 'Haseeb played an integral role in building our online e-commerce platform. He modernized our user interface and developed state of the art methods to secure and store mission critical data.',
      project: 'Malls Direct'
    },
    {
      name: 'Farrukh Javed',
      position: 'CTO, TRS Pvt Ltd.',
      company: 'The Right Software Pvt Ltd.',
      image: 'https://haseebsahi.github.io/assets/images/farrukh-javed.jpeg',
      rating: 5,
      review: 'Haseeb is a quick learner who adapts easily to new environments and technologies. He\'s always eager to grow and improve. What sets him apart is his strong work ethic and professionalism. I highly recommend him to anyone looking for a skilled and dedicated software engineer.',
      project: 'Sharrai.ae, Almadfoon'
    },
    // {
    //   name: 'Lisa Wang',
    //   position: 'Operations Manager',
    //   company: 'Global Communications',
    //   image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   rating: 5,
    //   review: 'The chat application with video calling capabilities has revolutionized our remote team communication. Secure, reliable, and user-friendly. Outstanding development work!',
    //   project: 'Chat Application'
    // },
    {
      name: 'Zeeshan Ahmed',
      position: 'Sr. Product Designer',
      company: 'DPL IT',
      image: 'https://haseebsahi.github.io/assets/images/zeeshan.jpeg',
      rating: 5,
      review: 'I worked with Haseeb at DPL, where his strong full-stack skills, clear communication, and steady teamwork made him a reliable contributor under tight deadlines. I highly recommend him as an adaptable and dependable developer.',
      project: 'DQAC'
    },
    {
      name: 'Huzaifa Asif',
      position: 'Engineering Lead, Evert',
      company: 'CEO, TheAWeb',
      image: 'https://haseebsahi.github.io/assets/images/huzaifa-asif.jpg',
      rating: 5,
      review: 'The CRM become an essential tool for our business. Accurate stats and beautiful visualizations. Haseeb has been a professional web developer from the start and delivered everything on time.',
      project: 'TheAWeb CRM'
    }
  ];

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += interval;
      const newProgress = (elapsed / duration) * 100;
      setProgress(newProgress);

      if (elapsed >= duration) {
        setCurrentPage(prev => (prev + 1) % totalPages);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, totalPages, currentPage]);

  // Reset progress when manually changing slides
  const nextSlide = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    setProgress(0);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setProgress(0);
  };

  // Pause auto-play and reset progress when user interacts
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setProgress(0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        } transition-colors duration-300`}
      />
    ));
  };

  // Create pages of testimonials
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    pages.push(testimonials.slice(startIndex, endIndex));
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Don't just take my word for it - here's what clients have to say about working with me
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
                width: `${totalPages * 100}%`
              }}
            >
              {pages.map((pageTestimonials, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`grid gap-8 ${
                    itemsPerPage === 3 ? 'grid-cols-1 lg:grid-cols-3' :
                    itemsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' :
                    'grid-cols-1'
                  }`}
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {pageTestimonials.map((testimonial, index) => (
                    <div
                      key={`${pageIndex}-${index}`}
                      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group h-full"
                    >
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200 dark:border-gray-600"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            {testimonial.position}
                          </p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          ({testimonial.rating}.0)
                        </span>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 text-blue-600 dark:text-blue-400 opacity-20" size={32} />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 relative z-10 transition-colors duration-300">
                          {testimonial.review}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          Project: <span className="font-medium text-gray-700 dark:text-gray-300">{testimonial.project}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className="relative"
              >
                <button
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
                
                {/* Timer animation for active dot */}
                {currentPage === index && isAutoPlaying && (
                  <div className="absolute inset-0 -m-1 flex items-center justify-center">
                    <svg className="w-5 h-5 transform -rotate-90" viewBox="0 0 20 20">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-blue-600 opacity-30"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="text-blue-600"
                        style={{
                          strokeDasharray: '50.27',
                          strokeDashoffset: `${50.27 - (progress / 100) * 50.27}`,
                          transition: 'stroke-dashoffset 50ms linear'
                        }}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
              5.0 average rating from 50+ clients
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;