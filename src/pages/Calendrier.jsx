import { useState } from 'react';
import { getEventStatus, getDaysRemaining, getSortedEvents, getGoogleCalendarUrl, downloadICS, getStatusBadgeStyle } from '../utils/calendarUtils';
import { seasonsData } from '../utils/dateEventCalendar';

export default function Calendrier() {
  const [filter, setFilter] = useState('all');

  const totalEventsCount = seasonsData.reduce((acc, season) => acc + season.events.length, 0);
  const sortedSeasons = [...seasonsData].sort((a, b) => b.year - a.year);

  return (
    <section className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre général */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase">
            Calendrier <span className="!text-[#FF0000]">Saisons</span>
          </h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-100 font-semibold max-w-2xl mx-auto">
            Retrouvez les prochaines dates de compétitions et événements par saison.
          </p>
        </div>

        {/* Filtrage global */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap" data-aos="fade-up">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-950/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            Tous ({totalEventsCount})
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'upcoming'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-950/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            À venir & En cours
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
              filter === 'past'
                ? 'bg-[#CC0000] text-white shadow-lg shadow-red-950/30'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            Terminés
          </button>
        </div>

        {/* Affichage par Saison */}
        {sortedSeasons.map((season) => {
          // Si la saison est en mode "Coming Soon" et que le filtre ne cache pas tout
          if (season.isComingSoon) {
            if (filter === 'past') return null; // Ne s'affiche pas si on filtre sur les terminés
            
            return (
              <div key={season.year} className="mb-16" data-aos="fade-up">
                <div className="mb-8 border-l-4 border-[#CC0000] pl-4">
                  <h3 className="text-2xl font-extrabold uppercase text-white tracking-wide">
                    {season.title}
                  </h3>
                </div>

                {/* Composant Spécial "À venir / Chargement" */}
                <div className="bg-[#111111] border border-gray-800 rounded-2xl p-10 text-center max-w-xl mx-auto shadow-xl">
                  <div className="flex justify-center mb-5">
                    <div className="w-10 h-10 border-4 border-gray-800 border-t-[#CC0000] rounded-full animate-spin"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    À venir ...
                  </h4>
                  <p className="text-gray-400 text-sm font-medium">
                    Les dates et les manches de la <span className="text-white font-semibold">{season.title}</span> ne sont pas encore officielles. Elles arrivent très bientôt ! 🏁
                  </p>
                </div>
              </div>
            );
          }

          // Sinon, affichage normal des événements de la saison
          const filteredEvents = getSortedEvents(season.events).filter((event) => {
            const status = getEventStatus(event.startDateISO, event.endDateISO);
            if (filter === 'upcoming') return status === "À venir" || status === "En ce moment même";
            if (filter === 'past') return status === "Terminé";
            return true;
          });

          if (filteredEvents.length === 0) return null;

          return (
            <div key={season.year} className="mb-16">
              <div className="mb-8 border-l-4 border-[#CC0000] pl-4" data-aos="fade-up">
                <h3 className="text-2xl font-extrabold uppercase text-white tracking-wide">
                  {season.title}
                </h3>
              </div>

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
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#CC0000]/10 !text-[#FF0000] border border-[#CC0000]/30">
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

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:!text-[#FF0000] transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-gray-300 text-sm font-semibold mb-6">
                          {event.description}
                        </p>
                      </div>

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
                            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#CC0000] hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-red-950/20"
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
            </div>
          );
        })}
      </div>
    </section>
  );
}