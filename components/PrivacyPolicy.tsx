
import React from 'react';
import SectionTitle from './SectionTitle';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionTitle title="Política de Privacidade" subtitle="A sua privacidade é uma prioridade fundamental para a Lumina." />
        <div className="legal-content mt-12">
          <p>Última atualização: Outubro de 2023</p>
          
          <h3>1. Recolha de Informações</h3>
          <p>
            Recolhemos informações quando se regista no nosso site, solicita uma proposta ou preenche o nosso formulário de contacto. As informações recolhidas incluem o seu nome, endereço de e-mail e número de telefone.
          </p>
          
          <h3>2. Utilização das Informações</h3>
          <p>
            Qualquer informação que recolhemos de si pode ser usada para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Personalizar a sua experiência e responder às suas necessidades individuais;</li>
            <li>Fornecer conteúdo publicitário personalizado;</li>
            <li>Melhorar o nosso site;</li>
            <li>Melhorar o atendimento ao cliente e as suas necessidades de suporte;</li>
            <li>Contactá-lo por e-mail.</li>
          </ul>

          <h3>3. Proteção de Dados</h3>
          <p>
            Implementamos uma variedade de medidas de segurança para manter a segurança das suas informações pessoais. Utilizamos criptografia de ponta para proteger informações confidenciais transmitidas online.
          </p>

          <h3>4. Cookies</h3>
          <p>
            Os nossos cookies melhoram o acesso ao nosso site e identificam visitantes repetidos. No entanto, o uso de um cookie não está de forma alguma ligado a qualquer informação pessoal identificável no nosso site.
          </p>

          <h3>5. Consentimento</h3>
          <p>
            Ao utilizar o nosso site, concorda com a nossa política de privacidade.
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

export default PrivacyPolicy;
