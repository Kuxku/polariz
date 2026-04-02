import React, { useContext } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b border-white/10 py-8 last:border-0"
    >
      <div className="w-32 h-40 flex-shrink-0 bg-white/10 rounded-xl overflow-hidden border border-white/10 relative">
        <div className="absolute top-0 right-0 w-16 h-16 bg-brand-pink/20 blur-2xl rounded-full"></div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover relative z-10"
        />
      </div>

      <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left h-full justify-between">
        <div>
           <p className="text-[10px] uppercase tracking-widest text-brand-pink mb-2">{item.category}</p>
           <h4 className="font-serif text-2xl text-white">{item.name}</h4>
           <div className="text-sm tracking-wider text-white/60 mt-2">${item.price}</div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-6 sm:mt-0 h-full justify-between">
         <button
          onClick={() => removeFromCart(item.id)}
          className="p-1 text-white/40 hover:text-white transition-colors self-end sm:self-auto"
          aria-label="Remove"
        >
          <X className="w-5 h-5" strokeWidth={1} />
        </button>

        <div className="flex items-center gap-6">
          <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-white hover:bg-white/10 transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-light text-white">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-white hover:bg-white/10 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <div className="text-lg tracking-wider text-right hidden sm:block w-20 text-brand-orange font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
