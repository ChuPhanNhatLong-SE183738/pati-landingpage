import React from "react";

const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Echinacea purpurea Extract",
      description:
        "Known for its anti-inflammatory properties, it may support skin health.",
    },
    {
      name: "Dandelion Extract",
      description:
        "Traditionally used as a diuretic, it may help reduce water retention.",
    },
    {
      name: "Burdock Powder",
      description: "Contains antioxidants that may promote skin clarity.",
    },
    {
      name: "Cleavers Extract",
      description: "Believed to support lymphatic drainage and detoxification.",
    },
    {
      name: "Rutin",
      description:
        "A flavonoid that may strengthen blood vessels and improve circulation.",
    },
    {
      name: "Bromelain Powder",
      description:
        "An enzyme from pineapple that may reduce inflammation and support tissue repair.",
    },
    {
      name: "Lemon Powder",
      description:
        "Rich in vitamin C, it may aid in collagen production and skin rejuvenation.",
    },
    {
      name: "Kelp Extract",
      description:
        "A source of iodine and minerals that may support skin metabolism.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-[#1B3B36] mb-4">
            Ingredients proven by science
          </h2>
          <div className="w-24 h-1 bg-[#1B3B36] mx-auto rounded-full"></div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#f9f6f4] to-white rounded-2xl p-6 border border-gray-100 hover:border-[#1B3B36]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1B3B36] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg text-[#1B3B36] mb-2 group-hover:text-[#2a5550] transition-colors">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Science Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1B3B36] text-white px-6 py-3 rounded-full">
            <svg
              className="w-5 h-5"
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
            <span className="font-semibold">Clinically Tested Formulation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;
