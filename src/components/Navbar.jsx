import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-1.5 rounded-full border-2 border-[#CC0000] text-white font-bold text-sm transition-transform hover:scale-105 ${
      isActive ? 'bg-[#CC0000]' : 'hover:bg-[#CC0000]/10'
    }`;

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50 border-b border-red-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 font-bold text-2xl tracking-wider font-extrabold leading-tight text-white">
            THÉO<span className="text-[#CC0000]"> STRADIOT</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-3">
              <NavLink to="/" className={navLinkStyle}>Accueil</NavLink>
              <NavLink to="/projet" className={navLinkStyle}>Le Projet</NavLink>
              <NavLink to="/machine" className={navLinkStyle}>La Machine</NavLink>
              <NavLink to="/partenaires" className={navLinkStyle}>Sponsors</NavLink>
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
        </div>
      </div>
    </nav>
  );
}