import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { itemCount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Tienda', path: '/catalog' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#2d1b4e]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="text-3xl font-serif tracking-widest text-brand-orange uppercase">
              POLARIZ
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <Link to="/cart" className="relative text-white hover:text-white/70 transition-colors flex items-center gap-2 group">
              <span className="text-xs uppercase tracking-widest hidden md:inline group-hover:underline underline-offset-4">Cart</span>
              <div className="relative">
                <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -bottom-2 -right-2 bg-brand-orange text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-[#2d1b4e] z-40 px-6 py-10 flex flex-col items-center justify-start space-y-10"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-serif tracking-widest uppercase transition-colors duration-300 ${isActive
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
