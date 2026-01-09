
import React from 'react';
import { 
  BarChart3, 
  Target, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Briefcase,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Service, Values } from './types';

export const COLORS = {
  primary: '#1e3a8a', // Azul Escuro (Navy Blue)
  secondary: '#d4af37', // Dourado (Gold)
  accent: '#64748b', // Cinza
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Consultoria Estratégica',
    description: 'Ajudamos a sua empresa a definir rotas claras para o crescimento sustentável e vantagem competitiva.',
    icon: <Target className="w-8 h-8 text-blue-900" />
  },
  {
    id: 2,
    title: 'Gestão Financeira',
    description: 'Otimização de fluxos de caixa e planeamento tributário para maximizar a rentabilidade do seu negócio.',
    icon: <BarChart3 className="w-8 h-8 text-blue-900" />
  },
  {
    id: 3,
    title: 'Gestão de Talentos',
    description: 'Desenvolvimento de capital humano e estruturação de processos de RH alinhados à cultura organizacional.',
    icon: <Users className="w-8 h-8 text-blue-900" />
  },
  {
    id: 4,
    title: 'Transformação Digital',
    description: 'Implementação de soluções tecnológicas que modernizam processos e melhoram a experiência do cliente.',
    icon: <Lightbulb className="w-8 h-8 text-blue-900" />
  }
];

export const CORE_VALUES: Values[] = [
  {
    title: 'Missão',
    description: 'Providenciar soluções estratégicas inovadoras que impulsionam o sucesso e a longevidade dos nossos parceiros de negócio.'
  },
  {
    title: 'Visão',
    description: 'Ser a referência líder em consultoria empresarial no mercado lusófono, reconhecida pela integridade e resultados excepcionais.'
  },
  {
    title: 'Valores',
    description: 'Ética inabalável, compromisso com a excelência, transparência absoluta e foco constante na inovação.'
  }
];
