import React, { useState } from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import { FAQ_DATA } from '../constants';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
              Tire Suas Dúvidas
            </h2>
            <div className="w-16 h-0.5 bg-rose mx-auto rounded-full" />
          </FadeInOnScroll>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <FadeInOnScroll key={idx} delay={idx * 100}>
              <div className={`rounded-3xl border transition-all duration-300 ${activeIndex === idx ? 'border-rose bg-cream shadow-lg' : 'border-rose/10 bg-white hover:border-rose/30'}`}>
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group"
                >
                  <span className={`font-serif text-lg md:text-xl transition-colors ${activeIndex === idx ? 'text-rose' : 'text-espresso'}`}>
                    {item.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-rose text-white rotate-180' : 'bg-cream text-rose group-hover:bg-rose group-hover:text-white'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-espresso/70 text-base leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;