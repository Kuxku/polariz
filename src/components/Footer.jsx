import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-base pt-24 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-8">
          <Link to="/" className="inline-block">
            <span className="font-serif text-5xl tracking-widest text-brand-base uppercase">POLARIZ</span>
          </Link>
          <p className="text-brand-accent/80 max-w-sm text-sm leading-loose font-light">
            Descubre nuestra línea exclusiva de bienestar íntimo diseñada para potenciar tu seguridad, elevar el confort y celebrar cada experiencia de forma equilibrada.
          </p>
          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-brand-accent hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-[0.2em]">Instagram</span>
            </a>
            <a href="#" className="text-brand-accent hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-[0.2em]">Pinterest</span>
            </a>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="hidden lg:block lg:col-span-1"></div>

        {/* Links Column 1 */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif italic text-2xl text-white mb-8">Navegación</h4>
          <ul className="space-y-4">
            <li><Link to="/catalog" className="text-brand-accent/80 hover:text-white text-sm tracking-wider uppercase transition-colors">Catálogo Completo</Link></li>
            <li><Link to="/about" className="text-brand-accent/80 hover:text-white text-sm tracking-wider uppercase transition-colors">La Marca</Link></li>
            <li><Link to="/contact" className="text-brand-accent/80 hover:text-white text-sm tracking-wider uppercase transition-colors">Contacto</Link></li>
            <li><Link to="/cart" className="text-brand-accent/80 hover:text-white text-sm tracking-wider uppercase transition-colors">Mi Carrito</Link></li>
          </ul>
        </div>
        
        {/* Links Column 2 */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif italic text-2xl text-white mb-8">Soporte</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-brand-accent/80 hover:text-white text-sm tracking-wider transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" className="text-brand-accent/80 hover:text-white text-sm tracking-wider transition-colors">Envíos Discretos</a></li>
            <li><a href="#" className="text-brand-accent/80 hover:text-white text-sm tracking-wider transition-colors">Devoluciones</a></li>
            <li><a href="#" className="text-brand-accent/80 hover:text-white text-sm tracking-wider transition-colors">Privacidad Total</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24 pt-8 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-brand-accent/60 uppercase">
        <p>&copy; {new Date().getFullYear()} POLARIZ INTIMATE WELLNESS.</p>
        <p className="mt-4 md:mt-0">Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
