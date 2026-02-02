import React from 'react';
import Button from './Button';
import FadeInOnScroll from './FadeInOnScroll';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden cream-gradient">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-dulce/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <FadeInOnScroll delay={100}>
              <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose text-xs md:text-sm font-bold tracking-widest uppercase rounded-full mb-8 border border-rose/20">
                ✨ Mais de 1.600 mulheres já receberam gratuitamente!
              </span>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.15] mb-6">
                Doces Deliciosos <span className="text-rose">Sem Usar Fogo</span>: Receitas Fáceis Que Qualquer Um Consegue Fazer!
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <p className="text-lg md:text-xl text-espresso/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                Receba agora mesmo o e-book com receitas de chocolate e doces sem usar fogão ou forno. Fácil, rápido e perfeito para vender nessa Páscoa. Você paga só se gostar!
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="#final-cta" variant="primary" size="lg">
                Quero Receber as Receitas Agora!
              </Button>
              <Button href="#features" variant="secondary" size="lg">
                Ver Como Funciona
              </Button>
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-cream object-cover" src={`https://picsum.photos/100/100?random=${i+10}`} alt="avatar" />
                  ))}
                </div>
                <p className="text-sm font-medium text-espresso/60 italic">
                  +92% das pessoas pagam depois de testar!
                </p>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <FadeInOnScroll delay={300} className="relative">
              <div className="absolute inset-0 bg-dulce/10 rounded-2xl rotate-3 transform scale-105 blur-sm" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl animate-soft-float overflow-hidden group">
                <img 
                  src="https://eidcoorpgkmvsrcfzewc.supabase.co/storage/v1/object/public/fotosdez/modelo1/pascoa.png" 
                  alt="Doces de Páscoa e chocolates artesanais" 
                  className="w-full h-auto rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-cream/50">
                  <span className="text-rose font-bold text-lg uppercase tracking-tight">Páscoa 2026</span>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
