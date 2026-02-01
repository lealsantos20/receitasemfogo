import React from 'react';
import Button from './Button';
import FadeInOnScroll from './FadeInOnScroll';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 md:py-32 relative overflow-hidden bg-cream">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dulce/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(58,44,44,0.1)] border border-rose/5 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          
          <div className="flex-1 text-center lg:text-left">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-8 leading-[1.2]">
                🎁 <span className="text-rose">Receitas Sem Fogo</span> para Lucrar na Páscoa – Doces que Vendem e Encantam!
              </h2>
              <p className="text-lg text-espresso/60 mb-10 font-medium">
                Sua chance de começar hoje mesmo, sem complicações. Teste nossas receitas e veja a mágica acontecer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" size="lg">Quero Minhas Receitas Agora!</Button>
                <Button variant="outline" size="lg">Falar no WhatsApp</Button>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-dulce">
                Oferta por tempo limitado para a Páscoa 2026
              </p>
            </FadeInOnScroll>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <FadeInOnScroll delay={200} className="relative">
              <div className="absolute inset-0 bg-rose/10 blur-3xl rounded-full transform scale-75" />
              <div className="relative group perspective-1000">
                <div className="bg-espresso p-2 rounded-[2.5rem] shadow-2xl transform rotate-[-2deg] transition-transform duration-500 group-hover:rotate-0">
                  <div className="bg-white rounded-[2rem] overflow-hidden border-4 border-espresso">
                    <img 
                      src="https://images.unsplash.com/photo-1541416418826-62181297576a?auto=format&fit=crop&q=80&w=400" 
                      alt="Interface Mockup Páscoa" 
                      className="w-full h-auto"
                    />
                    <div className="p-4 bg-cream text-center">
                      <p className="font-serif text-rose font-bold italic">Receita: Trufas de Chocolate (Sem Fogo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;