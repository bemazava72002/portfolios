"use client";

import { 
  Badge 
} from '@/components/ui/badge';
import { 
  Button 
} from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

import {
  Users, Camera, PenSquare, Share2, CheckCircle, ArrowRight, Link
} from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Création de Contenu Visuel",
      description: "Conception de visuels et vidéos impactants pour vos réseaux sociaux.",
      features: [
        "Shooting photo & retouche",
        "Montage vidéo dynamique",
        "Design Canva & Photoshop",
        "Stories et reels optimisés"
      ],
      popular: true
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Animation de Communauté",
      description: "Gestion et animation de vos pages pour engager et fidéliser votre audience.",
      features: [
        "Réponses aux commentaires & messages",
        "Jeux concours & sondages",
        "Calendrier éditorial personnalisé",
        "Analyse des statistiques d’engagement"
      ],
      popular: false
    },
    {
      icon: <PenSquare className="h-8 w-8" />,
      title: "Stratégie Réseaux Sociaux",
      description: "Définition et mise en place de votre image de marque digitale.",
      features: [
        "Audit de présence en ligne",
        "Positionnement de contenu",
        "Cibles & objectifs clairs",
        "Optimisation des bios & hashtags"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Planification & publication",
      description: "Programmation de contenu multicanal (Facebook, Instagram, TikTok)."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Veille et modération",
      description: "Suivi des tendances, modération des messages/commentaires."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Reels & Shorts",
      description: "Création de vidéos courtes au format viral pour booster votre visibilité."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nos services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous vous aidons à construire une présence digitale authentique, engageante et cohérente sur vos réseaux sociaux, tout en valorisant votre identité de marque.
          </p>
        </div>

        {/* Services Principaux */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className={`relative card-hover ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                  Le plus demandé
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button className="w-full" onClick={scrollToContact}>
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Complémentaires */}
        <div className="bg-muted/20 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="mb-4">Autres prestations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous proposons également des services à la carte pour vous accompagner au quotidien dans votre communication digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                      <div className="text-accent">{service.icon}</div>
                    </div>
                    <h3 className="font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={scrollToContact}>
              Discutons ensemble
            </Button>
          </div>
        </div>

        {/* Réseaux Sociaux */}
        
      </div>
    </section>
  );
};

export default ServicesSection;
