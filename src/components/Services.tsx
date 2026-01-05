import { Lock, DoorOpen, Hammer, Archive, Shield, Key } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Serrurerie Complète",
      description: "Ouverture de portes, installation de serrures renforcées, multipoints, cylindres, ferme-portes, et tous systèmes de sécurité.",
    },
    {
      icon: Hammer,
      title: "Constructions Métalliques",
      description: "Barrières, portails, portes de garage, grillages, abris vélos, conteneurs, ferronnerie sur mesure en acier, aluminium, inox.",
    },
    {
      icon: Archive,
      title: "Coffres-Forts",
      description: "Armoires, coffres muraux, coffres à clés, coffres à armes. Installation et conseil personnalisé pour votre sécurité.",
    },
    {
      icon: Shield,
      title: "Sécurité & Protection",
      description: "Barres de sécurité, rosaces de sécurité, portes blindées, portes coupe-feu, systèmes anti-effraction et protection complète.",
    },
    {
      icon: Key,
      title: "Clés & Cylindres",
      description: "Reproduction de clés, clés SOS, longue entrée, cylindres de toutes marques, systèmes de clés maîtresses.",
    },
    {
      icon: Lock,
      title: "Entretien & Contrats",
      description: "Contrats d'entretien pour bâtiments, maintenance préventive, conseils et devis personnalisés pour tous vos projets.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Nos Services</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour tous vos besoins en serrurerie, sécurité et métallerie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
