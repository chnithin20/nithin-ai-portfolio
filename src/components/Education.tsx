
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in CSE (AI & ML)",
      institution: "Anurag Engineering College",
      duration: "2023 - 2027 (Expected)",
      score: "CGPA: 7.34",
      icon: "🎓"
    },
    {
      degree: "Intermediate (TSBIE)",
      institution: "Excellent Junior College",
      duration: "2021 - 2023",
      score: "Score: 720/1000",
      icon: "📚"
    },
    {
      degree: "SSC",
      institution: "S R M High School",
      duration: "2020 - 2021",
      score: "Grade: 10/10",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{edu.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm">{edu.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
