
import React from 'react';
import SectionTitle from './SectionTitle';

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionTitle title="Termos de Uso" subtitle="Regras e orientações para a utilização da nossa plataforma digital." />
        <div className="legal-content mt-12">
          <p>Bem-vindo à Lumina Soluções Empresariais.</p>
          
          <h3>1. Aceitação dos Termos</h3>
          <p>
            Ao aceder a este site, o utilizador concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>
          
          <h3>2. Uso de Licença</h3>
          <p>
            É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site da Lumina, apenas para visualização transitória pessoal e não comercial.
          </p>

          <h3>3. Isenção de Responsabilidade</h3>
          <p>
            Os materiais no site da Lumina são fornecidos 'como estão'. A Lumina não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.
          </p>

          <h3>4. Limitações</h3>
          <p>
            Em nenhum caso a Lumina ou os seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais.
          </p>

          <h3>5. Modificações</h3>
          <p>
            A Lumina pode rever estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
        </div>
        <div className="mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-blue-900 font-bold hover:text-amber-500 transition-colors"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
