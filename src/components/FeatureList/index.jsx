import React from "react";

function FeatureList() {
  const data = [
    {
      icon: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
      text: "Free Shipping from USA",
      description: "On all orders",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
      text: "Naturally Supports Your Body",
      description: "Promotes healthy immune cell functions",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
      text: "100% Natural Ingredients",
      description: "8 active, natural ingredients",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
      text: "Try it Risk Free for 60 Days",
      description: "60-day money-back guarantee",
    },
  ];

  return (
    <div className="bg-[#F3EEE0] py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="mb-4">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h3 className="font-family-nunito whitespace-nowrap text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] mb-2 leading-tight">
                {item.text}
              </h3>
              <p className="font-family-nunito font-semibold text-[14px] md:text-[15px] text-[#333] m-0 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
