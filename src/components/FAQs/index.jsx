import React, { useState } from "react";

function FAQs() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const data = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How is this different from lymphatic drops I saw on TikTok?",
        answer:
          "Lymphatic drops have poor bioavailability-liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.\n\nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls?not just make you urinate more.",
      },
      {
        question: "Why didn't my diet changes work?",
        answer:
          "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated?the backed-up lymphatic waste was still pooling in your tissues.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most women notice something within the first week?feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time?we recommend 90 days for complete results.",
      },
      {
        question: "Is this safe? Any side effects?",
        answer:
          "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected?you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.",
      },
      {
        question: "Can I take this with other supplements?",
        answer:
          "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.",
      },
      {
        question: "How do I use it?",
        answer:
          "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.",
      },
      {
        question: "What if it doesn't work for me?",
        answer:
          "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized?send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.",
      },
      {
        question: "Where is this manufactured?",
        answer:
          "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.",
      },
      {
        question: "Why isn't this in stores?",
        answer:
          "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.",
      },
      {
        question: "Is this vegan/gluten-free?",
        answer:
          "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients",
      },
    ],
    cta: {
      text: "Try Lymphatic Drainage Risk-Free",
      url: "https://pay.trysculptique.com/lymphatic/checkout",
      guarantee: "60-Day Money-Back Guarantee",
      guaranteeIcon:
        "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395",
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <h2 className="font-family-lora text-[28px] md:text-[32px] tracking-wide leading-[1.3] text-black m-0 mb-8 text-center">
          {data.title}
        </h2>

        <div className="max-w-[800px] mx-auto my-12 bg-gradient-to-b from-white to-[#F3EEE1] rounded-lg py-6 px-4 md:px-12">
          {data.faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="product_faq-box border-b border-gray-200 py-6"
              >
                <div
                  className="product_faq-thumb flex justify-between items-center cursor-pointer gap-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex-1">
                    <p className="font-family-nunito text-lg font-normal tracking-[0.6px] leading-[23.4px] text-[#1a1a1a] m-0">
                      {faq.question}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </div>
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="product_faq-content font-family-nunito pt-4 tracking-wide text-base">
                      {faq.answer.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a
            href={data.cta.url}
            className="inline-block bg-black text-white md:text-[18px] md:w-[450px] font-family-nunito py-4 px-8 rounded-[4px] no-underline transition-colors hover:bg-[#333] mb-4"
          >
            {data.cta.text}
          </a>

          <p className="flex items-center justify-center gap-2 text-[16px] m-0 font-family-nunito">
            <span>
              <img
                src={data.cta.guaranteeIcon}
                className="w-6 h-6"
                alt="guarantee icon"
              />
            </span>
            <span className="text-black">
              {data.cta.guarantee}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
