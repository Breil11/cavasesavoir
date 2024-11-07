import React, { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuItems = {
    appetizers: [
      { name: "Prosciutto-Wrapped Figs", description: "With honey and aged balsamic", price: "$12" },
      { name: "Seared Scallops", description: "Citrus butter sauce, micro greens", price: "$16" },
      { name: "Artisanal Cheese Board", description: "Selection of fine cheeses, fruits, nuts", price: "$24" }
    ],
    mains: [
      { name: "Herb-Crusted Salmon", description: "Wild-caught salmon, seasonal vegetables", price: "$32" },
      { name: "Braised Short Rib", description: "Red wine reduction, truffle mash", price: "$38" },
      { name: "Vegetable Wellington", description: "Seasonal vegetables, puff pastry", price: "$28" }
    ],
    desserts: [
      { name: "Dark Chocolate Mousse", description: "Fresh berries, gold leaf", price: "$14" },
      { name: "Crème Brûlée", description: "Tahitian vanilla, caramelized sugar", price: "$12" },
      { name: "Seasonal Fruit Tart", description: "Almond cream, fresh mint", price: "$10" }
    ]
  };

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sample Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A taste of our culinary offerings. All menus can be customized to your preferences.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {Object.keys(menuItems).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium capitalize
                  ${activeCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  } 
                  border border-gray-200 
                  first:rounded-l-md last:rounded-r-md
                  focus:z-10 focus:outline-none`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="flex justify-between items-start p-6 bg-white rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
              <span className="text-amber-600 font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}