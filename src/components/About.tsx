
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
                I am a passionate and curious AI/ML student who loves exploring intelligent systems 
                and building creative, problem-solving tech projects. I quickly adapt to challenges, 
                enjoy team collaboration, and seek continuous growth by contributing to impactful work. 
                My goal is to innovate, learn fast, and thrive in a dynamic environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
