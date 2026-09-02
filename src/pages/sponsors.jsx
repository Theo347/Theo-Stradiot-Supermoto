import { Link } from 'react-router-dom';

export default function sponsors() {
  // Liste des sponsors actifs (vide pour le moment)
  const sponsors = [];

  return (
    <section className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase text-white">
            Mes <span className="text-[#CC0000]">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 font-semibold max-w-2xl mx-auto">
            Découvrez les entreprises et marques qui me soutiennent pour la saison 2026.
          </p>
        </div>

        {/* État vide si 0 sponsor */}
        {sponsors.length === 0 ? (
          <div 
            className="bg-[#111111] border border-gray-800 rounded-2xl p-10 sm:p-14 text-center max-w-3xl mx-auto shadow-2xl"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Pas de sponsors pour l'instant
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
              La saison se prépare ! Vous souhaitez rejoindre l'aventure et afficher votre marque à mes côtés ?
            </p>

            {/* Bouton redirigeant vers la page Partenaires */}
            <div className="flex justify-center">
              <Link 
                to="/partenaires" 
                className="bg-[#CC0000] hover:bg-red-800 text-white font-extrabold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-900/30 inline-block"
              >
                Devenir Partenaire
              </Link>
            </div>
          </div>
        ) : (
          /* Grille d'affichage des sponsors (prête pour plus tard) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="bg-[#111111] border border-gray-800 hover:border-[#CC0000] rounded-2xl p-6 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-20 mx-auto object-contain mb-4" 
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                </div>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC0000] hover:underline font-bold text-sm"
                  >
                    Visiter le site web →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}