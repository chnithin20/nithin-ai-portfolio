
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-container section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              N
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Challa Nagasai Nithin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            AI/ML Student | Fast Learner | Project Builder
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate and curious AIML student with hands-on project experience, 
            strong problem-solving mindset, and eager to contribute to real-world innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-6 text-sm md:text-base text-muted-foreground">
              <span>📍 Kodad, Telangana</span>
              <span>📧 chnagasainithin20@gmail.com</span>
              <span>📱 +91 7416504297</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Download Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/challanagasainithin" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/chnithin20" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="animate-bounce mt-12 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
