import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Contactez-Nous</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg">
            N'hésitez pas à nous contacter pour toute demande de devis ou d'information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Adresse
                  </h3>
                  <p className="text-muted-foreground">
                    Avenue du Petit-Lancy 19<br />
                    1213 Petit-Lancy<br />
                    Suisse
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+41227937022"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +41 22 793 70 22
                  </a>
                  <a
                    href="tel:+41794168170"
                    className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                  >
                    +41 79 416 81 70
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:leutwylerch@bluewin.ch"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    leutwylerch@bluewin.ch
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-accent/10">
              <h3 className="font-display text-lg font-semibold mb-4">
                Zones d'Intervention
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous intervenons dans les <strong>cantons de Genève et Vaud</strong> ainsi
                que dans toute la <strong>Suisse romande</strong>. Contactez-nous pour connaître
                nos délais d'intervention dans votre région.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card overflow-hidden aspect-square md:aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.5!2d6.116285!3d46.192697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzMzLjciTiA2wrAwNic1OC42IkU!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte A.S. Dépannages"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
