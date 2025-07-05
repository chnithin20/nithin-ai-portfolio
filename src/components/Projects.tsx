
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Desktop JARVIS Voice Assistant",
      description: "Voice-controlled AI desktop assistant built using Python and speech recognition libraries. Performed actions like app launching and web search.",
      technologies: ["Python", "Speech Recognition", "AI"],
      githubLink: "https://github.com/chnithin20"
    },
    {
      id: 2,
      title: "Weather Reporting Web App",
      description: "Created using HTML, CSS, JavaScript, and third-party APIs. Integrated real-time weather forecasting and responsive UI.",
      technologies: ["HTML", "CSS", "JavaScript", "REST APIs"]
    }
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    githubLink: '',
    liveLink: ''
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        id: Date.now(),
        title: newProject.title,
        description: newProject.description,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()),
        githubLink: newProject.githubLink || undefined,
        liveLink: newProject.liveLink || undefined
      };
      
      setProjects([...projects, project]);
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        githubLink: '',
        liveLink: ''
      });
      setIsDialogOpen(false);
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project) => (
            <Card key={project.id} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    placeholder="Enter project title"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    placeholder="Describe your project"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="technologies">Technologies (comma separated)</Label>
                  <Input
                    id="technologies"
                    value={newProject.technologies}
                    onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                    placeholder="React, TypeScript, Node.js"
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub Link (optional)</Label>
                  <Input
                    id="github"
                    value={newProject.githubLink}
                    onChange={(e) => setNewProject({...newProject, githubLink: e.target.value})}
                    placeholder="https://github.com/username/repo"
                  />
                </div>
                <div>
                  <Label htmlFor="live">Live Demo Link (optional)</Label>
                  <Input
                    id="live"
                    value={newProject.liveLink}
                    onChange={(e) => setNewProject({...newProject, liveLink: e.target.value})}
                    placeholder="https://yourproject.com"
                  />
                </div>
                <Button onClick={handleAddProject} className="w-full">
                  Add Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;
