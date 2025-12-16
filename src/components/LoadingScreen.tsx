import React from 'react';
import { Code, Zap } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Avatar */}
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-3xl font-bold text-white">HS</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
          Haseeb Sultan
        </h1>
        <p className="text-xl text-white/80 mb-8 animate-fade-in-delay">
          Software Engineer & Full Stack Developer
        </p>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 text-white/90">
            <Code className="animate-spin-slow" size={24} />
            <span className="text-lg font-medium">Crafting Experience</span>
            <Zap className="animate-bounce" size={20} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full animate-loading-bar" />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;