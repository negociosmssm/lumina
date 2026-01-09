
import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = 'https://picsum.photos/id/180/1920/1080';

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-950">
      {/* Background Image with Smooth Fade-in */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-950/80"></div>
      </div>

      {/* Subtle Loading Shimmer/Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite] -translate-x-full"></div>
          <div className="flex flex-col items-center gap-3 text-blue-300/30">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-xs font-medium uppercase tracking-widest">Carregando Experiência...</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className={`transition-all duration-1000 delay-300 transform ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-wider">
              Estratégia & Resultados
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transformando Visões em <span className="text-amber-500">Resultados</span> de Excelência.
            </h1>
            <p className="text-lg md:text-xl text-blue-50/80 mb-10 leading-relaxed max-w-2xl">
              A Lumina Soluções Empresariais oferece consultoria especializada para empresas que procuram autoridade, eficiência e inovação no mercado lusófono.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-1"
              >
                Comece Agora <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#servicos" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
