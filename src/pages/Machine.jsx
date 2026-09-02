
export default function Machine() {
  return (
    <section className="pt-28 pb-20 bg-[#111111] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold uppercase">La <span className="text-[#CC0000]">Machine</span></h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-100 font-semibold max-w-2xl mx-auto">
            L'optimisation d'une moto en configuration supermoto vise à concilier le grip extrême sur l'asphalte, la stabilité au gros freinage et la capacité à encaisser la partie terre et ses sauts.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 mt-10" data-aos="fade-up" data-aos-delay="200">
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
          <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-lg mb-4 text-white">Suspensions</h3>
            <ul className="text-gray-100 font-semibold text-sm space-y-2">
              <li>• Raffermissement de la compression et du rebond.</li>
              <li>• Course raccourcie (30 à 50 mm).</li>
              <li>• Tubes remontés de 3 à 8 mm pour charger l'avant.</li>
            </ul>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-lg mb-4 text-white">Liaison au sol</h3>
            <ul className="text-gray-100 font-semibold text-sm space-y-2">
              <li>• Jantes de 17" (ou 16.5" à l'avant).</li>
              <li>• Pression avant 1,6-1,8 bar.</li>
              <li>• Pression arrière 1,5-1,7 bar.</li>
            </ul>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-lg mb-4 text-white">Freinage</h3>
            <ul className="text-gray-100 font-semibold text-sm space-y-2">
              <li>• Disque flottant surdimensionné (310-320 mm).</li>
              <li>• Étrier 4 pistons & maître-cylindre (14-16 mm).</li>
              <li>• Démultiplication finale allongée (13x42 à 14x45).</li>
            </ul>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg border-t-4 border-[#CC0000] transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
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
  );
}