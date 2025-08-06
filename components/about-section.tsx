"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Camera, Globe, Pencil } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    'Community Management',
    'Création de contenu',
    'Montage vidéo',
    'Photographie',
    'Événementiel',
    'WordPress',
    'Multilingue (FR/EN/ES/PT)',
    'Communication digitale',
  ];

  const experiences = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Manager",
      description: "Expérience en gestion de communauté pour l'agence digitale Pixelsior, avec une forte capacité à engager et fidéliser les audiences.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Création visuelle & vidéo",
      description: "Réalisation de contenus visuels et montages vidéo pour les réseaux sociaux et les événements artistiques.",
    },
    {
      icon: <Pencil className="h-6 w-6" />,
      title: "Contenus et rédaction",
      description: "Compétences en rédaction web, communication digitale et animation éditoriale multilingue.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Polyvalence culturelle",
      description: "Maîtrise de plusieurs langues (FR, EN, ES, PT) et expériences dans des environnements multiculturels.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">À propos de moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Community Manager passionnée, j’allie créativité, rigueur et sens artistique pour animer, développer et valoriser votre image de marque en ligne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Mon parcours</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Titulaire d’un Master en Droit Public Général à l’Université Sorbonne Paris Nord, j’ai choisi de mettre mes compétences juridiques, organisationnelles et créatives au service du Community Management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Actuellement Community Manager chez Pixelsior, j’interviens sur la création de contenus, l’animation de réseaux sociaux, la gestion de communautés, et la valorisation des marques à travers des supports digitaux et artistiques.
              </p>
            </div>

            <div>
              <h3 className="mb-4">Compétences clés</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="transition-all duration-300 hover:scale-105">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <div className="text-primary">{exp.icon}</div>
                  </div>
                  <h3 className="mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="mb-4">Notre mission</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "Créer du lien entre les marques et leurs communautés grâce à des contenus authentiques, engageants et porteurs de sens."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
