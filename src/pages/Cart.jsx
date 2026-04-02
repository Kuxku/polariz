import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Cart = () => {
  const { cart, total, itemCount } = useContext(CartContext);

  if (itemCount === 0) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center py-20 px-4">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-lg w-full"
        >
          <ShoppingBag className="w-12 h-12 text-white/40 mx-auto mb-8" strokeWidth={1} />
          <h2 className="text-4xl font-serif text-white mb-6 tracking-tight">Tu bolsa está vacía</h2>
          <p className="text-white/60 mb-12 text-lg font-light">
            Explora nuestra colección y descubre nuevas formas de bienestar íntimo.
          </p>
          <Link to="/catalog" className="btn-primary inline-flex items-center justify-center gap-4 rounded-full">
            Empezar a explorar <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-pink mb-4">Revisión Total</p>
          <h1 className="text-5xl font-serif text-white flex items-end gap-6 border-b border-white/10 pb-8">
            Mi Bolsa 
            <span className="text-base text-white/50 tracking-wide font-sans mb-2">
              ({itemCount} items)
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="flex-grow lg:w-3/5">
            <div className="mb-12">
              <AnimatePresence>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>
            
            <Link to="/catalog" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors inline-block border-b border-white/30 hover:border-white pb-1">
               Continuar explorando
            </Link>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="bg-white/10 backdrop-blur-sm p-10 lg:p-12 lg:sticky top-32 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif text-white mb-10 pb-6 border-b border-white/10">
                Resumen de Orden
              </h3>
              
              <div className="space-y-6 mb-12 text-sm tracking-wide font-light text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-normal text-white">
                  <span>Envío Discreto</span>
                  <span>Calculado al pagar</span>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-8 mb-12 flex justify-between items-end">
                <span className="text-sm uppercase tracking-widest text-white/80">Total</span>
                <span className="text-4xl font-serif text-brand-yellow">${total.toFixed(2)}</span>
              </div>
              
              <button className="btn-primary w-full tracking-[0.3em] rounded-full py-4">
                Finalizar Compra
              </button>
              
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                 <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Transacción Encriptada y Segura
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
