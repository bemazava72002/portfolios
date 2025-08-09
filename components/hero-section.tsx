"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-6 md:px-12 py-16"
    >
      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-[10px] items-center">
        
        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-in-top">
          <div className="w-52 h-58 rounded-full mt-20 mb-20 overflow-hidden  ">
            <img
              src="./jess.jpg"
              alt="Jessica Rakotozafy"
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Bonjour, je suis <span className="gradient-text">Jessica</span>,<br />
            <span className="gradient-text">Community Manager</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Je vous accompagne dans la création de contenus authentiques, l’animation de vos réseaux, et le développement de votre communauté en ligne avec passion et créativité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <a href="./CV-Jessica-Rakotozafy .pdf" download>
            <Button size="lg" className="transition-all duration-300 hover:scale-105">
              Télécharger mon CV
            </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-all duration-300 hover:scale-105"
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Me contacter
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
