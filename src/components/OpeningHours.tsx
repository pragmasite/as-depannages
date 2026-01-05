import { Clock } from "lucide-react";

const openingHours = [
  { day: "Lundi", hours: "07:00 - 12:00, 13:00 - 17:00" },
  { day: "Mardi", hours: "07:00 - 12:00, 13:00 - 17:00" },
  { day: "Mercredi", hours: "07:00 - 12:00, 13:00 - 17:00" },
  { day: "Jeudi", hours: "07:00 - 12:00, 13:00 - 17:00" },
  { day: "Vendredi", hours: "07:00 - 12:00, 13:00 - 17:00" },
  { day: "Samedi", hours: "Fermé" },
  { day: "Dimanche", hours: "Fermé" },
];

const OpeningHours = () => {
  return (
    <section id="horaires" className="section-padding">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Horaires d'Ouverture</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg">
            Dépannages d'urgence disponibles 24h/24 et 7j/7
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="bg-primary/10 px-6 py-4 flex items-center gap-3 border-b border-border">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-display font-semibold text-lg">
                Horaires du Bureau
              </span>
            </div>
            <div className="divide-y divide-border">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 flex justify-between items-center ${
                    item.hours.includes("Fermé")
                      ? "text-muted-foreground"
                      : ""
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="glass-card p-6 bg-accent/10">
              <p className="font-display text-lg font-semibold text-primary mb-2">
                Urgences 24/7
              </p>
              <p className="text-muted-foreground text-sm">
                Pour les dépannages urgents suite à effraction, vol ou perte de clés,
                nous intervenons à toute heure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
