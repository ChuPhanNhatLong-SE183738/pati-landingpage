import React from "react";

function ExpertAdvice() {
  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto bg-[#F9F9F9] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
        <div className="w-full md:w-[620px] flex flex-col justify-center box-border p-[32px] text-[rgba(0,0,0,0.75)] font-[Montserrat] text-[16px] font-normal tracking-[0.6px] leading-[28.8px]">
          <p className="font-[Nunito] text-gray-500 text-sm md:text-base mb-3 font-medium">
            July 4th, 2025
          </p>
          <h2 className="font-family-lora text-[28px] md:text-[36px] leading-[1.2] text-black mb-6">
            Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
          </h2>

          <div className="mb-4">
            <p className="mb-4 font-medium">
              “Your nutrition plays a powerful role in your appearance. If your
              body is missing key vitamins and nutrients, it can’t process fat
              and upkeep healthy connective tissue, which is why unprocessed fat
              flows up and starts pushing up against your skin, forming bumps
              you know as cellulite.
            </p>
            <p className="font-medium">
              SmoothSkin by Sculptique™ contains ingredients that are
              scientifically proven to enhance microcirculation, boost lymphatic
              drainage, and reduce inflammation, which restores your tissue and
              breaks down the fat cells in your skin.”
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {/* Button aligned left */}
            <div className="self-start w-full md:w-auto">
              <button className="bg-black text-white font-family-nunito text-[16px] md:text-[18px] font-bold px-6 md:px-10 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto cursor-pointer whitespace-nowrap">
                Try Lymphatic Drainage Risk-Free
              </button>
            </div>

            {/* Guarantee centered */}
            <div className="self-center flex items-center gap-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                alt="60 day guarantee"
                className="w-6 h-6"
              />
              <span className="font-family-nunito text-[15px] md:text-[16px] text-black font-bold">
                60-Day Money-Back Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Image Section - Fills remaining space */}
        <div className="flex-1 bg-[#F3EEE0] relative min-h-[300px] md:min-h-full">
          <img
            src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
            alt="Dr. Emily Chen"
            className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpertAdvice;
