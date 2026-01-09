
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

type View = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Handle link clicks to change views
  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setView={navigateTo} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        )}
        
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfUse />}
      </main>

      <Footer setView={navigateTo} />
      
      {/* Floating Action Button (Mobile Only WhatsApp) */}
      <a 
        href="https://wa.me/244923000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all md:hidden animate-bounce"
        aria-label="Contactar via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
};

export default App;
