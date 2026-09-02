export default function Projet() {
  return (
    <section className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div data-aos="fade-up">
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

          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold uppercase mb-6">Les 3 axes du <span className="text-[#CC0000]">Projet</span></h2>
            <div className="space-y-6">
              <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md" data-aos="fade-left" data-aos-delay="300">
                <h4 className="text-xl font-bold text-white mb-2">1️⃣ Préparation physique</h4>
                <p className="text-gray-100 font-semibold text-sm">Le Supermoto sollicite fortement les avant-bras, les épaules, les jambes, le gainage et l’explosivité. J'ai mis en place un programme de renforcement et d’endurance adapté aux exigences de la discipline.</p>
              </div>
              
              <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md" data-aos="fade-left" data-aos-delay="400">
                <h4 className="text-xl font-bold text-white mb-2">2️⃣ Entraînement technique</h4>
                <p className="text-gray-100 font-semibold text-sm">Travail intensif sur : les trajectoires, le freinage appuyé, les entrées en glisse, les transitions terre/asphalte et la régularité au tour.</p>
              </div>
              
              <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#CC0000] shadow-md" data-aos="fade-left" data-aos-delay="500">
                <h4 className="text-xl font-bold text-white mb-2">3️⃣ Objectif compétition</h4>
                <p className="text-gray-100 font-semibold text-sm">Participer progressivement à des événements pour acquérir de l’expérience, avec pour but ultime des compétitions majeures comme le Superbiker de Mettet et le championnat de Belgique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}