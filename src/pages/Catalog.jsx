import React, { useState } from 'react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-[90vh] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-pink mb-4">Colección Completa</p>
          <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight border-b border-white/20 pb-12 inline-block px-12">
            Catálogo
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-20 flex justify-center border-b border-t border-white/10 py-4">
          <div className="flex gap-x-12 overflow-x-auto hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`uppercase tracking-[0.2em] text-xs transition-colors whitespace-nowrap px-2 py-1 ${
                  selectedCategory === cat 
                  ? 'text-brand-orange border-b border-brand-orange' 
                  : 'text-white/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-32"
          >
            <h3 className="text-2xl font-serif text-white mb-4">No encontramos productos en esta categoría.</h3>
            <button onClick={() => setSelectedCategory('All')} className="btn-outline">Ver toda la colección</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
