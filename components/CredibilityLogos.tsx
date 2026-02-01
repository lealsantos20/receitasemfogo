import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const CredibilityLogos: React.FC = () => {
  const items = [
    'Receitas inspiradas nas campeãs de venda da internet',
    'Testadas por mais de 1.600 mulheres reais',
    'Baseadas nas tendências do Instagram e Pinterest 2024'
  ];

  return (
    <div className="py-12 bg-white/50 border-y border-rose/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {items.map((item, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 150} className="flex-1">
              <p className="font-serif italic text-espresso/70 text-base md:text-lg px-4 border-l-0 md:border-l border-rose/20 first:border-l-0 leading-tight">
                {item}
              </p>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredibilityLogos;