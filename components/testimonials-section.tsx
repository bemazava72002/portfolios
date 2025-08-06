"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MessageCircle, Send, User } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

interface Comment {
  _id: string;
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
    name: "",
    company: "",
    role: "",
    content: "",
    rating: 5,
  });
  const [commentForm, setCommentForm] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    fetchTestimonials();
    fetchComments();
  }, []);

  async function fetchTestimonials() {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      setTestimonials(data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchComments() {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data);
    } catch (e) {
      console.error(e);
    }
  }

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      });

      if (!res.ok) throw new Error();

      toast.success("Témoignage ajouté !");
      setShowTestimonialForm(false);
      setTestimonialForm({
        name: "",
        company: "",
        role: "",
        content: "",
        rating: 5,
      });
      fetchTestimonials();
    } catch {
      toast.error("Erreur lors de l'ajout du témoignage");
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
      });

      if (!res.ok) throw new Error();

      toast.success("Commentaire ajouté !");
      setShowCommentForm(false);
      setCommentForm({ name: "", content: "" });
      fetchComments();
    } catch {
      toast.error("Erreur lors de l'ajout du commentaire");
    }
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Avis & Témoignages Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos services en community management aident les marques à se démarquer sur les réseaux sociaux grâce à des stratégies de contenu sur mesure, une animation de communauté engageante et une gestion cohérente de leur image en ligne. Voici ce que nos clients en pensent.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial._id} className="card-hover">
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
                  {testimonial.date ? new Date(testimonial.date).toLocaleDateString("fr-FR") : ""}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button onClick={() => setShowTestimonialForm(true)} className="mr-4">
            Laisser un témoignage sur mes services
          </Button>
          <Button variant="outline" onClick={() => setShowCommentForm(true)}>
            <MessageCircle className="mr-2 h-4 w-4" /> Partager un commentaire
          </Button>
        </div>

        {showTestimonialForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3>Ajouter un témoignage sur mes services</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Votre nom"
                    required
                    value={testimonialForm.name}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  />
                  <Input
                    placeholder="Entreprise ou organisation"
                    required
                    value={testimonialForm.company}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                  />
                </div>
                <Input
                  placeholder="Votre poste (ex : Gérant, Responsable marketing...)"
                  required
                  value={testimonialForm.role}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                />
                <Textarea
                  placeholder="Partagez votre expérience avec mes services de community management..."
                  rows={4}
                  required
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Note :</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setTestimonialForm({ ...testimonialForm, rating: i + 1 })}
                      >
                        <Star className={`h-5 w-5 ${i < testimonialForm.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" /> Publier
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowTestimonialForm(false)}>
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {showCommentForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3>Laisser un commentaire</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <Input
                  placeholder="Votre nom"
                  required
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                />
                <Textarea
                  placeholder="Un retour sur mes contenus ou services ?"
                  rows={3}
                  required
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                />
                <div className="flex gap-2">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" /> Publier
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowCommentForm(false)}>
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {comments.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-6 text-center">Commentaires</h3>
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment._id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-medium">{comment.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {comment.date ? new Date(comment.date).toLocaleDateString("fr-FR") : ""}
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
