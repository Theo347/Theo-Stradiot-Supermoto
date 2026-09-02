import { useState } from 'react';
import { getEventStatus, getDaysRemaining, getSortedEvents, getGoogleCalendarUrl, downloadICS, getStatusBadgeStyle } from '../utils/calendarUtils';

// Liste des événements (facile à enrichir manuellement)
const events = [
  {
    id: 1,
    title: "39ème Superbiker de Mettet",
    dateDisplay: "9 - 11 Octobre 2026",
    startDateISO: "2026-10-09",
    endDateISO: "2026-10-11",
    location: "Circuit Jules Tacheny, Mettet",
    country: "be",
    countryName: "Belgique",
    type: "Compétition",
    description: "Objectif majeur de la saison ! Participation aux qualifications du mythique Superbiker.",
    link: "https://www.superbiker.com"
  },
  {
    id: 2,
    title: "Mettet - 1er manche du championnat de Belgique",
    dateDisplay: "7 - 8 Mars 2026",
    startDateISO: "2026-03-07",
    endDateISO: "2026-03-08",
    location: "Circuit Jules Tacheny, Mettet",
    country: "be",
    countryName: "Belgique",
    type: "Compétition",
    description: "Première manche du championnat de Belgique.",
    link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-10/"
  },
  {
    id: 3,
    title: "Chimay - 2ème manche du championnat de Belgique",
    dateDisplay: "11 - 12 Avril 2026",
    startDateISO: "2026-04-11",
    endDateISO: "2026-04-12",
    location: "Circuit du Chimay",
    country: "be",
    countryName: "Belgique",
    type: "Compétition",
    description: "Deuxième manche du championnat de Belgique.",
    link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-12/"
  },
  {
    id: 4,
    title: "Bilstain - 3ème manche du championnat de Belgique",
    dateDisplay: "9 - 10 Mai 2026",
    startDateISO: "2026-05-09",
    endDateISO: "2026-05-10",
    location: "Le Domaine Bilstain",
    country: "be",
    countryName: "Belgique",
    type: "Compétition",
    description: "Troisième manche du championnat de Belgique.",
    link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-13/"
  },
  {
    id: 5,
    title: "Battice - 4ème manche du championnat de Belgique",
    dateDisplay: "19 - 20 Septembre 2026",
    startDateISO: "2026-09-19",
    endDateISO: "2026-09-20",
    location: "Battice - Herve",
    country: "be",
    countryName: "Belgique",
    type: "Compétition",
    description: "Quatrième manche du championnat de Belgique.",
    link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-15/"
  },
  {
    id: 6,
    title: "Val D'argenton (79) - 1er manche du championnat de France",
    dateDisplay: "25 - 26 Avril 2026",
    startDateISO: "2026-04-25",
    endDateISO: "2026-04-26",
    location: "Circuit du Val d'argenton",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Première manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54371"
  },
  {
    id: 7,
    title: "Lohéac (35) - 2ème manche du championnat de France",
    dateDisplay: "6 - 7 Juin 2026",
    startDateISO: "2026-06-06",
    endDateISO: "2026-06-07",
    location: "Circuit de Lohéac",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Deuxième manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54372"
  },
  {
    id: 8,
    title: "Rouen (74) - 3ème manche du championnat de France",
    dateDisplay: "4 - 5 juillet 2026",
    startDateISO: "2026-07-04",
    endDateISO: "2026-07-05",
    location: "Circuit de Rouen",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Troisième manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54373"
  },
  {
    id: 9,
    title: "Saint-Amand-Colombiers (18) - 4ème manche du championnat de France",
    dateDisplay: "25 - 26 Juillet 2026",
    startDateISO: "2026-07-25",
    endDateISO: "2026-07-26",
    location: "Circuit Saint-Amand-Colombiers",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Quatrième manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54374"
  },
  {
    id: 10,
    title: "Circuit d'Albi - 5ème manche du championnat de France",
    dateDisplay: "29 - 30 Août 2026",
    startDateISO: "2026-08-29",
    endDateISO: "2026-08-30",
    location: "Circuit d'Albi",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Cinquième manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54375"
  },
  {
    id: 11,
    title: "Villard-Sous-Écot - 6ème manche du championnat de France",
    dateDisplay: "12 - 13 Septembre 2026",
    startDateISO: "2026-09-12",
    endDateISO: "2026-09-13",
    location: "Circuit Villard-Sous-Écot",
    country: "fr",
    countryName: "France",
    type: "Compétition",
    description: "Sixième manche du championnat de France.",
    link: "https://www.supermotard-france.fr/?epreuve=54376"
  },
  {
    id: 12,
    title: "Supermoto of Nations - 2026",
    dateDisplay: "26 - 27 Septembre 2026",
    startDateISO: "2026-09-26",
    endDateISO: "2026-09-27",
    location: "ADAC Circuit St. Wendel",
    country: "de",
    countryName: "Allemagne",
    type: "Compétition",
    description: "The 2026 FIM Supermoto of Nations is ready to bring the world’s best riders and national teams together for one epic weekend.",
    link: "https://www.supermotos1gp.com/event/gp_germany_st-wendel/"
  }
];

export default function Calendrier() {
  const [filter, setFilter] = useState('all');

  const sortedEvents = getSortedEvents(events);

  const filteredEvents = sortedEvents.filter((event) => {
    const status = getEventStatus(event.startDateISO, event.endDateISO);
    if (filter === 'upcoming') return status === "À venir" || status === "En ce moment même";
    if (filter === 'past') return status === "Terminé";
    return true;
  });

  return (
    <section className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase">
            Calendrier <span className="text-[#CC0000]">Saison 2026</span>
          </h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-100 font-semibold max-w-2xl mx-auto">
            Retrouvez les prochaines dates de compétitions et événements à venir.
          </p>
        </div>

        {/* Filtrage */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap" data-aos="fade-up">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-900/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            Tous ({events.length})
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'upcoming'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-900/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            À venir & En cours
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'past'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-900/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            Terminés
          </button>
        </div>

        {/* Grille d'événements */}
        {filteredEvents.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            Aucun événement dans cette catégorie pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const status = getEventStatus(event.startDateISO, event.endDateISO);
              const daysRemaining = status === "À venir" ? getDaysRemaining(event.startDateISO || event.endDateISO) : null;

              return (
                <div 
                  key={event.id}
                  className={`bg-[#111111] rounded-2xl p-6 border flex flex-col justify-between transition-all group ${
                    status === "Terminé" 
                      ? "border-gray-900 opacity-75 hover:opacity-100" 
                      : "border-gray-800 hover:border-[#CC0000]"
                  }`}
                  data-aos="fade-up"
                >
                  <div>
                    {/* Header Carte : Type & Statut */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#CC0000]/10 text-[#CC0000] border border-[#CC0000]/30">
                        {event.type}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {daysRemaining && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-900/40 text-blue-300 border border-blue-500/30">
                            ⏳ {daysRemaining}
                          </span>
                        )}

                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${getStatusBadgeStyle(status)}`}>
                          {status}
                        </span>
                      </div>
                    </div>

                    {/* Informations principales */}
                    <div className="text-sm font-bold text-gray-300 mb-1 flex items-center gap-2">
                      <span>📅 {event.dateDisplay}</span>
                    </div>
                    <div className="text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                      <span>📍 {event.location}</span>
                    </div>

                    <div className="text-xs font-semibold text-gray-400 mb-4 flex items-center gap-1">
                        {event.country && (
                            <img
                            src={`https://flagcdn.com/24x18/${event.country}.png`}
                            alt={event.country}
                            className="w-4 h-auto inline-block rounded-sm shadow-sm"
                            />
                        )}
                        <span> {event.countryName} </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CC0000] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-semibold mb-6">
                      {event.description}
                    </p>
                  </div>

                  {/* Actions bas de carte */}
                  <div>
                    {status !== "Terminé" && (
                      <div className="pt-4 border-t border-gray-800/80 mb-4">
                        <p className="text-xs font-semibold text-gray-400 mb-2">Ajouter à mon agenda :</p>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={getGoogleCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 py-1.5 px-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-lg text-xs font-bold transition-all border border-gray-800"
                          >
                            📅 Google
                          </a>

                          <button
                            onClick={() => downloadICS(event)}
                            className="inline-flex items-center justify-center gap-1 py-1.5 px-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-lg text-xs font-bold transition-all border border-gray-800"
                          >
                            📲 Apple / Outlook
                          </button>
                        </div>
                      </div>
                    )}

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#CC0000] hover:bg-red-800 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-red-900/20"
                      >
                        Infos Événement
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}