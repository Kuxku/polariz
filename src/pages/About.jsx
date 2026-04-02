import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen text-white pt-32">

      {/* Hero / Philosophy */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto mb-40 mt-16 text-center">
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-pink mb-6"
        >
          Nuestra Esencia
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-[6rem] font-serif leading-[1.1] max-w-5xl mx-auto tracking-tight"
        >
          Redefiniendo el placer <br/><span className="italic font-light text-brand-yellow">con elegancia y ciencia.</span>
        </motion.h1>
      </section>

      {/* Image & Text Split */}
      <section className="bg-white/5 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden bg-white/10 backdrop-blur-sm p-4 rounded-[2.5rem] shadow-xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 order-2 lg:order-1 relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 blur-2xl rounded-full"></div>
              <img 
                src="https://picsum.photos/id/115/800/1200" 
                alt="Minimalist design placeholder" 
                className="w-full h-full object-cover rounded-[2rem] relative z-10"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 space-y-12 order-1 lg:order-2"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-pink mb-4 block">Capítulo I</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                  Diseño que respeta tu espacio íntimo.
                </h2>
              </div>
              <div className="h-px w-24 bg-brand-orange"></div>
              <div className="text-lg text-white/70 font-light leading-loose space-y-6">
                <p>
                  POLARIZ nace de una necesidad muy simple: crear productos de bienestar íntimo que no necesites esconder. Creemos que la sexualidad es una expresión natural de la belleza y merece ser celebrada con el mismo cuidado que aplicamos al resto de nuestras rutinas.
                </p>
                <p>
                  Alejándonos de los estereotipos de la industria, desarrollamos objetos elegantes que combinan tecnología silenciosa, materiales premium seguros para el cuerpo e interfaces intuitivas que simplemente funcionan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="mb-24 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4 text-center">Nuestros Principios</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            {[
              {
                id: "01",
                title: "Ciencia Aplicada",
                desc: "Cada curva, cada motor y cada material está apoyado por investigaciones somáticas y consejos de fisioterapeutas pélvicos. No diseñamos al azar, diseñamos para funcionar.",
              },
              {
                id: "02",
                title: "Sostenibilidad Segura",
                desc: "Silicone 100% de grado médico libre de fatalatos y embalajes minimalistas amigables con el ecosistema. Cuidar de ti también significa cuidar de nuestro entorno.",
              },
              {
                id: "03",
                title: "Conexión Real",
                desc: "Desmitificamos tabúes mediante la educación y ofrecemos una experiencia transparente, de apoyo real. Porque un viaje íntimo requiere confianza absoluta.",
              }
            ].map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group"
              >
                <span className="text-xs tracking-[0.2em] font-sans text-brand-orange mb-8 block">
                  {valor.id} //
                </span>
                <h3 className="text-2xl font-serif text-brand-orange mb-6">{valor.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {valor.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
