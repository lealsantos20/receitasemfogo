import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-4">
              Histórias Que Adoçam Nossa Vida
            </h2>
            <p className="text-dulce italic font-serif text-lg">Depoimentos de quem já transformou sua Páscoa</p>
          </FadeInOnScroll>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 200} className="flex-1">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-rose/5 h-full flex flex-col items-center text-center relative group">
                {/* Frame for avatar */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-dulce rounded-full rotate-45 transform scale-110 group-hover:rotate-90 transition-transform duration-500" />
                  <img src={t.avatar} alt={t.author} className="relative w-24 h-24 rounded-full border-4 border-white object-cover z-10" />
                  <div className="absolute -bottom-2 -right-2 bg-rose text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-20 shadow-md">
                    ★
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-rose text-lg">★</span>)}
                </div>

                <blockquote className="font-serif italic text-lg text-espresso/80 leading-relaxed mb-8 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-auto">
                  <p className="font-bold text-espresso uppercase tracking-widest text-sm mb-1">{t.author}</p>
                  <p className="text-xs font-medium text-dulce uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;