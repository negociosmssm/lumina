
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-blue-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
    </div>
  );
};

export default SectionTitle;
