"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown, Target, TrendingUp, Users } from 'lucide-react';

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
              Expert en <span className="gradient-text">Prospection B2B</span> & Automatisation Commerciale
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Je transforme vos processus de prospection en machines à générer des leads qualifiés. 
              Spécialisé dans l'automatisation intelligente et les stratégies B2B performantes.
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
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Leads générés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-sm text-muted-foreground">Taux de conversion</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-green-500">50+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
                <div className="text-center mb-6">
                    
                  <img className='w-22 h-22 mx-auto mb-6 rounded-full flex items-center justify-center' src="/jessica.jpg"  alt="" />
                  
                  <h3 className="font-semibold">Votre Expert en Prospection</h3>
                  <p className="text-muted-foreground">Spécialiste en automatisation commerciale</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Prospection automatisée</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Lead scoring avancé</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">CRM optimisé</span>
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