"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, MessageCircle, Send, User } from 'lucide-react';
import { toast } from 'sonner';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5
  });
  const [commentForm, setCommentForm] = useState({
    name: '',
    content: ''
  });

  // Testimonials prédéfinis
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Martin',
      company: 'TechStart Pro',
      role: 'Directrice Marketing',
      content: 'Grâce à l\'automatisation mise en place, nous avons multiplié par 3 notre génération de leads qualifiés. Les résultats ont dépassé toutes nos attentes !',
      rating: 5,
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Pierre Dubois',
      company: 'InnovaCorp',
      role: 'CEO',
      content: 'Une approche professionnelle et des résultats concrets. Notre pipeline commercial n\'a jamais été aussi performant. Je recommande vivement !',
      rating: 5,
      date: '2024-01-10'
    },
    {
      id: '3',
      name: 'Marie Lambert',
      company: 'Digital Solutions',
      role: 'Responsable Commercial',
      content: 'L\'optimisation de notre CRM nous a fait gagner un temps précieux. L\'équipe est maintenant 60% plus productive.',
      rating: 5,
      date: '2024-01-05'
    }
  ];

  useEffect(() => {
    // Charger les témoignages depuis localStorage
    const savedTestimonials = localStorage.getItem('testimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      setTestimonials(defaultTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
    }

    // Charger les commentaires depuis localStorage
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      ...testimonialForm,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedTestimonials = [newTestimonial, ...testimonials];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    setTestimonialForm({
      name: '',
      company: '',
      role: '',
      content: '',
      rating: 5
    });
    setShowTestimonialForm(false);
    
    toast.success('Témoignage ajouté avec succès !');
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newComment: Comment = {
      id: Date.now().toString(),
      ...commentForm,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    setCommentForm({
      name: '',
      content: ''
    });
    setShowCommentForm(false);
    
    toast.success('Commentaire ajouté avec succès !');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Témoignages Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que mes clients disent de leur expérience et des résultats obtenus 
            grâce à mes solutions de prospection B2B.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">{testimonial.content}</p>
                </div>
                <div className="text-xs text-muted-foreground mt-4">
                  {new Date(testimonial.date).toLocaleDateString('fr-FR')}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={() => setShowTestimonialForm(true)}
            className="mr-4"
          >
            Ajouter un témoignage
          </Button>
          <Button 
            variant="outline"
            onClick={() => setShowCommentForm(true)}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Laisser un commentaire
          </Button>
        </div>

        {/* Testimonial Form */}
        {showTestimonialForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3>Ajouter un témoignage</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Votre nom"
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm({...testimonialForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Votre entreprise"
                      value={testimonialForm.company}
                      onChange={(e) => setTestimonialForm({...testimonialForm, company: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <Input
                  placeholder="Votre poste"
                  value={testimonialForm.role}
                  onChange={(e) => setTestimonialForm({...testimonialForm, role: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Votre témoignage..."
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({...testimonialForm, content: e.target.value})}
                  rows={4}
                  required
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Note :</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setTestimonialForm({...testimonialForm, rating: i + 1})}
                      >
                        <Star 
                          className={`h-5 w-5 ${i < testimonialForm.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Publier
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowTestimonialForm(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Comment Form */}
        {showCommentForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3>Laisser un commentaire</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <Input
                  placeholder="Votre nom"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Votre commentaire..."
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({...commentForm, content: e.target.value})}
                  rows={3}
                  required
                />
                <div className="flex gap-2">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Publier
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowCommentForm(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Comments Section */}
        {comments.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-6 text-center">Commentaires</h3>
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-medium">{comment.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {new Date(comment.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground pl-11">{comment.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;