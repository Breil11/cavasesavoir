import React from 'react';
import { ChefHat, UtensilsCrossed, Calendar, Phone, Mail, Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;