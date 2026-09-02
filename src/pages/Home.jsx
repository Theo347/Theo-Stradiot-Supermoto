import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[80vh]">
      <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
          Pilote <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-red-500">
            Supermoto
          </span>
        </h1>
        <p className="mt-6 text-xl font-semibold text-gray-100 max-w-lg leading-relaxed">
          Jeune pilote belge passionné de Supermoto, je construis aujourd’hui un projet sportif sérieux avec un objectif clair : progresser et participer aux plus grands événements, tels que les championnats de Belgique et de France, avec pour ambition ultime de prendre part au mythique Superbiker de Mettet.
        </p>
        <div className="mt-10 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
          <Link to="/partenaires" className="bg-[#CC0000] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-900/30">
            Devenir Partenaire
          </Link>
          <Link to="/projet" className="border-2 border-[#CC0000] text-white hover:bg-[#CC0000]/10 font-bold py-3 px-8 rounded-full transition-colors">
            Découvrir le projet
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center" data-aos="fade-left" data-aos-delay="300">
        <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-[#CC0000]/20 to-black rounded-3xl flex items-center justify-center border border-[#CC0000]/30 shadow-[0_0_40px_rgba(204,0,0,0.2)] overflow-hidden">
           <img src="/TheoPPMoto.png" alt="Théo Stradiot Supermoto image" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}