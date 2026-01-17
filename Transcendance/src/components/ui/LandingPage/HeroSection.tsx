import { Search } from "lucide-react";
import { Button } from '@mui/material'


const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-coral mb-6">
          <span className="text-coral">Register</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-accent">Local</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-coral-light">Freelance</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-bla leading-tight mb-6 max-w-4xl mx-auto">
          Trouvez le bon professionnel,
          <br />
          au bon endroit, au bon moment
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto">
          Trouvez, contactez et collaborez avec les meilleurs prestataires, en quelques clics.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center bg-background rounded-full shadow-lg border border-border overflow-hidden">
            <input
              type="text"
              placeholder="Rechercher des prestataires"
              className="flex-1 px-6 py-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none bg-transparent"
            />
            <Button className="bg-coral hover:bg-coral-light text-primary-foreground rounded-full m-1.5 px-6 py-3 h-auto flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Rechercher</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
