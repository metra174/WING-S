import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-wings-black text-gray-200 font-sans selection:bg-wings-gold selection:text-wings-black">
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