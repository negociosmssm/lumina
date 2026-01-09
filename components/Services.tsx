
import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <SectionTitle 
          title="Nossos Serviços Especializados" 
          subtitle="Soluções integradas desenhadas para enfrentar os desafios modernos de gestão e operação."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 transition-colors">
                <span className="group-hover:text-white transition-colors">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6">
                <a href="#contacto" className="text-blue-900 font-semibold text-sm inline-flex items-center hover:text-amber-500 transition-colors">
                  Saber mais <span className="ml-1 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
