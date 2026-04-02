import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group flex flex-col items-start bg-transparent"
    >
      {/* Aspect Ratio Container for elegant consistent imagery */}
      <Link to={`/product/${product.id}`} className="w-full relative aspect-[4/5] bg-brand-white rounded-2xl overflow-hidden mb-6 block shadow-sm group-hover:shadow-md transition-shadow">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button
            onClick={handleAdd}
            className="bg-brand-orange text-white px-4 py-2 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-[#d65f2c] transition-colors shadow-lg"
            aria-label="Agregar al carrito"
          >
            Añadir +
          </button>
        </div>
      </Link>
      
      {/* Typography block */}
      <div className="w-full flex flex-col flex-grow">
        <p className="text-[10px] uppercase tracking-widest text-brand-pink mb-2">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-xl font-serif text-white group-hover:text-brand-yellow transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto flex justify-between items-center w-full">
           <span className="text-sm tracking-wider text-brand-orange font-bold">
            ${product.price}
          </span>
           <button
            onClick={handleAdd}
            className="md:hidden text-xs border-b border-brand-orange pb-0.5 uppercase tracking-widest text-brand-orange"
          >
            Comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
};
