"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Phone, 
  Settings, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Prospection B2B Automatisée",
      description: "Mise en place de systèmes automatisés pour identifier et qualifier vos prospects idéaux",
      features: ["Lead scoring intelligent", "Segmentation avancée", "Suivi multicanal", "ROI optimisé"],
      price: "À partir de 2500€",
      popular: true
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automatisation Marketing",
      description: "Création de workflows personnalisés pour nurturing et conversion de leads",
      features: ["Email sequences", "Triggers comportementaux", "Landing pages", "Analytics avancés"],
      price: "À partir de 1800€",
      popular: false
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Optimisation CRM",
      description: "Configuration et optimisation de votre CRM pour maximiser l'efficacité commerciale",
      features: ["Pipeline management", "Reporting personnalisé", "Intégrations", "Formation équipe"],
      price: "À partir de 1200€",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Formation Commerciale",
      description: "Formation de vos équipes aux techniques de prospection modernes",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing B2B",
      description: "Campagnes d'emailing ciblées avec taux d'ouverture optimisés",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Cold Calling Strategy",
      description: "Scripts et stratégies pour améliorer vos taux de conversion téléphoniques",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Audit Commercial",
      description: "Analyse complète de vos processus commerciaux et recommandations",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Hacking B2B",
      description: "Techniques innovantes pour accélérer votre croissance commerciale",
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
          <h2 className="mb-4">Services de Prospection B2B</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformez votre approche commerciale avec mes solutions d'automatisation 
            et de prospection B2B sur-mesure, conçues pour maximiser vos résultats.
          </p>
        </div>

        {/* Services Principaux */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className={`relative card-hover ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                  Le plus populaire
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
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button 
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Additionnels */}
        <div className="bg-muted/20 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="mb-4">Services Complémentaires</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complétez votre stratégie commerciale avec ces services spécialisés 
              pour une approche globale et performante.
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
              Discuter de vos besoins
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <h3 className="mb-4 text-white">Prêt à transformer votre prospection ?</h3>
          <p className="mb-6 text-white/80 max-w-2xl mx-auto">
            Contactez-moi dès aujourd'hui pour un audit gratuit de vos processus commerciaux 
            et découvrez comment automatiser votre prospection B2B.
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToContact}>
            Audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;