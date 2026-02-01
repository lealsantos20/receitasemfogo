import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-20 pb-12 border-t border-rose/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-2xl font-bold text-rose leading-tight">
              Receitas Sem Fogo
            </a>
            <p className="text-espresso/40 mt-2 text-sm max-w-xs font-medium uppercase tracking-widest">
              Transformando sua cozinha em uma doçaria profissional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['Instagram', 'Facebook', 'Threads', 'WhatsApp'].map(social => (
              <a key={social} href="#" className="text-espresso/60 hover:text-rose font-medium text-sm transition-colors tracking-widest uppercase">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rose/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-espresso/40 text-xs font-medium uppercase tracking-widest">
            Receitas Sem Fogo – Especial de Páscoa © 2026
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-espresso/30 hover:text-rose text-[10px] font-bold uppercase tracking-widest">Termos de Uso</a>
            <a href="#" className="text-espresso/30 hover:text-rose text-[10px] font-bold uppercase tracking-widest">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;