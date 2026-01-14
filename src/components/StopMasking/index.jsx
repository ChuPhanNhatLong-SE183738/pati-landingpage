import React from "react";

function StopMasking() {
  return (
    <section className="py-12 xl:py-16 bg-[#F3EEE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          <div>
            {/* Desktop Trustpilot Image */}
            <img
              loading="lazy"
              className="hidden xl:block w-full max-w-xs mb-6"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
              alt="Trustpilot"
            />
            {/* Mobile Trustpilot Image */}
            <img
              loading="lazy"
              className="xl:hidden w-full max-w-sm mx-auto mb-6"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
              alt="Trustpilot"
            />

            <h2 className="text-3xl md:text-[32px] font-family-lora mb-6 leading-tight">
              Stop Masking Symptoms. Start Restoring Root Cause.
            </h2>

            <div className="space-y-4 mb-6 font-family-nunito md:text-[18px] tracking-wide">
              <p>
                You deserve to feel like yourself again. To wake up without
                puffiness. To see your ankles. To look in the mirror and
                recognize the vibrant woman staring back. To have energy for the
                people you love.
              </p>
              <p>
                You deserve a solution that actually works. Not temporary
                relief. Not symptom masking. Complete lymphatic restoration.
              </p>
            </div>

            {/* Mobile Before/After Image */}
            <img
              loading="lazy"
              className="xl:hidden w-full rounded-2xl mb-6"
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Transformation"
            />

            <div className="flex flex-col items-start">
              <button className="inline-block mx-auto md:mx-0 font-family-nunito rounded-[4px] bg-black text-white py-4 px-12 md:px-20 text-[18px] hover:bg-[#333] transition-colors mb-4 cursor-pointer border-0">
                Try Lymphatic Drainage Risk-Free
              </button>

              <div className="flex mx-auto md:mx-16 items-center gap-2 text-[16px] font-family-nunito tracking-wide">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                  className="w-6 h-6"
                  alt="Guarantee"
                />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Desktop Before/After Image */}
          <div className="hidden xl:flex items-center justify-center">
            <img
              loading="lazy"
              className="w-full rounded-2xl"
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Transformation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StopMasking;
