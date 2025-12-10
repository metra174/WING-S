import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  // Inicializa o tema. Padrão é dark se não houver preferência salva.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-wings-cream text-gray-800 dark:bg-wings-black dark:text-gray-200 font-sans selection:bg-wings-gold selection:text-wings-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <InfoSection />
      
      <div id="menu-container">
        {MENU_DATA.map((category, index) => (
          <MenuSection 
            key={category.id} 
            category={category} 
            inverted={index % 2 !== 0} 
          />
        ))}
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;