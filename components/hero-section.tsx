"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown, HeartHandshake, Users, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 leading-tight">
              Expert en <span className="gradient-text">Community Management</span> & Stratégies de Contenu
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Je crée, anime et développe votre communauté en ligne avec des stratégies engageantes, des contenus impactants et une gestion de réputation efficace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#services')}
                className="transition-all duration-300 hover:scale-105"
              >
                Découvrir mes services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="transition-all duration-300 hover:scale-105"
              >
                Me contacter
              </Button>
            </div>
            
           
          </div>
          
          <div className="animate-slide-up lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
                <div className="text-center mb-6">
                  <img 
                    className="w-auto h-28 mx-auto mb-6 rounded-full shadow-lg ring-2 ring-gray-300 object-cover" 
                    src="/jess.jpg" 
                    alt="Photo de profil"
                  />
                  <h3 className="font-semibold">Votre Community Manager</h3>
                  <p className="text-muted-foreground">Spécialiste en animation de communauté</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Création de contenu</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Animation de communauté</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Veille & modération</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
