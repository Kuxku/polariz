import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Geometric glows that blend with purple bg */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-orange opacity-15 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-brand-pink opacity-25 blur-3xl"></div>
        <div className="absolute top-[40%] left-[20%] w-[20vw] h-[20vw] rounded-full bg-brand-orange opacity-10 blur-3xl"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-center"
          >
            <span className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold mb-8 shadow-sm border border-white/20">
              Bienestar & Diversión Íntima
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 font-black tracking-tight">
              Aprende, <br className="sm:hidden" />
              <span className="text-brand-orange">Juega</span> y <br className="hidden sm:block" />
              <span className="text-brand-yellow">Conecta.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-sans text-white/70 mb-12 max-w-2xl leading-relaxed">
              Descubre nuestra colección curada de juguetes. Tecnología segura, diseño moderno y mucha diversión para elevar tu placer.
            </p>
            
            <Link to="/catalog" className="btn-primary rounded-full px-12 py-5 shadow-lg shadow-brand-orange/40 transform hover:-translate-y-1 hover:shadow-xl transition-all inline-flex items-center gap-2">
              Explorar Catálogo
            </Link>
          </motion.div>
        </div>

        {/* Hero Bottom Image Arch */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[30vh] overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] border-4 border-white/20 border-b-0 shadow-2xl hidden sm:block">
           <img 
            src="https://picsum.photos/id/10/2000/800" 
            alt="Sensual silk placeholder" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Recommended Products Grid */}
      <section className="py-24 lg:py-32 bg-white/10 backdrop-blur-sm relative overflow-hidden rounded-t-[3rem] z-20 -mt-10 sm:mt-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8 relative z-10">
            <div>
              <p className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-2">Populares</p>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white">
                Los Más Vendidos
              </h2>
            </div>
            <Link to="/catalog" className="text-sm uppercase tracking-widest text-brand-orange hover:text-brand-yellow transition-colors font-bold hidden sm:flex items-center gap-2">
              Ver Colección →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative z-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center sm:hidden">
            <Link to="/catalog" className="btn-secondary w-full rounded-full">
              Ver Selección Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Soft blob */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-pink rounded-full blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow rounded-full blur-3xl opacity-15 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-4 shadow-xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <img 
                src="https://picsum.photos/id/114/800/1200" 
                alt="Brand essence art placeholder" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 space-y-8"
            >
              <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight font-bold">
                El placer es tuyo. <br/><span className="text-brand-orange">La chispa es nuestra.</span>
              </h2>
              <p className="text-lg font-sans text-white/70 leading-relaxed">
                Creemos en un enfoque honesto, abierto y amigable para la intimidad. Todos nuestros juguetes sexuales y cosméticos íntimos están creados para divertirte, sentirse como tu segunda piel y educarte en tu propio mapa del placer.
              </p>
              <Link to="/about" className="inline-block mt-4 font-bold border-b-2 border-brand-orange text-brand-orange pb-1 text-sm uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-300">
                Conoce Nuestra Historia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
