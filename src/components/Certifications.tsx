
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const achievements = [
    {
      title: "Hackathon Finalist",
      description: "Level 1 Data Security - Supraja Technologies",
      icon: "🏆"
    },
    {
      title: "Innovation Presentation",
      description: "Presented Care Connect Web App on World Innovation & Creativity Day",
      icon: "💡"
    }
  ];

  const languages = [
    { language: "English", level: "Fluent", flag: "🇺🇸" },
    { language: "Hindi", level: "Proficient", flag: "🇮🇳" },
    { language: "Telugu", level: "Native", flag: "🏛️" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications & Achievements */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium text-lg">{lang.language}</span>
                      </div>
                      <span className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full text-sm font-medium">
                        {lang.level}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
