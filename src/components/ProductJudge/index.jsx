import React from "react";

function ProductJudge() {
  const datas = [
    {
      id: 1,
      text: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
      url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
    },
    {
      id: 2,
      text: `Your ankles disappear into "kankles" by the end of the day.`,
      url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
    },
    {
      id: 3,
      text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
      url: "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
    },
    {
      id: 4,
      text: "You feel foggy and exhausted even after a full night's sleep.",
      url: "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
    },
    {
      id: 5,
      text: "You wake up stiff and achy, like your body aged overnight.",
      url: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
    },
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto mt-10">
      {/* HEADER 1 */}
      <h2 className="text-[26px] md:text-[32px] font-family-lora text-center text-black mb-6 leading-tight">
        Why Your{" "}
        <span className="text-[26px] md:text-[32px] font-family-lora text-center mb-6 text-[#039869]">
          Bloating, Brain Fog & Swollen Legs
        </span>{" "}
        Are
        <br />
        Actually Connected
      </h2>

      <p className="font-family-nunito text-center text-black mb-12 text-lg">
        If you're experiencing more than one of these symptoms, your body is
        trying to tell you <br />
        something:
      </p>

      <div className="hidden lg:grid lg:grid-cols-5 gap-6">
        {datas.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <div className="bg-white rounded-t-lg overflow-hidden shadow-sm border border-gray-100">
              <img
                src={item.url}
                alt={`Symptom ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 h-32 flex items-center justify-center">
              <p
                className="font-family-nunito text-base font-normal text-black text-center m-0"
                style={{ letterSpacing: "0.6px", lineHeight: "20.8px" }}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden space-y-4">
        {datas.map((item) => (
          <div key={item.id} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img
                src={item.url}
                alt={`Symptom ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-32 flex items-center justify-center bg-[#f7f6f7] rounded-lg p-4">
              <p className="font-family-nunito text-base font-normal text-black text-center m-0">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto mb-8 mt-8">
        {/* Desktop Image */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
          alt="Here's what nobody's telling you"
          className="w-full hidden min-[820px]:block"
        />
        {/* Mobile/Tablet Image */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
          alt="Here's what nobody's telling you"
          className="w-full min-[820px]:hidden"
        />
      </div>

      <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="product_arrow"
          className="w-8 md:w-10 lg:w-12 max-h-16 transition-all duration-300"
        />
      </div>

      {/* HEADER 2 */}
      <h2 className="text-[26px] md:text-[32px] font-family-lora text-center text-black mb-6 leading-tight">
        The Connection{" "}
        <span className="text-[26px] md:text-[32px] font-family-lora text-center mb-6 text-[#039869]">
          You've Been Missing
        </span>
      </h2>

      <div className="w-full mx-auto mb-6 min-[820px]:max-w-[920px]">
        {/* Desktop Image */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
          alt="table"
          className="w-full h-auto aspect-[920/551] object-contain rounded-lg shadow-sm hidden min-[820px]:block"
        />
        {/* Mobile/Tablet Image */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
          alt="table"
          className="w-full h-auto object-contain rounded-lg shadow-sm min-[820px]:hidden"
        />
      </div>

      <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="product_arrow"
          className="w-8 md:w-10 lg:w-12 max-h-16 transition-all duration-300"
        />
      </div>

      {/* HEADER 3 */}
      <h2 className="text-[26px] md:text-[32px] font-family-lora text-center text-black mb-14 leading-tight">
        Your{" "}
        <span className="text-[26px] md:text-[32px] font-family-lora text-center mb-6 text-[#039869]">
          Hidden
        </span>{" "}
        Drainage System
      </h2>

      <div className="flex flex-col min-[820px]:flex-row gap-16 items-stretch mb-16">
        {/* Right Column - Graph Image (First on mobile) */}
        <div className="flex-1 w-full min-[820px]:w-1/2 max-w-[570px] min-[820px]:order-2 flex items-center justify-center">
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
            alt="How Lymphatic System Fails After Age 35"
            className="w-4/5 min-[820px]:w-full h-auto"
          />
        </div>

        {/* Left Column - Text Content (Second on mobile) */}
        <div className="flex-1 w-full min-[820px]:w-1/2 max-w-[570px] min-[820px]:order-1">
          <p className="font-family-nunito text-lg text-black mb-4 font-normal leading-[23.4px]">
            Your lymphatic system is your body's internal cleaning crew—a
            network of vessels that processes{" "}
            <strong>
              3-4 liters of cellular waste and excess fluid every single day.
            </strong>
          </p>

          <p className="font-family-nunito text-lg text-black mb-6 font-normal leading-[23.4px]">
            When it's working properly, you don't even know it exists.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt="Checkmark"
                className="w-5 h-5 shrink-0 mt-0.5"
              />
              <p className="font-family-nunito text-lg text-[#0C7C00] font-semibold leading-[23.4px]">
                Waste gets drained away
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt="Checkmark"
                className="w-5 h-5 shrink-0 mt-0.5"
              />
              <p className="font-family-nunito text-lg text-[#0C7C00] font-semibold leading-[23.4px]">
                Fluid stays balanced.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                alt="Checkmark"
                className="w-5 h-5 shrink-0 mt-0.5"
              />
              <p className="font-family-nunito text-lg text-[#0C7C00] font-semibold leading-[23.4px]">
                Your body feels light and energized.
              </p>
            </div>
          </div>

          <div className="bg-[#FFE3E3] rounded-lg p-4 mb-6 w-full h-auto min-h-[79px] flex items-center">
            <p className="font-family-nunito text-lg text-black font-normal leading-[23.4px]">
              But after age 35, declining estrogen hijacks this system's ability
              to function.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                alt="X"
                className="w-4 h-4 shrink-0 mt-1"
              />
              <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                Vessel pumping weakens.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                alt="X"
                className="w-4 h-4 shrink-0 mt-1"
              />
              <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                One-way valves fail.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                alt="X"
                className="w-4 h-4 shrink-0 mt-1"
              />
              <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                Protein clogs form.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                alt="X"
                className="w-4 h-4 shrink-0 mt-1"
              />
              <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                Vessel walls become leaky.
              </p>
            </div>
          </div>

          <p className="font-family-nunito text-lg text-black font-normal mt-4 leading-[23.4px]">
            Instead of processing and removing waste, it backs up in your
            tissues.
          </p>
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="flex flex-col min-[820px]:flex-row gap-16 items-stretch mb-8">
        {/* Left Column - Image */}
        <div className="flex-1 w-full min-[820px]:w-1/2 max-w-[570px] flex items-center justify-center">
          <img
            src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
            alt="Lymphatic System Fluid Build Up"
            className="w-full h-auto"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="flex-1 w-full min-[820px]:w-1/2 max-w-[570px]">
          <p className="font-family-nunito text-lg text-black font-bold mb-4 leading-[23.4px]">
            And it accumulates. Day after day. Week after week.
          </p>

          <p className="font-family-nunito text-lg text-black font-normal mb-4 leading-[23.4px]">
            That gallon of fluid your body should be draining every 24 hours?
            It's pooling in your stomach, your legs, your face—anywhere gravity
            and tissue structure allow it to settle.
          </p>

          <div className="bg-[#FFE3E3] rounded-lg p-4 mb-6 w-full h-auto min-h-[79px]">
            <p className="font-family-nunito text-lg text-black font-normal leading-[23.4px] mb-4">
              The metabolic waste your cells produce overnight? It's still
              sitting there at noon. At dinner. While you're trying to fall
              asleep.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <img
                  src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                  alt="X"
                  className="w-4 h-4 shrink-0 mt-1"
                />
                <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                  That's why you're bloated.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                  alt="X"
                  className="w-4 h-4 shrink-0 mt-1"
                />
                <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                  That's why your ankles swell.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                  alt="X"
                  className="w-4 h-4 shrink-0 mt-1"
                />
                <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                  That's why you see cellulite.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                  alt="X"
                  className="w-4 h-4 shrink-0 mt-1"
                />
                <p className="font-family-nunito text-lg text-[#A60003] font-semibold leading-[23.4px]">
                  That's why you feel exhausted and foggy.
                </p>
              </div>
            </div>
          </div>

          <p className="font-family-nunito text-lg text-black font-bold mb-4 leading-[23.4px]">
            Your cells are literally sitting in their own waste—and your body
            can't flush it out.
          </p>

          <p className="font-family-nunito text-lg text-black font-normal leading-[23.4px]">
            The longer this goes on, the worse it gets. More congestion. More
            inflammation. More pressure on an already compromised system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductJudge;
