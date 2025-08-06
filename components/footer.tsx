"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  FacebookIcon,
  Instagram,
  Music2
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projets' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    "Création de contenu",
    "Montage vidéo",
    "Gestion des réseaux sociaux",
    "Stratégie digitale",
    "Création de site WordPress"
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon className="h-5 w-5" />,
      href: "https://www.facebook.com/share/19f6pBKoTB/?mibextid=wwXIfr",
      label: "Facebook"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/pixelforce_jessrakoto?igsh=MXRyYzhjaThyb2hzcQ%3D%3D&utm_source=qr",
      label: "Instagram"
    },
    {
      icon: <Music2 className="h-5 w-5" />,
      href: "https://www.tiktok.com/@pixelforcejessrakoto?_t=ZN-8yNUB6n8bVS&_r=1",
      label: "TikTok"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="font-bold text-xl gradient-text mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Community Manager passionnée, nous vous accompagnons dans le développement de votre visibilité en ligne grâce à des contenus créatifs, des réseaux sociaux bien gérés et une stratégie digitale sur mesure.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                jessicapixelsior@gmail.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +06 2 89 06 27 6
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                85 rue d’Épinay, 95360 Montmagny
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="text-sm text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-moi</h3>
            <div className="flex gap-2 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10"
                  >
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <Badge className="bg-primary text-primary-foreground">
                Réponse garantie sous 24h
              </Badge>
              <div className="text-sm text-muted-foreground">
                Prêt à booster votre présence en ligne ?
              </div>
              <Button
                size="sm"
                className="w-full"
                onClick={() => scrollToSection('#contact')}
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} Portfolio Jessica. Tous droits réservés.</span>
              <span className="hidden md:inline">•</span>
             
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <button className="hover:text-primary transition-colors">
                  Mentions légales
                </button>
                <button className="hover:text-primary transition-colors">
                  Confidentialité
                </button>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="w-8 h-8"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
