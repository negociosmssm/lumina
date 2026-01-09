
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  setView: (view: 'home' | 'privacy' | 'terms') => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setView('home');
    setIsOpen(false);
    // Give state time to update if we were on another page
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setView('home')} 
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              LUMINA
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 bg-transparent border-none cursor-pointer ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105"
            >
              Fale Connosco
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-blue-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-blue-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="text-lg font-medium text-left text-slate-700 hover:text-blue-900 bg-transparent border-none"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </button>
            ))}
            <button
              className="bg-blue-900 text-white px-6 py-3 rounded-lg text-center font-semibold"
              onClick={() => handleNavClick('#contacto')}
            >
              Fale Connosco
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
