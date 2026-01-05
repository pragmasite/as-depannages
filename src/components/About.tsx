import { Clock, Shield, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Dépannages d'Urgence",
      description: "Interventions rapides 24/7 pour effractions, cambriolages, vols ou clés perdues. Nous sommes là quand vous avez besoin de nous.",
    },
    {
      icon: Wrench,
      title: "Expertise Complète",
      description: "Serrurerie professionnelle, constructions métalliques sur mesure, et installation de systèmes de sécurité avancés.",
    },
    {
      icon: Clock,
      title: "Service Régional",
      description: "Nous intervenons dans les cantons de Genève et Vaud ainsi que dans toute la Suisse romande avec réactivité.",
    },
  ];

  return (
    <section id="a-propos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Votre Partenaire Sécurité</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A.S. Dépannages est votre spécialiste de confiance pour tous vos besoins en serrurerie,
            sécurité et constructions métalliques. Avec notre expertise reconnue et nos interventions
            rapides, nous protégeons ce qui compte pour vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center hover-lift">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
