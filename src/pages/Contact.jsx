export default function Contact() {
  return (
    <section className="pt-28 pb-20 bg-[#111111] relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black p-8 md:p-12 rounded-2xl border border-[#CC0000]/20 shadow-2xl" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contactez-<span className="text-[#CC0000]">Moi</span></h2>
          <p className="text-gray-100 font-semibold text-center mb-12">Je me ferai un plaisir d’échanger avec vous afin d’étudier une collaboration adaptée à nos attentes.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Instagram */}
            <a href="https://instagram.com/theo_stradiot" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Instagram</h4>
                <p className="text-white font-bold">@theo_stradiot</p>
              </div>
            </a>

            {/* Téléphone */}
            <a href="tel:+320493889430" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Téléphone</h4>
                <p className="text-white font-bold text-sm">+32 0493 88 94 30</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:theo.stradiot34@gmail.com" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Email</h4>
                <p className="text-white font-bold text-sm">theo.stradiot34@gmail.com</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61566941614908&locale=fr_FR" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-[#CC0000]/10 text-[#CC0000] rounded-full flex items-center justify-center group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Facebook</h4>
                <p className="text-white font-bold text-sm">Théo Stradiot</p>
              </div>
            </a>

            {/* Discord */}
            <div className="md:col-span-2 flex justify-center" data-aos="fade-up" data-aos-delay="500">
              <a href="https://discord.gg/sa6bTmz7H4" target="_blank" rel="noreferrer" className="w-full md:w-[calc(50%-0.5rem)] flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-gray-800 hover:border-[#CC0000] transition-all group">
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
      </div>
    </section>
  );
}