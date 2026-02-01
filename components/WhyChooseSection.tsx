import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import { WHY_CHOOSE_DATA } from '../constants';

const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-8">
                Por Que Nossas Receitas São Tão Especiais?
              </h2>
              <p className="text-lg text-espresso/60 mb-12 font-medium">
                Unimos a praticidade de quem não tem tempo a perder com a sofisticação de doces que parecem feitos por profissionais.
              </p>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_DATA.map((pillar, idx) => (
                <FadeInOnScroll key={idx} delay={idx * 150} className="group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-rose text-white rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-rose/20">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-espresso mb-2">{pillar.title}</h4>
                      <p className="text-espresso/60 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <FadeInOnScroll className="relative z-10 p-4 bg-cream rounded-[3rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600" 
                alt="Kitchen vibes" 
                className="w-full h-auto rounded-[2.5rem] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-rose text-white p-6 rounded-2xl shadow-xl max-w-[200px] text-center rotate-[-4deg]">
                <p className="font-serif text-xl italic leading-tight">"O segredo está no carinho!"</p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;