import { Link } from 'react-router-dom';
import "../App.css"

export default function Partenaires() {
  return (
    <section className="pt-28 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase">Devenir <span className="text-[#CC0000]">Partenaire</span></h2>
          <div className="w-24 h-1 bg-[#CC0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-100 font-semibold max-w-3xl mx-auto text-lg">
            Construire un projet solide demande un investissement constant. Je suis à la recherche de sponsors souhaitant s’associer à mon projet, m’accompagner dans son développement et contribuer à sa réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800" data-aos="fade-right">
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

          <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">🤝 Modalités</h3>
            <p className="text-gray-100 font-semibold mb-4">
              Chaque collaboration peut être adaptée selon le type de soutien (financier, matériel, technique), le niveau de visibilité souhaité et la durée.
            </p>
            <p className="text-white font-bold italic border-l-2 border-[#CC0000] pl-4">
              "Mon objectif est de construire des partenariats durables, basés sur la confiance, la transparence et la progression commune."
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-white" data-aos="fade-up">📲 Quelle visibilité pour vous ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]" data-aos="flip-up" data-aos-delay="100">
            <h4 className="font-bold text-[#CC0000] mb-3">Équipement & Moto</h4>
            <p className="text-sm font-semibold text-gray-100">Logo sur la moto, combinaison, casque, tenue et pulls officiels.**</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]" data-aos="flip-up" data-aos-delay="200">
            <h4 className="font-bold text-[#CC0000] mb-3">Présence Digitale</h4>
            <p className="text-sm font-semibold text-gray-100">Page dédiée sur ce site web et mentions régulières sur mes réseaux sociaux.</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]" data-aos="flip-up" data-aos-delay="300">
            <h4 className="font-bold text-[#CC0000] mb-3">Événements</h4>
            <p className="text-sm font-semibold text-gray-100">Visibilité lors des compétitions, et sur les photos/vidéos partagées.</p>
          </div>
          <div className="border border-gray-800 p-6 rounded-lg text-center hover:border-[#CC0000] transition-colors bg-[#111111]" data-aos="flip-up" data-aos-delay="400">
            <h4 className="font-bold text-[#CC0000] mb-3">Image & Valeurs</h4>
            <p className="text-sm font-semibold text-gray-100">Associez votre marque à la performance, la précision et la détermination.</p>
          </div>
        </div>
        <p className="text-xs font-bold text-gray-400 text-center mt-6" data-aos="fade-up">
          ** Sous réserve de conditions. Les emplacements seront définis en accord avec le partenaire.
        </p>
      </div>

      <div className="mt-10 flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <Link to="/contact" className="bg-[#CC0000] hover:bg-red-800 text-white font-extrabold text-lg py-4 px-20 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-900/30 animate-pulse-scale">
            Me contacter
          </Link>
        </div>
    </section>
  );
}