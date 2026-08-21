function App() {
  return (
    <div className="min-h-screen font-sans bg-[#111111] text-white">
      {/* HEADER / NAVIGATION */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50 border-b border-red-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl tracking-wider font-extrabold leading-tight">
              THÉO<span className="text-[#CC0000]"> STRADIOT</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-3">
                <a href="#home" className="px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold text-sm transition-transform hover:scale-105">Accueil</a>
                <a href="#about" className="px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold text-sm transition-transform hover:scale-105">Le Projet</a>
                <a href="#bike" className="px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold text-sm transition-transform hover:scale-105">La Machine</a>
                <a href="#sponsors" className="px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold text-sm transition-transform hover:scale-105">Sponsors</a>
                <a href="#contact" className="px-4 py-1.5 rounded-full bg-[#CC0000] text-white hover:bg-red-800 font-bold text-sm transition-transform hover:scale-105 shadow-md shadow-red-900/30">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[80vh]">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
            Pilote <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-red-500">
              Supermoto
            </span>
          </h1>
          <p className="mt-6 text-xl font-semibold text-gray-100 max-w-lg leading-relaxed">
            Jeune pilote belge passionné de Supermoto, je construis aujourd’hui un projet sportif sérieux avec un objectif clair : progresser et participer aux plus grands événements, tels que les championnats de Belgique et de France, avec pour ambition ultime de prendre part au mythique Superbiker de Mettet.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#sponsors" className="bg-[#CC0000] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-900/30">
              Devenir Partenaire
            </a>
            <a href="#about" className="border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold py-3 px-8 rounded-full transition-colors">
              Découvrir le projet
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-[#CC0000]/20 to-black rounded-3xl flex items-center justify-center border border-[#CC0000]/30 shadow-[0_0_40px_rgba(204,0,0,0.2)] overflow-hidden">
             <img src="/TheoPPMoto.png" alt="Théo Stradiot Supermoto image" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ABOUT / LE PROJET */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold uppercase mb-6">Ma <span className="text-[#CC0000]">Présentation</span></h2>
              <div className="text-gray-100 font-semibold space-y-4">
                <p className="text-xl font-bold text-white">Je m’appelle Théo Stradiot, j’ai 20 ans et je vis en Belgique, près de Péruwelz.</p>
                <p>Le Supermoto représente pour moi bien plus qu’un sport : c’est une discipline exigeante qui mélange technique, précision, mental et engagement total.</p>
                <p>Mon ambition ne se limite pas simplement à rouler, mais à développer un véritable projet sportif.</p>
                
                <h3 className="text-xl font-extrabold text-white mt-8 mb-4">Ce qui me motive profondément :</h3>
                <ul className="space-y-2 font-bold">
                  <li className="flex items-center gap-2 text-white"><span className="text-[#CC0000]">▸</span> Le dépassement de soi</li>
                  <li className="flex items-center gap-2 text-white"><span className="text-[#CC0000]">▸</span> La progression constante</li>
                  <li className="flex items-center gap-2 text-white"><span className="text-[#CC0000]">▸</span> La rigueur de l’entraînement</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold uppercase mb-6">Les 3 axes du <span className="text-[#CC0000]">Projet</span></h2>
              <div className="space-y-6">
                <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md">
                  <h4 className="text-xl font-bold text-white mb-2">1️⃣ Préparation physique</h4>
                  <p className="text-gray-100 font-semibold text-sm">Le Supermoto sollicite fortement les avant-bras, les épaules, les jambes, le gainage et l’explosivité. J'ai mis en place un programme de renforcement et d’endurance adapté aux exigences de la discipline.</p>
                </div>
                
                <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md">
                  <h4 className="text-xl font-bold text-white mb-2">2️⃣ Entraînement technique</h4>
                  <p className="text-gray-100 font-semibold text-sm">Travail intensif sur : les trajectoires, le freinage appuyé, les entrées en glisse, les transitions terre/asphalte et la régularité au tour.</p>
                </div>
                
                <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md">
                  <h4 className="text-xl font-bold text-white mb-2">3️⃣ Objectif compétition</h4>
                  <p className="text-gray-100 font-semibold text-sm">Participer progressivement à des événements pour acquérir de l’expérience, avec pour but ultime des compétitions majeures comme le Superbiker de Mettet et le championnat de Belgique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA MACHINE */}
      <section id="bike" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase">La <span className="text-[#CC0000]">Machine</span></h2>
            <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
            <p className="mt-6 text-gray-100 font-semibold max-w-2xl mx-auto">
              L'optimisation d'une moto en configuration supermoto vise à concilier le grip extrême sur l'asphalte, la stabilité au gros freinage et la capacité à encaisser la partie terre et ses sauts.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mb-10">
            <img 
              src="/logoHonda.png" 
              alt="Logo Honda" 
              className="w-80 h-auto object-contain" 
            />
            <h3 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight text-center">
              250{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-red-500">
                CRF
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2">
              <h3 className="font-bold text-lg mb-4 text-white">Suspensions</h3>
              <ul className="text-gray-100 font-semibold text-sm space-y-2">
                <li>• Raffermissement de la compression et du rebond.</li>
                <li>• Course raccourcie (30 à 50 mm).</li>
                <li>• Tubes remontés de 3 à 8 mm pour charger l'avant.</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2">
              <h3 className="font-bold text-lg mb-4 text-white">Liaison au sol</h3>
              <ul className="text-gray-100 font-semibold text-sm space-y-2">
                <li>• Jantes de 17" (ou 16.5" à l'avant).</li>
                <li>• Pression avant 1,6-1,8 bar.</li>
                <li>• Pression arrière 1,5-1,7 bar.</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2">
              <h3 className="font-bold text-lg mb-4 text-white">Freinage</h3>
              <ul className="text-gray-100 font-semibold text-sm space-y-2">
                <li>• Disque flottant surdimensionné (310-320 mm).</li>
                <li>• Étrier 4 pistons & maître-cylindre (14-16 mm).</li>
                <li>• Démultiplication finale allongée (13x42 à 14x45).</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2">
              <h3 className="font-bold text-lg mb-4 text-white">Poste de pilotage</h3>
              <ul className="text-gray-100 font-semibold text-sm space-y-2">
                <li>• Guidon large (28,6 mm).</li>
                <li>• Housse de selle anti-dérapante.</li>
                <li>• Protège-mains alu et patins Téflon.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <section id="sponsors" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase">Devenir <span className="text-[#CC0000]">Partenaire</span></h2>
            <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
            <p className="mt-6 text-gray-100 font-semibold max-w-3xl mx-auto text-lg">
              Construire un projet solide demande un investissement constant. Je suis à la recherche de sponsors souhaitant s’associer à mon projet, m’accompagner dans son développement et contribuer à sa réussite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">🛠️ Besoins du projet</h3>
              <ul className="space-y-3 text-gray-100 font-semibold">
                <li>• Moto adaptée/préparée à la compétition</li>
                <li>• Équipement de protection homologué</li>
                <li>• Jeux de pneus (asphalte, pluie, terre)</li>
                <li>• Entretien mécanique régulier</li>
                <li>• Essences pour le roulage</li>
                <li>• Frais d’inscription aux événements</li>
                <li>• Déplacements et matériel (ex : remorque)</li>
              </ul>
            </div>

            <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">🤝 Modalités</h3>
              <p className="text-gray-100 font-semibold mb-4">
                Chaque collaboration peut être adaptée selon le type de soutien (financier, matériel, technique), le niveau de visibilité souhaité et la durée.
              </p>
              <p className="text-white font-bold italic">
                "Mon objectif est de construire des partenariats durables, basés sur la confiance, la transparence et la progression commune."
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8 text-white">📲 Quelle visibilité pour vous ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]">
              <h4 className="font-bold text-[#CC0000] mb-3">Équipement & Moto</h4>
              <p className="text-sm font-semibold text-gray-100">Logo sur la moto, combinaison, casque, tenue et pulls officiels.**</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]">
              <h4 className="font-bold text-[#CC0000] mb-3">Présence Digitale</h4>
              <p className="text-sm font-semibold text-gray-100">Page dédiée sur ce site web et mentions régulières sur mes réseaux sociaux.</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]">
              <h4 className="font-bold text-[#CC0000] mb-3">Événements</h4>
              <p className="text-sm font-semibold text-gray-100">Visibilité lors des compétitions, et sur les photos/vidéos partagées.</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]">
              <h4 className="font-bold text-[#CC0000] mb-3">Image & Valeurs</h4>
              <p className="text-sm font-semibold text-gray-100">Associez votre marque à la performance, la précision et la détermination.</p>
            </div>
          </div>
          <p className="text-xs font-bold text-gray-400 text-center mt-6">
            ** Sous réserve de conditions. Les emplacements seront définis en accord avec le partenaire.
          </p>
        </div>
      </section>

      {/* CONTACT & RESEAUX SECTION */}
      <section id="contact" className="py-20 bg-[#111111] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black p-8 md:p-12 rounded-2xl border border-[#CC0000]/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contactez-<span className="text-[#CC0000]">Moi</span></h2>
            <p className="text-gray-100 font-semibold text-center mb-12">Je me ferai un plaisir d’échanger avec vous afin d’étudier une collaboration adaptée à nos attentes.</p>
            
            {/* Grille des 4 boutons de contact propres */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Email */}
              <a href="mailto:theo.stradiot34@gmail.com" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group">
                <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Email</h4>
                  <p className="text-white font-bold text-sm">theo.stradiot34@gmail.com</p>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+320493889430" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group">
                <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Téléphone</h4>
                  <p className="text-white font-bold text-sm">+32 0493 88 94 30</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/theo_stradiot" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group">
                <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Instagram</h4>
                  <p className="text-white font-bold">@theo_stradiot</p>
                </div>
              </a>

              {/* Discord (Bouton propre) */}
              <a href="https://discord.gg/sa6bTmz7H4" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group">
                <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.011c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Discord</h4>
                  <p className="text-white font-bold text-sm">Rejoindre le serveur</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-gray-800 text-center">
        <p className="text-gray-300 font-bold text-sm">
          © {new Date().getFullYear()} Théo Stradiot. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;