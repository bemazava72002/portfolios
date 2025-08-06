"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  FacebookIcon,
  Instagram,
  Music2 // utilisé comme icône TikTok alternative
} from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message envoyé avec succès ! Je vous recontacte sous 24h.");
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        budget: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "jessicapixelsior@gmail.com",
      link: "mailto:jessicapixelsior@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      content: "+06 2 89 06 27 6",
      link: "tel:+0628906276"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localisation",
      content: "85 rue d'Épinay, 95360 Montmagny",
      link: null
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Disponibilité",
      content: "Lun - Ven, 9h - 18h",
      link: null
    }
  ];

  const services = [
    "Création de contenu visuel & rédactionnel",
    "Gestion de réseaux sociaux (Instagram, Facebook, LinkedIn...)",
    "Stratégie de communication digitale",
    "Montage vidéo",
    "Création de site internet WordPress",
    "Photographie & visuels événementiels",
    "Animation de communauté",
    "Audit de présence en ligne",
    "Veille et modération"
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon className="h-4 w-4" />,
      label: "Facebook",
      href: "https://www.facebook.com/share/19f6pBKoTB/?mibextid=wwXIfr"
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      label: "Instagram",
      href: "https://www.instagram.com/pixelforce_jessrakoto?igsh=MXRyYzhjaThyb2hzcQ%3D%3D&utm_source=qr"
    },
    {
      icon: <Music2 className="h-4 w-4" />,
      label: "TikTok",
      href: "https://www.tiktok.com/@pixelforcejessrakoto?_t=ZN-8yNUB6n8bVS&_r=1"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contactez-moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez besoin d’un accompagnement en communication digitale ou community management ? Discutons ensemble de vos besoins pour développer votre présence en ligne.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Demande de contact
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et je vous recontacte sous 24h pour échanger sur votre projet.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Nom complet *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email professionnel *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="company"
                      placeholder="Entreprise (optionnel)"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="budget"
                      placeholder="Budget estimé"
                      value={formData.budget}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Input
                    name="subject"
                    placeholder="Objet de votre demande *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder="Décrivez votre projet (type de contenu, réseaux souhaités, objectifs...) *"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Services souhaités :</h3>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Infos de contact & Avantages */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <div className="text-primary">{info.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pourquoi travailler avec moi ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Réponse rapide (sous 24h)",
                  "Approche humaine et personnalisée",
                  "Expérience terrain & sens artistique",
                  "Adaptée aux TPE, PME et associations",
                  "Suivi et accompagnement réguliers",
                  "Contenus créatifs et impactants"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2 text-white">Mes réseaux sociaux</h3>
                <p className="text-white/80 text-sm mb-4">
                  Retrouvez mes dernières créations et projets en ligne.
                </p>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
