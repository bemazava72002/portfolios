"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Camera, Users, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gestion de la page Instagram PixelForce",
      description: "Création régulière de contenus visuels et vidéos pour Instagram, visant à augmenter l'engagement de la communauté.",
      image: "https://images.pexels.com/photos/15543504/pexels-photo-15543504.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Instagram", "Contenu visuel", "Vidéo", "Photographie"],
      
      client: "@pixelforce_jessrakoto"
    },
    {
      title: "Création de contenus événementiels artistiques",
      description: "Conception de visuels, décoration et supports digitaux pour des événements locaux à vocation culturelle.",
      image: "https://images.pexels.com/photos/3831552/pexels-photo-3831552.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Événementiel", "Création visuelle", "Design", "Photographie"],
     
      client: "Ateliers artistiques & locaux"
    },
    {
      title: "Site WordPress pour une association locale",
      description: "Développement d’un site vitrine WordPress pour une structure associative afin d’améliorer sa visibilité en ligne.",
      image: "https://images.pexels.com/photos/5428831/pexels-photo-5428831.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["WordPress", "Site web", "Association", "Communication"],
    
      client: "Association locale"
    },
    {
      title: "Création de vidéos TikTok pour la marque personnelle",
      description: "Production de vidéos courtes et créatives pour renforcer la notoriété de la marque personnelle sur TikTok.",
      image: "https://images.pexels.com/photos/8873498/pexels-photo-8873498.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["TikTok", "Reels", "Montage vidéo", "Marque personnelle"],
     
      client: "@pixelforcejessrakoto"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Projets Réalisés</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-uns de mes projets créatifs et engagements en tant que Community Manager, dans les domaines du digital, de l’événementiel et de la communication visuelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="secondary" className="mb-2">
                    {project.client}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Envie d’en savoir plus ou de collaborer sur votre prochain projet ?
          </p>
          <Button size="lg" onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Discutons ensemble
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
