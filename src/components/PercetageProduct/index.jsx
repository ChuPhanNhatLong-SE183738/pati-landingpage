import React from "react";

function PercentageProduct() {
  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-4 items-center">
          <div>
            <h2 className="font-family-lora text-[28px] md:text-[32px] font-normal mb-6 leading-tight text-black">
              We’re On A Mission To Help 100,000,000 Women Visibly, Naturally
              Get Rid Of Bloating...And Feel Like Themselves Again
            </h2>

            <p className="text-lg text-gray-700 mb-6 font-family-nunito">
              Here's where we're at right now:
            </p>

            <img
              loading="lazy"
              className="lg:hidden w-full mb-6 rounded-lg"
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt="Product"
            />
            <img
              loading="lazy"
              className="lg:hidden w-full mb-6"
              src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
              alt="Statistics"
            />

            <img
              loading="lazy"
              className="hidden lg:block w-full mb-6"
              src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
              alt="Statistics"
            />
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <img
              loading="lazy"
              className="hidden lg:block w-full max-w-2xl object-contain"
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt="Product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PercentageProduct;
