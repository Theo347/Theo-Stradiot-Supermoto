import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Projet from './pages/Projet';
//import Machine from './pages/Machine';
import Reseaux_Sociaux from './pages/ReseauxSociaux';
import Partenaires from './pages/Partenaires';
import Sponsors from './pages/sponsors';
import Calendrier from './pages/Calendrier';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-[#111111] text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet" element={<Projet />} />
            {/*<Route path="/machine" element={<Machine />} />*/}
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/reseaux-sociaux" element={<Reseaux_Sociaux />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;