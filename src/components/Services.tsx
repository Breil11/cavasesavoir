import React from 'react';
import { UtensilsCrossed, Users, GlassWater, ChefHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Custom Menu Design",
      description: "Personalized menus crafted to your preferences and dietary requirements."
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: "Full-Service Catering",
      description: "Professional staff, setup, service, and cleanup for a seamless experience."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event Planning",
      description: "Comprehensive event coordination and planning assistance."
    },
    {
      icon: <GlassWater className="h-8 w-8" />,
      title: "Bar Service",
      description: "Professional bartenders and custom cocktail menus."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive catering solutions tailored to make your event exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-amber-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}