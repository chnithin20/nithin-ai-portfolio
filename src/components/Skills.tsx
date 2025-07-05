
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "REST APIs"],
      icon: "🌐"
    },
    {
      title: "AI/ML Tools",
      skills: ["NumPy", "Pandas"],
      icon: "🤖"
    },
    {
      title: "Tools & Practices",
      skills: ["Git/GitHub", "Agile Methodology"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-3 py-2 rounded-md text-sm text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
