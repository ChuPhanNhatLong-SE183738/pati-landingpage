import React from "react";

function WhyNothingHasWorked() {
  const datas = [
    {
      id: 1,
      imageUrl: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
      title: "You cut out gluten, dairy, sugar.\nYou ate clean for months.",
      failSection: {
        icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
        label: "Why it failed",
        description:
          "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
      },
    },
    {
      id: 2,
      imageUrl: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
      title: "You tried viral lymphatic drops\nfrom TikTok.",
      failSection: {
        icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
        label: "Why it failed",
        description:
          'They’re just pricey water with trace herbs. The "active ingredients" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.',
      },
    },
    {
      id: 3,
      imageUrl: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
      title: "You got lymphatic massage or\nbought compression socks.",
      failSection: {
        icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
        label: "Why it failed",
        description:
          "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
      },
    },
  ];

  return (
    <>
      <div className="bg-[#f7f2e7] pb-12 md:pb-20 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-12 max-w-[800px] mx-auto">
            <h2 className="font-family-lora text-[28px] md:text-[32px] font-normal leading-[1.3] tracking-[0.6px] text-black m-0 mb-4 text-center break-words">
              Why Nothing Has{" "}
              <span className="text-[#039869] text-[28px] md:text-[32px] font-normal leading-[1.3] tracking-[0.6px]">
                Worked
              </span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {datas.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-sm overflow-hidden h-full"
              >
                {/* Image Section */}
                <div className="w-full">
                  <img
                    src={item.imageUrl}
                    alt={item.title.replace("\n", " ")}
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 w-full px-6 pb-8 pt-6">
                  <h4 className="font-family-trirong text-[18px] md:text-[22px] text-black m-0 mb-6 px-2 leading-snug whitespace-pre-line">
                    {item.title}
                  </h4>

                  {/* Pink Box */}
                  <div className="bg-[#FFE3E3] p-6 rounded-lg flex-1 flex flex-col mt-auto">
                    {/* Header */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="font-family-nunito text-[16px] font-semibold text-black tracking-wide">
                        {item.failSection.label}
                      </span>
                      <img
                        loading="lazy"
                        src={item.failSection.icon}
                        alt="X"
                        className="w-4 h-4 flex-shrink-0"
                      />
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="font-family-nunito text-[16px] font-bold leading-[20.8px] tracking-[0.6px] text-black m-0 text-center block">
                        {item.failSection.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Arrows and Green Box */}
          <div className="w-full max-w-[1000px] mx-auto">
            {/* Mobile Image */}
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
              alt="The Missing Piece"
              className="w-full mt-5 h-auto block md:hidden"
            />
            {/* Desktop Image */}
            <img
              src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
              alt="The Missing Piece"
              className="w-full h-auto hidden md:block"
            />
          </div>

          {/* CTA Button and Guarantee */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-4">
            <button className="bg-black text-white font-family-nunito text-[16px] md:text-[20px] font-semibold px-8 md:px-20 py-4 md:py-5 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Try Lymphatic Drainage Risk-Free
            </button>

            <div className="flex items-center gap-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                alt="60 day guarantee"
                className="w-6 h-6"
              />
              <span className="font-family-nunito text-[16px] text-black font-semibold">
                60 day money-back guarantee
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-5 md:py-10"></div>
    </>
  );
}

export default WhyNothingHasWorked;
