import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif text-white mb-4">Producto Obsoleto</h2>
        <Link to="/catalog" className="btn-outline">Volver a la colección</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addToCart(product);
    }
  };

  return (
    <div className="min-h-[85vh] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <Link to="/catalog" className="inline-block text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white mb-16 transition-colors border-b border-transparent hover:border-white pb-1">
          ← Catálogo
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full aspect-[4/5] overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 blur-3xl rounded-full"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover relative z-10" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2 flex flex-col lg:sticky lg:top-32"
          >
            <span className="text-[10px] tracking-widest uppercase text-brand-orange font-bold px-3 py-1 bg-brand-orange/20 rounded-full self-start mb-4">{product.category}</span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4 leading-tight font-bold">{product.name}</h1>
            <p className="text-xl font-light text-white/70 mb-12 leading-relaxed">
              {product.description}
            </p>
            <div className="text-3xl font-bold tracking-wide text-brand-orange mb-12 border-b border-white/10 pb-12">
              ${product.price}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <div className="flex flex-col mb-4 sm:mb-0">
                 <span className="text-[10px] uppercase tracking-widest text-white/50 mb-3">Cantidad</span>
                 <div className="flex items-center border border-white/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-4 text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-4 text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action */}
              <div className="w-full sm:w-auto flex-grow flex items-end sm:pb-0 h-full">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full py-4 sm:mt-8 h-full flex items-center justify-center rounded-full"
                >
                  Añadir al carrito - ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-white/40 mt-4">
              Empaque discreto. Materiales seguros. Envío en 24h.
            </p>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#2d1b4e]/95 backdrop-blur-md p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-40 border-t border-white/10">
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2 rounded-full"
              >
                Añadir al carrito — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-24 md:hidden"></div>
    </div>
  );
};
