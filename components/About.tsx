
import React from 'react';
import SectionTitle from './SectionTitle';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="Equipa profissional na Lumina" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-900 rounded-full -z-0"></div>
            
            <div className="absolute bottom-8 left-8 bg-blue-900 p-6 rounded-xl shadow-xl text-white">
              <p className="text-4xl font-bold mb-1">+15</p>
              <p className="text-sm opacity-80 uppercase font-semibold">Anos de Experiência</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <SectionTitle 
              title="Sobre a Nossa Empresa" 
              subtitle="Comprometidos com o desenvolvimento sustentável de negócios em Angola, Moçambique, Portugal e para além fronteiras."
            />
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Fundada com o propósito de elevar o padrão da gestão empresarial, a Lumina nasceu da união de profissionais com vasta experiência em mercados internacionais e uma profunda compreensão das dinâmicas locais.
            </p>
            
            <div className="space-y-6">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-900/10 hover:bg-slate-50 transition-all group">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all text-blue-900 font-bold">
                    {val.title[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">{val.title}</h4>
                    <p className="text-sm text-slate-500">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
