import React, { useState, useEffect } from 'react';
import Button from './Button';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#" className="font-serif text-lg md:text-xl font-bold text-rose leading-tight">
            Receitas Sem Fogo<br/>
            <span className="text-sm font-sans font-medium text-dulce uppercase tracking-widest italic">Especial de Páscoa</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-espresso hover:text-rose transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Button
            href="https://zap.tecnotreu.com.br/receitas"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Pegue Sua Receita Agora!
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-espresso"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-cream ${isMenuOpen ? 'max-h-screen py-6' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-4 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-espresso"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* MOBILE CTA */}
          <div className="pt-4">
            <Button
              href="https://zap.tecnotreu.com.br/receitas"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pegue Sua Receita Agora!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
