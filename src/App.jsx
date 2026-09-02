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
import Partenaires from './pages/Partenaires';
import Contact from './pages/Contact';
import Calendrier from './pages/Calendrier';

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