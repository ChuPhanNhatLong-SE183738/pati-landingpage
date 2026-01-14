import React, { useState } from "react";

function IngredientsList() {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleAccordion = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const data = [
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Reactivate Lymphatic Pumps",
      titleHighlight: "Cleavers Extract (100mg)",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
      description: `
            Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.
[Study: Enhanced NK cell activity in immunosuppressed models]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Flush Excess Fluid",
      titleHighlight: "Dandelion Extract (250mg)",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
      description: `
            Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).
[Study: First human pilot study on diuretic effects]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Break Down Protein Clogs",
      titleHighlight: "Bromelain Powder (100mg)",
      img: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
      description: `
            Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.
[Study: As effective as prescription NSAIDs for inflammation]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Strengthen Vessel Walls",
      titleHighlight: "Rutin (100mg)",
      img: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
      description: `
            Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.
[Study: Systematic review of 1,643 participants]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Reduce Inflammation",
      titleHighlight: "Burdock Root Powder (200mg)",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
      description: `
             Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.
[Study: 42-day trial in osteoarthritis patients]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Boost Immune Clearance",
      titleHighlight: "Echinacea Purpurea Extract (500mg)",
      img: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
      description: `
            Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.
[Study: Increased NK cell cytotoxic activity]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Support Metabolism",
      titleHighlight: "Kelp Extract (30mg)",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
      description: `
            Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.
[Study: Dose-dependent increase in TSH levels]
            `,
    },
    {
      mark: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419",
      title: "Antioxidant Protection",
      titleHighlight: "Lemon Powder (50mg)",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
      description: `
            Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.
[Study: Triple-masked trial in 90 participants]
            `,
    },
  ];

  // Helper function to handle text splitting
  const renderDescription = (text) => {
    const parts = text.split("[Study:");
    const mainText = parts[0].trim();
    const studyText = parts.length > 1 ? `[Study:${parts[1]}` : null;

    return (
      <>
        <p className="text-black mb-2">{mainText}</p>
        {studyText && <p className="text-black mt-1">{studyText.trim()}</p>}
      </>
    );
  };

  return (
    <div className="bg-[#F7F2E7] mt-10 py-12 md:py-20">
      <div className="max-w-[1340px] mx-auto px-6 md:px-20">
        <div className="mb-12 text-center">
          <h2 className="font-family-lora text-[32px] md:text-[40px] leading-tight text-black mb-4">
            <span className="text-[32px] font-family-lora md:text-[40px] text-[#039869]">
              The 8-Ingredient System
            </span>{" "}
            That Restores What <br /> Hormones Once Maintained
          </h2>
          <p className="font-family-nunito text-[18px] font-normal leading-[23.4px] tracking-[0.6px] text-black text-center max-w-[800px] mx-auto mt-4">
            Sculptique is the only formula that addresses ALL 6 mechanisms of
            lymphatic dysfunction simultaneously—not with symbolic doses, but
            with therapeutic amounts based on clinical research.
          </p>
          <p className="font-family-nunito text-[18px] font-normal leading-[23.4px] tracking-[0.6px] text-black text-center max-w-[800px] mx-auto">
            Not just moving fluid temporarily. Not just reducing inflammation.{" "}
            <span className="font-bold">Complete restoration.</span>
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:bg-black lg:border lg:border-black lg:rounded-xl lg:overflow-hidden lg:gap-px flex flex-col gap-4 lg:gap-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col h-full cursor-pointer group relative border-2 border-black rounded-lg lg:border-0 lg:rounded-none overflow-hidden"
              onClick={() => toggleAccordion(index)}
            >
              {/* Top section */}
              <div className="hidden lg:flex p-6 pb-2 flex-col items-center shrink-0">
                <div className="flex items-start justify-center gap-2 w-full min-h-[40px] md:min-h-[44px]">
                  <img
                    src={item.mark}
                    className="w-4 h-4 mt-0.5 shrink-0"
                    alt="check"
                  />
                  <span className="font-family-nunito text-[11px] md:text-[16px] text-[#0c7c00] tracking-wider text-center leading-tight">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center justify-center w-full h-[100px]">
                  <img
                    className="w-auto max-w-[120px] max-h-[80px] mx-auto object-contain"
                    src={item.img}
                    alt={item.titleHighlight}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:hidden px-3 pt-4 pb-2 flex items-center justify-center gap-2">
                <img src={item.mark} className="w-4 h-4 shrink-0" alt="check" />
                <span className="font-family-nunito text-[14px] text-[#0c7c00] tracking-wider text-center leading-tight">
                  {item.title}
                </span>
              </div>

              <div className="w-full bg-white z-10">
                <div className="px-3 lg:px-6 py-3 lg:py-5">
                  <div className="flex items-start w-full select-none">
                    <div className="flex-1 flex items-start gap-2">
                      <img
                        src={item.img}
                        className="w-16 h-16 lg:hidden object-contain shrink-0"
                        alt={item.titleHighlight}
                      />
                      <div className="flex-1">
                        <span className="font-family-lora text-[15px] font-extrabold text-gray-900 leading-tight">
                          {item.titleHighlight}
                        </span>
                      </div>
                    </div>
                    <div className="ml-2 flex items-start justify-end shrink-0">
                      <img
                        className={`w-3.5 h-3.5 opacity-60 transition-transform duration-500 ${
                          openIndices.includes(index) ? "rotate-180" : ""
                        }`}
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"
                        alt="toggle"
                      />
                    </div>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      openIndices.includes(index)
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 text-[14px] leading-relaxed font-family-nunito">
                        {renderDescription(item.description)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 w-full max-w-[580px] mx-auto">
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982"
            className="block md:hidden w-full h-auto rounded-xl"
            alt="Sculptique Benefits Mobile"
            loading="lazy"
          />

          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"
            className="hidden md:block w-full h-auto rounded-xl"
            alt="Sculptique Benefits Desktop"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default IngredientsList;
