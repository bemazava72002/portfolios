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
  Linkedin,
  MessageSquare
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

    // Simulation d'envoi
    setTimeout(() => {
      toast.success('Message envoyé avec succès ! Je vous recontacte sous 24h.');
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
    "Prospection B2B automatisée",
    "Optimisation CRM",
    "Email marketing",
    "Formation commerciale",
    "Audit commercial",
    "Growth hacking B2B",
    "Création de contenu",
    "montage vidéo",
    "création de site internet WordPress"
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contactez-moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à transformer votre prospection ? Discutons de votre projet 
            et découvrons ensemble comment optimiser vos résultats commerciaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Demande de contact
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et je vous recontacte sous 24h pour discuter de vos besoins.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Nom complet *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email professionnel *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="company"
                        placeholder="Entreprise"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Input
                        name="budget"
                        placeholder="Budget approximatif"
                        value={formData.budget}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Sujet de votre demande *"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Décrivez votre projet et vos objectifs... *"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Services demandés :</h3>
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
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
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

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
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
                <CardTitle>Pourquoi me choisir ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Réponse sous 24h garantie",
                  "Audit gratuit inclus",
                  "5+ années d'expérience",
                  "ROI mesurable et prouvé",
                  "Support continu",
                  "Satisfaction client 100%"
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
                <h3 className="font-semibold mb-2 text-white">Audit gratuit</h3>
                <p className="text-white/80 text-sm mb-4">
                  Bénéficiez d'un audit gratuit de vos processus commerciaux
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Me contacter sur LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;