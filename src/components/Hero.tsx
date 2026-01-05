import { Button } from "@/components/ui/button";
import { MapPin, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center px-4 py-32 md:py-40">
        <div className="animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-accent/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground/80">Petit-Lancy, Genève</span>
          </div>

          {/* Business name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
            A.S.
            <span className="block text-primary">Dépannages</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Votre expert en serrurerie, sécurité et constructions métalliques à Genève et Vaud
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <a href="#services">
                <Shield className="h-5 w-5" />
                Nos Services
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Nous Contacter</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#a-propos" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
