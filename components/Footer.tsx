
import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNavClick = (href: string) => {
    setView('home');
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <button 
              onClick={() => setView('home')} 
              className="flex items-center space-x-2 mb-6 bg-transparent border-none cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">LUMINA</span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Especialistas em consultoria de alto nível para empresas que não aceitam o medíocre. Transformamos complexidade em vantagem competitiva.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Acesso Rápido</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => handleNavClick('#inicio')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Início</button></li>
              <li><button onClick={() => handleNavClick('#sobre')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Sobre a Empresa</button></li>
              <li><button onClick={() => handleNavClick('#servicos')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Nossos Serviços</button></li>
              <li><button onClick={() => handleNavClick('#contacto')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Contacto Direto</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => handleNavClick('#servicos')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Plano Estratégico</button></li>
              <li><button onClick={() => handleNavClick('#servicos')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Auditoria Financeira</button></li>
              <li><button onClick={() => handleNavClick('#servicos')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Recrutamento Executivo</button></li>
              <li><button onClick={() => handleNavClick('#servicos')} className="hover:text-amber-500 transition-colors bg-transparent border-none p-0 cursor-pointer">Sistemas & ERP</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Receba insights mensais sobre o mercado lusófono.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-bold text-sm transition-all whitespace-nowrap">
                Subscrever
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Lumina Soluções Empresariais. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <button onClick={() => setView('privacy')} className="hover:text-white bg-transparent border-none cursor-pointer">Política de Privacidade</button>
            <button onClick={() => setView('terms')} className="hover:text-white bg-transparent border-none cursor-pointer">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
