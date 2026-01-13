import React from "react";

const PricingCard = ({
  badge,
  title,
  subtitle,
  price,
  oldPrice,
  perks = [],
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected ? "transform scale-105" : "hover:scale-102"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          {badge}
        </div>
      )}

      {/* Card */}
      <div
        className={`bg-white rounded-2xl p-6 border-4 transition-all ${
          isSelected
            ? "border-[#1B3B36] shadow-2xl"
            : "border-gray-200 shadow-lg hover:border-gray-300"
        }`}
      >
        {/* Radio Button */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 mt-1">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                isSelected ? "border-[#1B3B36]" : "border-gray-300"
              }`}
            >
              {isSelected && (
                <div className="w-3.5 h-3.5 bg-[#1B3B36] rounded-full"></div>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-2xl font-bold text-[#1B3B36]">${price}</div>
            <div className="text-sm text-gray-500 line-through">
              ${oldPrice}
            </div>
          </div>
        </div>

        {/* Perks */}
        {perks.length > 0 && (
          <div
            className={`mt-4 pt-4 border-t space-y-2 ${
              isSelected ? "border-[#1B3B36]/20" : "border-gray-200"
            }`}
          >
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-700">{perk}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
