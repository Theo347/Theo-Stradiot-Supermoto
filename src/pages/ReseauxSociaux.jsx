export default function ReseauxSociaux() {
  // 💡 Remplace par l'ID de ta chaîne YouTube (commence par "UC...")
  // Astuce : La liste d'uploads YouTube utilise le même ID en remplaçant "UC" par "UU"
  const YOUTUBE_CHANNEL_ID = "UC5lAwLk_t7o8HihlO3CwIzw"; 
  const uploadsPlaylistId = YOUTUBE_CHANNEL_ID.replace(/^UC/, 'UU');

  // 🔴 Mettre à false tant que tu n'as pas publié de vidéo.
  // 🟢 Passer à true dès que tu publies ta première vidéo !
  const HAS_VIDEOS = false;

  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@theo_stradiot',
      description: 'Photos, réels exclusifs et coulisses des week-ends de course en temps réel.',
      url: 'https://instagram.com/theo_stradiot',
      color: 'from-purple-600 via-pink-500 to-yellow-500',
      hoverGlow: 'hover:shadow-pink-500/20',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Théo Stradiot Supermoto',
      description: 'Articles de presse, annonces officielles et résumés complets de chaque épreuve.',
      url: 'https://www.facebook.com/profile.php?id=61566941614908&locale=fr_FR',
      color: 'from-blue-600 to-blue-800',
      hoverGlow: 'hover:shadow-blue-500/20',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'discord',
      name: 'Discord',
      handle: 'Serveur Communautaire',
      description: 'Rejoins le serveur pour échanger en direct, suivre les coulisses et organiser des sessions de roulage.',
      url: 'https://discord.gg/sa6bTmz7H4',
      color: 'from-indigo-600 to-indigo-800',
      hoverGlow: 'hover:shadow-indigo-500/20',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="pt-28 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase text-white">
            Mes <span className="text-red-brand">Réseaux Sociaux</span>
          </h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 font-semibold max-w-2xl mx-auto">
            Suivez ma saison au plus près : résumés de course, caméras embarquées, et coulisses de la préparation.
          </p>
        </div>

        {/* SECTION YOUTUBE (Mise en avant principale) */}
        <div 
          className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xl hover:border-[#CC0000]/50 transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/10 rounded-2xl border border-red-600/30 text-red-brand">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-wide">Chaîne YouTube</h3>
                <p className="text-gray-400 text-sm font-medium">Dernière vidéo</p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@theostradiot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CC0000] hover:bg-red-700 text-white font-extrabold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/40 text-sm tracking-wider uppercase"
            >
              S'abonner à la chaîne
            </a>
          </div>

          {/* Lecteur Vidéo Dynamique */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-gray-800/80 shadow-inner">
            {!HAS_VIDEOS ? (
              /* Écran d'attente */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-950 via-[#111111] to-black">
                <div className="text-4xl w-20 h-20 mb-4 rounded-full bg-red-600/10 flex items-center justify-center border border-red-600/20 text-red-brand animate-pulse">
                  🎬
                </div>
                <h4 className="text-2xl font-bold mb-2">Les vidéos arrivent bientôt !</h4>
              </div>
            ) : (
              /* Player iFrame automatique */
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed?listType=playlist&list=${uploadsPlaylistId}`}
                title="Dernière vidéo YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* AUTRES RÉSEAUX SOCIAUX (Grille de Cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <div
              key={social.id}
              data-aos="fade-up"
              className={`bg-[#111111] border border-gray-800/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${social.hoverGlow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-tr ${social.color} text-white shadow-md`}>
                    {social.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                    Officiel
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-1">{social.name}</h3>
                <p className="text-xs font-semibold text-red-brand mb-4">{social.handle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{social.description}</p>
              </div>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gray-900 hover:bg-[#CC0000] text-gray-200 hover:text-white font-extrabold text-sm text-center transition-all duration-300 border border-gray-800 hover:border-[#CC0000] shadow-md flex items-center justify-center gap-2 group"
              >
                Rejoindre sur {social.name}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}