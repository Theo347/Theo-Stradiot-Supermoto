import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white font-bold text-sm transition-transform hover:scale-105 ${
      isActive ? 'bg-[#CC0000]' : 'hover:bg-[#CC0000]/10'
    }`;

  // Style spécifique pour les boutons du menu mobile (plus larges, plus faciles à cliquer)
  const mobileLinkStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-lg border border-[#CC0000]/30 text-white font-bold text-center transition-colors ${
      isActive ? 'bg-[#CC0000]' : 'hover:bg-[#CC0000]/20'
    }`;

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50 border-b border-red-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 font-bold text-2xl tracking-wider font-extrabold leading-tight text-white">
            THÉO<span className="text-red-brand"> STRADIOT</span>
          </Link>
          
          {/* Menu PC */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-3">
              <NavLink to="/" className={navLinkStyle}>Accueil</NavLink>
              <NavLink to="/projet" className={navLinkStyle}>Le Projet</NavLink>
              {/* <NavLink to="/machine" className={navLinkStyle}>La Machine</NavLink>*/}
              <NavLink to="/reseaux-sociaux" className={navLinkStyle}>Mes réseaux sociaux</NavLink>
              <NavLink to="/partenaires" className={navLinkStyle}>Devenir Partenaire</NavLink>
              <NavLink to="/sponsors" className={navLinkStyle}>Sponsors</NavLink>
              <NavLink to="/calendrier" className={navLinkStyle}>Calendrier</NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-4 py-1.5 rounded-full bg-[#CC0000] text-white font-bold text-sm transition-transform hover:scale-105 shadow-md shadow-red-900/30 ${
                    isActive ? 'bg-red-800' : 'hover:bg-red-800'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Bouton Burger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-brand focus:outline-none transition-colors"
              aria-label="Menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-red-700/30 shadow-2xl h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-24 space-y-3 flex flex-col">
            <NavLink to="/" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Accueil</NavLink>
            <NavLink to="/projet" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Le Projet</NavLink>
            {/* <NavLink to="/machine" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>La Machine</NavLink>*/}
            <NavLink to="/reseaux-sociaux" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Mes réseaux sociaux</NavLink>
            <NavLink to="/partenaires" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Devenir Partenaire</NavLink>
            <NavLink to="/sponsors" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Sponsors</NavLink>
            <NavLink to="/calendrier" className={mobileLinkStyle} onClick={() => setIsOpen(false)}>Calendrier</NavLink>
            <NavLink 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg bg-[#CC0000] text-white font-bold text-center transition-colors hover:bg-red-800`} 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}