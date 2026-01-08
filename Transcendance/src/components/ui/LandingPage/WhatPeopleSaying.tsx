import { Star } from "lucide-react";

const WhatPeopleSaying = () => {
  const testimonials = [
    {
      quote: "J'ai trouvé un mécanicien fiable près de chez moi en quelques minutes. Le service était rapide et professionnel.",
      author: "Jean, Rabourenne",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      quote: "M'kandra m'a permis de me visibilité facilement en mettant en valeur mes services. Les avis m'ont aidé à faire le bon choix.",
      author: "Sarah, Fleuristes",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      quote: "Excellente application pour trouver des métiers du bâtiment et services personnalisés.",
      author: "Marie, Passionées",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12">
          What people are saying
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-2xl ${testimonial.color} hover:scale-110 transition-transform duration-300 text-primary-foreground relative overflow-hidden`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-sm text-gray-500 md:text-base leading-relaxed mb-4 opacity-95">
                "{testimonial.quote}"
              </blockquote>

              <p className="text-sm font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSaying;
