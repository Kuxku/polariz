import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('invalid_email');
      return;
    }
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand-pink mb-6">Concierge</p>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-[5rem] font-serif text-white leading-tight max-w-4xl"
          >
            Estamos aquí <br/>
            <span className="italic font-light text-brand-yellow">para asistirte en privado.</span>
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          
          {/* Info Side */}
          <div className="lg:w-1/3 relative z-10 space-y-16">
            
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink mb-6">Asistencia VIP</h3>
              <p className="font-light text-lg text-white/70 leading-relaxed mb-8">
                Nuestro equipo de expertos comprende la sensibilidad de tus requerimientos y está capacitado para guiarte en cada paso.
              </p>
              <div className="space-y-4 font-serif text-2xl">
                 <p className="hover:text-brand-orange transition-colors cursor-pointer text-white">support@polariz.com</p>
                 <p className="text-white/80">+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-16">
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink mb-6">Sede Central</h3>
              <p className="text-lg font-light text-white/70 leading-relaxed">
                450 Elegance Boulevard,<br />
                Suite 12,<br />
                San Francisco, CA 94107
              </p>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:w-2/3 relative z-10 bg-white/10 backdrop-blur-sm p-10 sm:p-16 border border-white/10 rounded-2xl">
            <h3 className="text-3xl font-serif text-white mb-12">Envíanos detalladamente tu inquietud</h3>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              
               <AnimatePresence>
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-brand-orange border-l-2 border-brand-orange pl-4 text-sm tracking-wide">
                    Por favor, completa todos los campos requeridos.
                  </motion.div>
                )}
                {status === 'invalid_email' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-brand-orange border-l-2 border-brand-orange pl-4 text-sm tracking-wide">
                    Ingresa una dirección de email válida.
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-brand-yellow border-b border-brand-yellow pb-4 text-lg font-serif italic">
                    Gracias. Hemos recibido tu mensaje y una conserje te contactará dentro de las próximas 12 horas.
                  </motion.div>
                )}
               </AnimatePresence>

              <div className="space-y-12">
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-white/50 absolute -top-3 left-0 bg-transparent px-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent px-4 py-6 border border-white/20 focus:outline-none focus:border-brand-orange transition-colors font-light text-white rounded-lg"
                  />
                </div>

                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-white/50 absolute -top-3 left-0 bg-transparent px-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent px-4 py-6 border border-white/20 focus:outline-none focus:border-brand-orange transition-colors font-light text-white rounded-lg"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="text-xs uppercase tracking-widest text-white/50 absolute -top-3 left-0 bg-transparent px-2">Tu Mensaje</label>
                <textarea 
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent px-4 py-6 border border-white/20 focus:outline-none focus:border-brand-orange transition-colors font-light resize-none text-white rounded-lg"
                ></textarea>
              </div>
              
              <div className="flex justify-end pt-8">
                <button 
                  type="submit" 
                  className="btn-primary w-full sm:w-auto rounded-full"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
