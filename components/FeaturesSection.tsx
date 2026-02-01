import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import { FEATURES_DATA } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6">
              O Que Você Vai Receber
            </h2>
            <div className="w-20 h-1 bg-dulce mx-auto rounded-full opacity-30" />
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Card - Spans 2 columns on large screens */}
          <FadeInOnScroll className="lg:col-span-2 lg:row-span-1 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-rose/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="text-rose font-bold text-sm tracking-widest uppercase mb-4 block">Destaque</span>
                <h3 className="font-serif text-3xl md:text-4xl text-espresso mb-6">Doces que vendem muito na Páscoa</h3>
                <p className="text-espresso/70 text-lg leading-relaxed mb-8">
                  Receitas irresistíveis com chocolate, leite condensado e ingredientes acessíveis. Criadas para quem busca lucro real e elogios infinitos.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-rose shadow-sm">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <span className="font-medium text-rose italic">O queridinho das confeiteiras caseiras</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600" alt="Chocolate" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Secondary Cards */}
          {FEATURES_DATA.filter(f => !f.isMain).map((feature, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 100} className="bg-white p-8 rounded-[2rem] shadow-md border border-rose/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-espresso mb-4 leading-snug">{feature.title}</h4>
              <p className="text-espresso/60 leading-relaxed font-medium">{feature.description}</p>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;