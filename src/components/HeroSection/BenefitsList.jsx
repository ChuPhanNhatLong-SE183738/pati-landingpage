import React from "react";

const BenefitsList = () => {
  const benefits = [
    {
      icon: "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
      text: "Join over 93 Thousand who say - it WORKS!",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
      text: "Restores your body's natural 24-hour lymphatic cycle",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
      text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
      text: "Helps fall asleep faster, stay asleep longer and wake up energized",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
      text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
      text: "Boosts energy, mental clarity and emotional balance",
    },
  ];

  return (
    <div className="space-y-3">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {benefit.icon.startsWith("http") ? (
            <img
              src={benefit.icon}
              alt=""
              className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          ) : (
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <p className="text-black text-base md:text-lg font-family-nunito">
            {benefit.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
