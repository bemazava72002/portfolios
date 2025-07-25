"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Zap, Brain } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    'Prospection B2B', 'Lead Generation', 'Marketing Automation', 'CRM Management',
    'Sales Funnel', 'Email Marketing', 'LinkedIn Outreach', 'Data Analysis',
    'Cold Calling', 'Sales Strategy', 'Customer Acquisition', 'Revenue Growth'
  ];

  const experiences = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automatisation Commerciale",
      description: "5+ années d'expérience dans l'automatisation des processus de vente et la génération de leads qualifiés."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Gestion de Données",
      description: "Expertise dans l'analyse et la segmentation de bases de données pour optimiser les campagnes de prospection."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Stratégie Commerciale",
      description: "Développement de stratégies sur-mesure pour maximiser le ROI des activités de prospection B2B."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Outils Technologiques",
      description: "Maîtrise des plateformes CRM, d'automatisation marketing et d'outils de prospection avancés."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">À propos de moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionné par l'innovation commerciale, je transforme les défis de prospection 
            en opportunités de croissance pour les entreprises B2B.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Mon expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Avec plus de 5 années d'expérience dans le domaine de la prospection commerciale, 
                je me spécialise dans l'automatisation intelligente des processus de vente B2B. 
                Mon approche combine stratégie commerciale, technologie avancée et analyse de données 
                pour générer des résultats mesurables.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Je travaille avec des entreprises de toutes tailles pour optimiser leurs entonnoirs 
                de vente, améliorer leur taux de conversion et automatiser leurs campagnes de prospection 
                tout en maintenant une approche personnalisée.
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
          <h3 className="mb-4">Ma mission</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "Transformer chaque interaction commerciale en opportunité de croissance 
            grâce à l'automatisation intelligente et une approche data-driven."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;