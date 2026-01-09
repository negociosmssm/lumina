
import React from 'react';
import SectionTitle from './SectionTitle';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contacto brevemente.");
  };

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <SectionTitle 
              title="Entre em Contacto" 
              subtitle="Estamos prontos para ouvir o seu desafio e apresentar uma solução personalizada."
            />
            
            <div className="space-y-8 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/5 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Telefone</h4>
                  <p className="text-slate-500">+244 923 000 000</p>
                  <p className="text-slate-500">+351 210 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/5 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-500">contacto@lumina.ao</p>
                  <p className="text-slate-500">geral@lumina.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/5 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Localização</h4>
                  <p className="text-slate-500">Edifício Sky Center, Piso 4</p>
                  <p className="text-slate-500">Luanda, Angola</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-green-500" /> Atendimento via WhatsApp
              </h4>
              <p className="text-slate-500 text-sm mb-6">Resposta imediata em horário laboral.</p>
              <a 
                href="https://wa.me/244923000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Seu Nome</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-slate-50"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-slate-50"
                      placeholder="email@suaempresa.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-slate-50"
                      placeholder="+244..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Assunto</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-slate-50 appearance-none">
                      <option>Consultoria Estratégica</option>
                      <option>Gestão Financeira</option>
                      <option>Recrutamento & RH</option>
                      <option>Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4} 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-slate-50"
                    placeholder="Como podemos ajudar o seu negócio hoje?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto px-10 py-4 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-xl"
                >
                  Enviar Mensagem <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
