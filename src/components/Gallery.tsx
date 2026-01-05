import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="galerie" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Nos Réalisations</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg">
            Découvrez quelques exemples de nos travaux en serrurerie et métallerie
          </p>
        </div>

        {/* Main image */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={images[currentIndex]}
              alt={`Réalisation ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={goToPrev}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Voir l'image ${index + 1}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
