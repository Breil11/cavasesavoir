import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80"
          alt="Catering spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Exceptional Catering for
          <span className="block text-amber-400">Unforgettable Events</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Elevate your gatherings with our premium catering services. From intimate dinners to grand celebrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-700 transition">
            Book Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}