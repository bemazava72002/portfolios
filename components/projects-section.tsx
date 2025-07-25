"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Target, Users, Mail } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automatisation Prospection SaaS",
      description: "Mise en place d'un système complet de prospection automatisée pour une startup SaaS B2B, générant 300+ leads qualifiés par mois.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Automatisation", "Lead Generation", "SaaS", "CRM"],
      metrics: [
        { icon: <Target className="h-4 w-4" />, value: "300+", label: "Leads/mois" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "85%", label: "Taux de conversion" },
        { icon: <Mail className="h-4 w-4" />, value: "45%", label: "Taux d'ouverture" }
      ],
      client: "TechCorp Solutions"
    },
    {
      title: "Optimisation CRM Enterprise",
      description: "Refonte complète du processus commercial d'une entreprise de 200+ employés avec intégration multi-plateforme et reporting avancé.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["CRM", "Integration", "Analytics", "Enterprise"],
      metrics: [
        { icon: <Users className="h-4 w-4" />, value: "200+", label: "Utilisateurs" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "60%", label: "Productivité" },
        { icon: <Target className="h-4 w-4" />, value: "12M€", label: "Pipeline" }
      ],
      client: "Global Industries"
    },
    {
      title: "Campaign LinkedIn B2B",
      description: "Stratégie de prospection LinkedIn multi-touch avec séquences personnalisées, générant un ROI de 450% sur 6 mois.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["LinkedIn", "Social Selling", "Outreach", "ROI"],
      metrics: [
        { icon: <TrendingUp className="h-4 w-4" />, value: "450%", label: "ROI" },
        { icon: <Users className="h-4 w-4" />, value: "1200+", label: "Prospects" },
        { icon: <Target className="h-4 w-4" />, value: "25%", label: "Taux de réponse" }
      ],
      client: "Marketing Pro"
    },
    {
      title: "Email Marketing Automation",
      description: "Création d'un funnel de nurturing automatisé avec scoring comportemental, augmentant le taux de conversion de 120%.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Email Marketing", "Automation", "Nurturing", "Scoring"],
      metrics: [
        { icon: <Mail className="h-4 w-4" />, value: "120%", label: "Conversion" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "65%", label: "Open Rate" },
        { icon: <Target className="h-4 w-4" />, value: "18%", label: "Click Rate" }
      ],
      client: "BusinessGrow"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Projets Réalisés</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment j'ai aidé mes clients à transformer leur prospection 
            et à générer des résultats mesurables grâce à l'automatisation.
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
                
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mb-2 mx-auto">
                        <div className="text-primary">{metric.icon}</div>
                      </div>
                      <div className="font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Intéressé par voir plus de détails sur ces projets ?
          </p>
          <Button size="lg" onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;