import React, { useState } from "react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const [selectedOption, setSelectedOption] = useState(1); // Best Seller selected by default

  const pricingOptions = [
    {
      id: 0,
      title: "1 Bottle",
      subtitle: "1 bottle total | Save $27.99",
      price: "31.96",
      oldPrice: "59.95",
      perks: ["Free USA Shipping"],
    },
    {
      id: 1,
      badge: "BUY 2 GET 1 FREE",
      title: "2 Bottles",
      subtitle: "3 bottles total | Save $115.93",
      price: "63.92",
      oldPrice: "179.85",
      perks: ["Free USA Shipping", "Free Anti-Bloating Protocol E-book"],
    },
    {
      id: 2,
      badge: "BUY 3 GET 2 FREE",
      title: "3 Bottles",
      subtitle: "5 bottles total | Save $203.87",
      price: "95.88",
      oldPrice: "299.75",
      perks: [
        "Free USA Shipping",
        "Free Anti-Bloating Protocol E-book",
        "$20 Gift Card",
      ],
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Pricing Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingOptions.map((option) => (
            <PricingCard
              key={option.id}
              {...option}
              isSelected={selectedOption === option.id}
              onClick={() => setSelectedOption(option.id)}
            />
          ))}
        </div>

        {/* Subscription Toggle */}
        <div className="bg-[#f9f6f4] rounded-xl p-4 mb-6 flex items-center justify-center gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1B3B36]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1B3B36]"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Refills Ship Bi-Monthly
            </span>
          </label>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#1B3B36] hover:bg-[#152d29] text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors duration-300 mb-6 shadow-lg hover:shadow-xl">
          ADD TO CART
        </button>

        {/* Guarantees */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#1B3B36]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              60-Day Money-Back Guarantee
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#1B3B36]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Free Shipping From USA Included
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
