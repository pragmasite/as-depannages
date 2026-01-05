const brands = [
  "Tilca", "Terza", "BKS", "Yale", "Abus", "Dorma",
  "Geze", "SFS", "Hebgo", "Kaba", "Keso", "Ikon",
  "Zeiss Ikon", "Schanis", "Simons", "Glutz", "MSL", "Mottura",
  "Loctite", "Egli Fischer", "Metabo", "Hebor", "Promac", "Multilock",
  "Fichet", "Abus Medeco", "Dom", "Wilka", "Renz", "Forster",
  "Gitterrost Drawag", "Jansen", "Velopa", "Muel"
];

const Brands = () => {
  return (
    <section id="marques" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Marques Partenaires</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Nous travaillons avec les marques les plus réputées du secteur pour vous garantir
            qualité, fiabilité et durabilité
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-lift flex items-center justify-center min-h-[100px]"
            >
              <span className="font-display text-base md:text-lg font-medium text-foreground/90">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
