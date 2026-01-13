import React, { useState } from "react";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const [expandedTab, setExpandedTab] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const pricingOptions = [
    {
      id: 1,
      title: "1 Bottle",
      subtitle: "1 bottle total | Save $27.99",
      price: "$31.96",
      comparePrice: "$59.95",
      perks: [
        {
          text: "Free USA Shipping",
          icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        },
      ],
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      subtitle: "3 bottles total | Save $115.93",
      price: "$63.92",
      comparePrice: "$179.85",
      badge: true, // New Year's Sale
      perks: [
        {
          text: "Free USA Shipping",
          icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        },
        {
          text: "Free Anti-Bloating Protocol E-book",
          icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        },
      ],
    },
    {
      id: 3,
      title: "Buy 3 Get 2 Free",
      subtitle: "5 bottles total | Save $203.87",
      price: "$95.88",
      comparePrice: "$299.75",
      perks: [
        {
          text: "Free USA Shipping",
          icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        },
        {
          text: "Free Anti-Bloating Protocol E-book",
          icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        },
        {
          text: "$20 Gift Card",
          icon: "https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",
        },
      ],
    },
  ];

  const thumbnailImages = [
    "//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
    "//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
    "//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  ];

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

  const tabs = [
    {
      title: "Ingredients proven by science",
      content: (
        <>
          <p className="font-semibold mb-2">Sculptique Ingredients:</p>
          <ul className="space-y-1 text-sm">
            <li>
              <strong>Echinacea purpurea Extract</strong> – Known for its
              anti-inflammatory properties, it may support skin health.
            </li>
            <li>
              <strong>Dandelion Extract</strong> – Traditionally used as a
              diuretic, it may help reduce water retention.
            </li>
            <li>
              <strong>Burdock Powder</strong> – Contains antioxidants that may
              promote skin clarity.
            </li>
            <li>
              <strong>Cleavers Extract</strong> – Believed to support lymphatic
              drainage and detoxification.
            </li>
            <li>
              <strong>Rutin</strong> – A flavonoid that may strengthen blood
              vessels and improve circulation.
            </li>
            <li>
              <strong>Bromelain Powder</strong> – An enzyme from pineapple that
              may reduce inflammation and support tissue repair.
            </li>
            <li>
              <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in
              collagen production and skin rejuvenation.
            </li>
            <li>
              <strong>Kelp Extract</strong> – A source of iodine and minerals
              that may support skin metabolism.
            </li>
          </ul>
          <p className="mt-2 text-sm">
            These natural ingredients work together to reduce puffiness,
            bloating, fluid retention.
          </p>
        </>
      ),
    },
    {
      title: "How does it actually work?",
      content: (
        <p className="text-sm">
          Sculptique works by improving blood flow and supporting lymphatic
          drainage to reduce fluid buildup that causes puffiness, inflammation,
          and water retention. It also reduces inflammation and boosts collagen
          production to help skin become firmer and smoother.
        </p>
      ),
    },
    {
      title: "Shipping and returns",
      content: (
        <>
          <p className="text-sm mb-2">
            All of Sculptique orders get FREE shipping straight from our USA
            warehouse. Orders are usually shipped out within 1-2 working days,
            and you should receive the order within 3-7 working days for
            domestic USA orders, and within 10 working days for International
            orders.
          </p>
          <p className="text-sm">
            We also offer a 60-day money back guarantee - if you are unsatisfied
            with our product, you can take advantage of our guarantee and ship
            back the product to us to get your return within 60 days of
            receiving your order.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT COLUMN - Product Images */}
        <div className="space-y-4">
          {/* Main Product Image */}
          <div className="relative rounded-2xl p-8 overflow-hidden">
            {/* Vertical lines background pattern */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-1 bg-emerald-800"
                  style={{ left: `${i * 5}%` }}
                />
              ))}
            </div>

            {/* New Years Sale Badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg z-10">
              <div className="text-xs font-bold">New Years</div>
              <div className="text-lg font-bold">Sale</div>
            </div>

            {/* Product Image */}
            <div className="relative z-10">
              <img
                src="//trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"
                alt="Lymphatic Drainage Capsules"
                className="w-full max-w-xs mx-auto"
              />
            </div>

            {/* Nutritional Information Button */}
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-700 px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <span className="text-sm font-medium">
                Nutritional Information
              </span>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-4">
            {thumbnailImages.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={img}
                  alt={`Product view ${idx + 1}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-100">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="28"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  87%
                </div>
              </div>
              <p className="text-xs text-gray-600">
                reported less bloating and tiredness in the first 4 weeks*
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border-2 border-gray-100">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="20"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  91%
                </div>
              </div>
              <p className="text-xs text-gray-600">
                reported less puffiness and firmer skin in the first 4 weeks*
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Product Information */}
        <div className="space-y-6">
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-white">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
                alt="stars"
                className="w-[100px]"
              />
            </div>
            <span className="margin-0 text-[16px] font-[400px] text-gray-700">
              4.8/5 Excellent | Based on 2381 Reviews
            </span>
          </div>

          {/* Product Title */}
          <h1 className="font-[28px] font-family-lora leading-10 tracking-[0.6px] text-black text-3xl">
            New Maximum Potency Formula - Lymphatic Drainage Capsules by
            Sculptique™
          </h1>

          {/* Benefits List */}
          <div className="space-y-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {benefit.icon.startsWith("http") ? (
                  <img
                    src={benefit.icon}
                    alt=""
                    className="flex-shrink-0 w-14 h-14 object-contain"
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
                <p className="text-black text-[16px] font-family-nunito">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

          {/* Clinicians' Choice Badge */}
          <div
            className="
        group relative flex items-center gap-3
        w-fit h-auto pr-8
        font-sans text-gray-800
        opacity-100 visible
      "
          >
            {/* --- Clinicians' Choice Badge (Centered) --- */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Left Laurel */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="35"
                  viewBox="0 0 17 35"
                  fill="#212121"
                >
                  <path d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"></path>
                </svg>
              </span>

              <p className="text-[16px] font-medium font-family-lora text-center leading-tight text-gray-900">
                Clinicians'
                <br />
                Choice
              </p>
              {/* Right Laurel */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="35"
                  viewBox="0 0 17 35"
                  fill="#212121"
                >
                  <path d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"></path>
                </svg>
              </span>
            </div>

            {/* --- Text & CTA --- */}
            <div className="flex flex-col justify-center flex-1 max-w-[280px]">
              <p className="text-[13px] font-sans leading-snug text-black">
                <span className="font-semibold text-[13px]">
                  355 clinicians
                </span>{" "}
                share this on{" "}
                <span className="italic text-[13px]">FrontrowMD</span> without
                compensation.{" "}
                <button className="inline text-[13px] font-family-opensans text-[#212121] border-b-[1px] hover:text-gray-900 transition-colors cursor-pointer">
                  Learn more
                </button>
              </p>

              <div className="flex items-center gap-2 mt-1">
                {/* Avatar Group */}
                <div className="flex items-center">
                  {[
                    "https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0",
                    "https://assets.app.thefrontrowhealth.com/yulyi33mil8glzv4b7fhzs5ipnz2",
                    "https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a",
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="Clinician"
                      className="w-4 h-4 rounded-full object-cover bg-gray-200 border border-white"
                    />
                  ))}
                </div>

                <button className="text-[13px] font-semibold hover:underline text-gray-900 whitespace-nowrap cursor-pointer">
                  Read their reviews
                </button>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-0 right-0 p-1.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <path
                  d="M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z"
                  fill="#666"
                ></path>
              </svg>
            </button>
          </div>
          {/* Pricing Options */}
          <div className="w-full mx-auto p-4 bg-[#F5F2EA] rounded-xl font-sans text-gray-800">
            {/* Options Stack */}
            <div className="space-y-3">
              {pricingOptions.map((option) => {
                const isSelected = selectedOption === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`
                relative bg-white border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200
                ${isSelected ? "border-[#2C9578]" : "border-[#2C9578]/30"}
              `}
                  >
                    {/* New Year's Sale Badge */}
                    {option.badge && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <div className="bg-[#E31E24] text-white text-[10px] font-bold px-3 py-3 rounded-full flex flex-col items-center justify-center leading-tight shadow-sm w-[60px] h-[60px] transform rotate-12 border-2 border-white">
                          <span>New Years</span>
                          <span>Sale</span>
                          <span className="absolute top-0 right-1 text-yellow-300 text-xs">
                            ✦
                          </span>
                          <span className="absolute bottom-1 left-1 text-yellow-300 text-xs">
                            ✦
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Top Content */}
                    <div className="p-4 flex items-start gap-3">
                      {/* Custom Radio Button */}
                      <div className="mt-1 shrink-0">
                        <div
                          className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${isSelected ? "border-[#2C9578]" : "border-gray-300"}
                    `}
                        >
                          {isSelected && (
                            <div className="w-3 h-3 bg-[#2C9578] rounded-full" />
                          )}
                        </div>
                      </div>

                      {/* Text Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 leading-tight">
                              {option.title}
                            </h3>
                            <p className="text-xs text-gray-600 font-medium">
                              {option.subtitle}
                            </p>
                          </div>

                          {/* Pricing Right Side */}
                          <div className="text-right leading-tight">
                            <div className="text-xl font-bold text-gray-900">
                              {option.price}
                            </div>
                            <div className="text-xs text-gray-400 line-through">
                              {option.comparePrice}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Perks (Green Bars) */}
                    <div
                      className={`flex flex-col gap-[1px] border-t ${
                        isSelected
                          ? "border-[#2C9578]/20"
                          : "border-[#2C9578]/10"
                      }`}
                    >
                      {option.perks.map((perk, idx) => (
                        <div
                          key={idx}
                          className={`
                      px-4 py-2 flex items-center gap-3 transition-colors duration-200
                      ${isSelected ? "bg-[#2C9578]" : "bg-[#2C9578]/10"} 
                    `}
                        >
                          {/* Icon */}
                          <img
                            src={perk.icon}
                            alt=""
                            className={`
                        w-5 h-5 object-contain transition-all duration-200
                        ${
                          isSelected
                            ? "filter brightness-0 invert"
                            : "opacity-50"
                        }
                      `}
                          />

                          {/* Text */}
                          <span
                            className={`
                      text-xs font-bold tracking-wide transition-colors duration-200
                      ${isSelected ? "text-white" : "text-gray-500"}
                    `}
                          >
                            {perk.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-800">
              <svg
                width={33}
                height={18}
                viewBox="0 0 33 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_30_2402"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={33}
                  height={18}
                >
                  <path d="M0 0H32.9901V18H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_30_2402)">
                  <path
                    d="M32.7075 9.00002L28.8633 5.1868C28.7924 5.11541 28.7107 5.05994 28.6186 5.02037C28.5262 4.98081 28.4298 4.96017 28.3292 4.95801H25.8431V0.732384C25.8431 0.682499 25.838 0.632613 25.8281 0.583588C25.8186 0.534563 25.804 0.486828 25.7851 0.440383C25.7657 0.394368 25.7421 0.350503 25.7145 0.308789C25.6866 0.267074 25.6548 0.22837 25.6195 0.193106C25.5842 0.157842 25.5455 0.126019 25.5038 0.0980661C25.4621 0.0705432 25.4182 0.0468907 25.3722 0.0275386C25.3258 0.0086166 25.278 -0.00600491 25.229 -0.015466C25.18 -0.0253571 25.1301 -0.0305176 25.0802 -0.0305176H11.3514C11.3011 -0.0305176 11.2517 -0.0253571 11.2026 -0.015466C11.1536 -0.00600491 11.1059 0.0086166 11.0594 0.0275386C11.0134 0.0468907 10.9691 0.0705432 10.9278 0.0980661C10.8861 0.126019 10.8474 0.157842 10.8122 0.193106C10.7765 0.22837 10.7451 0.267074 10.7171 0.308789C10.6896 0.350503 10.6659 0.394368 10.6466 0.440383C10.6277 0.486828 10.613 0.534563 10.6032 0.583588C10.5937 0.632613 10.5885 0.682499 10.5885 0.732384V14.4612C10.5885 14.5115 10.5937 14.5609 10.6032 14.61C10.613 14.659 10.6277 14.7067 10.6466 14.7532C10.6659 14.7992 10.6896 14.8435 10.7171 14.8848C10.7451 14.9265 10.7765 14.9652 10.8122 15.0004C10.8474 15.0361 10.8861 15.0675 10.9278 15.0955C10.9691 15.123 11.0134 15.1467 11.0594 15.166C11.1059 15.1849 11.1536 15.1996 11.2026 15.2094C11.2517 15.2189 11.3011 15.2241 11.3514 15.2241H13.1512C13.1628 15.3195 13.1787 15.4146 13.1989 15.5092C13.2191 15.6034 13.2436 15.6967 13.272 15.7887C13.3008 15.8807 13.3335 15.9715 13.3701 16.0605C13.4071 16.1495 13.4479 16.2368 13.4926 16.3224C13.5374 16.4076 13.586 16.491 13.6384 16.5718C13.6905 16.6531 13.7464 16.7314 13.8057 16.8075C13.8651 16.8832 13.9278 16.9563 13.9941 17.0268C14.0603 17.0969 14.1291 17.164 14.2014 17.2281C14.2736 17.2922 14.3484 17.3524 14.4263 17.4096C14.5037 17.4668 14.5837 17.5205 14.6662 17.5704C14.7488 17.6203 14.8335 17.6663 14.92 17.7084C15.0068 17.751 15.0954 17.7893 15.1853 17.8233C15.2756 17.8577 15.3672 17.8878 15.4601 17.9136C15.553 17.9394 15.6467 17.9609 15.7418 17.9785C15.8364 17.9957 15.9319 18.009 16.0278 18.0176C16.1241 18.0262 16.2204 18.031 16.3167 18.031C16.4131 18.031 16.5094 18.0262 16.6053 18.0176C16.7012 18.009 16.7967 17.9957 16.8917 17.9785C16.9868 17.9609 17.0805 17.9394 17.1734 17.9136C17.2663 17.8878 17.3579 17.8577 17.4478 17.8233C17.5381 17.7893 17.6267 17.751 17.7131 17.7084C17.8 17.6663 17.8843 17.6203 17.9668 17.5704C18.0494 17.5205 18.1294 17.4668 18.2072 17.4096C18.2851 17.3524 18.3599 17.2922 18.4317 17.2281C18.504 17.164 18.5732 17.0969 18.6394 17.0268C18.7052 16.9563 18.768 16.8832 18.8274 16.8075C18.8867 16.7314 18.9426 16.6531 18.9951 16.5718C19.0475 16.491 19.0957 16.4076 19.1409 16.3224C19.1856 16.2368 19.226 16.1495 19.263 16.0605C19.3 15.9715 19.3327 15.8807 19.361 15.7887C19.3899 15.6967 19.4144 15.6034 19.4346 15.5092C19.4544 15.4146 19.4703 15.3195 19.4819 15.2241H24.058C24.0696 15.3195 24.0855 15.4146 24.1057 15.5092C24.1259 15.6034 24.15 15.6967 24.1788 15.7887C24.2077 15.8807 24.2403 15.9715 24.2769 16.0605C24.3139 16.1495 24.3547 16.2368 24.3995 16.3224C24.4442 16.4076 24.4928 16.491 24.5448 16.5718C24.5973 16.6531 24.6532 16.7314 24.7125 16.8075C24.7719 16.8832 24.8347 16.9563 24.9009 17.0268C24.9671 17.0969 25.0359 17.164 25.1082 17.2281C25.1804 17.2922 25.2553 17.3524 25.3327 17.4096C25.4105 17.4668 25.4905 17.5205 25.5731 17.5704C25.6556 17.6203 25.7403 17.6663 25.8268 17.7084C25.9137 17.751 26.0022 17.7893 26.0921 17.8233C26.1824 17.8577 26.274 17.8878 26.3669 17.9136C26.4598 17.9394 26.5536 17.9613 26.6482 17.9785C26.7432 17.9957 26.8387 18.009 26.9346 18.0176C27.0309 18.0262 27.1268 18.031 27.2236 18.031C27.3199 18.031 27.4162 18.0262 27.5121 18.0176C27.608 18.009 27.7035 17.9957 27.7985 17.9785C27.8932 17.9609 27.9873 17.9394 28.0802 17.9136C28.1731 17.8878 28.2647 17.8577 28.3546 17.8233C28.4449 17.7893 28.5331 17.751 28.6199 17.7084C28.7068 17.6663 28.7911 17.6203 28.8737 17.5704C28.9562 17.5205 29.0362 17.4668 29.1141 17.4096C29.1915 17.3524 29.2667 17.2922 29.3385 17.2281C29.4108 17.164 29.48 17.0969 29.5458 17.0268C29.612 16.9563 29.6748 16.8832 29.7342 16.8075C29.7935 16.7314 29.8494 16.6531 29.9019 16.5718C29.9544 16.491 30.0025 16.4076 30.0473 16.3224C30.0924 16.2368 30.1328 16.1495 30.1698 16.0605C30.2068 15.9715 30.2395 15.8807 30.2679 15.7887C30.2967 15.6967 30.3212 15.6034 30.341 15.5092C30.3612 15.4146 30.3771 15.3195 30.3887 15.2241H32.1583C32.2082 15.2241 32.2577 15.2189 32.3071 15.2094C32.3562 15.1996 32.4039 15.1849 32.4499 15.166C32.4964 15.1467 32.5402 15.123 32.5819 15.0955C32.6237 15.0675 32.6619 15.0361 32.6976 15.0004C32.7329 14.9652 32.7647 14.9265 32.7922 14.8848C32.8202 14.8435 32.8438 14.7992 32.8628 14.7532C32.8821 14.7067 32.8963 14.659 32.9062 14.61C32.9161 14.5609 32.9208 14.5115 32.9208 14.4612V9.47307C32.9161 9.38362 32.895 9.29804 32.8585 9.21676C32.8215 9.13505 32.7712 9.0628 32.7075 9.00002ZM12.1139 1.55592H24.3173V13.5766C24.2829 13.6389 24.2575 13.7051 24.2412 13.7748H19.3142C19.2058 13.5224 19.0738 13.2833 18.9177 13.0579C18.7362 12.8459 18.5328 12.6576 18.3074 12.4933L18.1853 12.4017C17.9496 12.252 17.7006 12.1303 17.4379 12.0357H17.3007C17.0057 11.9566 16.7059 11.9157 16.4006 11.9136C16.1 11.9149 15.8054 11.9557 15.516 12.0357H15.3784C15.1126 12.1234 14.8632 12.2456 14.631 12.4017L14.4938 12.4933C14.2766 12.6619 14.0784 12.8498 13.899 13.0579C13.896 13.0936 13.896 13.1289 13.899 13.1646C13.7279 13.2863 13.57 13.4235 13.426 13.5766V13.6682H12.221L12.1139 1.55592ZM16.309 16.5662C16.1993 16.5671 16.0905 16.5576 15.9826 16.537C15.8747 16.5164 15.7697 16.4854 15.6682 16.4441C15.5663 16.4028 15.4696 16.3521 15.378 16.2914C15.2864 16.2308 15.2016 16.162 15.1234 16.0846C15.0455 16.0076 14.9759 15.9233 14.9144 15.8322C14.8533 15.741 14.8013 15.6447 14.7591 15.5436C14.717 15.4421 14.6847 15.3376 14.6632 15.2297C14.6417 15.1221 14.631 15.0133 14.631 14.9037C14.631 14.7966 14.631 14.7054 14.631 14.6289C14.6473 14.5308 14.6723 14.4349 14.7054 14.3412C14.7385 14.2474 14.7798 14.1571 14.8288 14.0707C14.8778 13.9842 14.9341 13.9025 14.9974 13.826C15.061 13.7494 15.1307 13.6789 15.2064 13.6148C15.2825 13.5503 15.3633 13.4931 15.4493 13.4432C15.5354 13.3934 15.6248 13.3512 15.7181 13.3168C15.8119 13.2824 15.9073 13.2566 16.0054 13.2394C16.103 13.2218 16.2019 13.2132 16.3013 13.2132C16.401 13.2132 16.4995 13.2218 16.5976 13.2394C16.6956 13.2566 16.7911 13.2824 16.8844 13.3168C16.9777 13.3512 17.0676 13.3934 17.1536 13.4432C17.2396 13.4931 17.3205 13.5503 17.3962 13.6148C17.4723 13.6789 17.5419 13.7494 17.6052 13.826C17.6688 13.9025 17.7251 13.9842 17.7742 14.0707C17.8232 14.1571 17.8645 14.2474 17.8976 14.3412C17.9307 14.4349 17.9552 14.5308 17.9716 14.6289C17.9716 14.7205 17.9716 14.7966 17.9716 14.9037C17.9668 15.0099 17.9522 15.1148 17.9273 15.218C17.9023 15.3217 17.8684 15.4219 17.8245 15.5187C17.7806 15.6158 17.7277 15.7079 17.6667 15.7947C17.6052 15.8816 17.5364 15.962 17.4598 16.036C17.3828 16.1095 17.3003 16.1758 17.2108 16.2338C17.1218 16.2919 17.028 16.3409 16.9296 16.3809C16.8307 16.4213 16.7296 16.4519 16.6251 16.4725C16.5206 16.4936 16.4152 16.5043 16.309 16.5052V16.5662ZM27.2309 16.5662C27.1217 16.5624 27.0141 16.5478 26.9079 16.5228C26.8013 16.4974 26.6985 16.4622 26.5991 16.4166C26.4998 16.3714 26.4061 16.3164 26.3175 16.2523C26.2289 16.1887 26.1472 16.1164 26.0728 16.0364C25.9984 15.9564 25.9326 15.87 25.8754 15.7767C25.8182 15.6838 25.7704 15.5862 25.7322 15.4838C25.6943 15.381 25.6664 15.2761 25.6492 15.1682C25.632 15.0602 25.6251 14.9519 25.6294 14.8426C25.6294 14.736 25.6294 14.6444 25.6294 14.5833C25.6599 14.3872 25.7257 14.2044 25.8276 14.0341C25.8995 13.8957 25.9893 13.7705 26.0973 13.6583C26.2052 13.546 26.3269 13.4514 26.462 13.3744C26.5974 13.297 26.7406 13.2407 26.8924 13.205C27.0442 13.1693 27.1978 13.156 27.353 13.1646C27.4528 13.1633 27.5517 13.1706 27.6497 13.1869C27.7478 13.2033 27.8437 13.2282 27.9379 13.2613C28.0316 13.2949 28.1215 13.3362 28.2079 13.3856C28.2944 13.4346 28.3757 13.4914 28.4522 13.5555C28.5288 13.6191 28.5989 13.6892 28.6625 13.7658C28.7266 13.8419 28.7829 13.9232 28.8324 14.0096C28.8818 14.0961 28.9231 14.1864 28.9567 14.2801C28.9898 14.3739 29.0147 14.4698 29.0311 14.5678C29.0311 14.6594 29.0311 14.736 29.0311 14.8426C29.0306 14.8998 29.0272 14.957 29.0212 15.0138C29.0151 15.071 29.0057 15.1273 28.9936 15.1832C28.982 15.2396 28.967 15.2946 28.9493 15.3492C28.9317 15.4034 28.9115 15.4572 28.8883 15.5096C28.8651 15.5617 28.8393 15.6128 28.8109 15.6627C28.7825 15.7126 28.7515 15.7608 28.7184 15.8072C28.6853 15.8537 28.6496 15.8988 28.6118 15.9414C28.5739 15.9844 28.5339 16.0257 28.4918 16.0644C28.4496 16.1031 28.4058 16.1396 28.3598 16.174C28.3142 16.2084 28.2664 16.2407 28.2174 16.2699C28.1684 16.2996 28.1181 16.3263 28.066 16.3508C28.014 16.3753 27.9611 16.3968 27.9073 16.4157C27.8532 16.4346 27.7981 16.4506 27.7426 16.4639C27.6867 16.4772 27.6304 16.4875 27.5736 16.4953C27.5169 16.5026 27.4601 16.5073 27.4025 16.509C27.3453 16.5108 27.2881 16.5095 27.2309 16.5052V16.5662ZM31.4109 13.7593H30.2055C30.098 13.5035 29.9608 13.2644 29.794 13.0424C29.6125 12.8304 29.4091 12.6425 29.1837 12.4782L29.0616 12.3866C28.8276 12.234 28.5782 12.1118 28.3142 12.0207H28.177C27.882 11.9411 27.5822 11.9007 27.2769 11.8985C27.0021 11.8955 26.7329 11.9308 26.4684 12.0052C26.3794 12.0288 26.293 12.0594 26.2091 12.0968L25.8887 12.2034V6.48339H28.0699L31.4565 9.8085L31.4109 13.7593ZM10.1464 7.47464C10.1464 7.52496 10.1413 7.57441 10.1318 7.62344C10.1219 7.67289 10.1073 7.7202 10.0884 7.76664C10.069 7.81309 10.0454 7.85695 10.0179 7.89867C9.98991 7.93995 9.95852 7.97866 9.92282 8.01392C9.88756 8.04961 9.84886 8.08101 9.80714 8.10896C9.76586 8.13691 9.72156 8.16014 9.67555 8.17949C9.6291 8.19841 9.58137 8.21303 9.53234 8.22292C9.48332 8.23238 9.43386 8.23755 9.38355 8.23755H4.57864C4.52833 8.23755 4.47887 8.23238 4.42985 8.22292C4.38039 8.21303 4.33309 8.19841 4.28664 8.17949C4.2402 8.16014 4.19633 8.13691 4.15462 8.10896C4.11334 8.08101 4.07463 8.04961 4.03937 8.01392C4.00367 7.97866 3.97228 7.93995 3.94433 7.89867C3.91637 7.85695 3.89315 7.81309 3.8738 7.76664C3.85488 7.7202 3.84026 7.67289 3.83036 7.62344C3.82047 7.57441 3.81574 7.52496 3.81574 7.47464C3.81574 7.42476 3.82047 7.3753 3.83036 7.32585C3.84026 7.27682 3.85488 7.22909 3.8738 7.18307C3.89315 7.13663 3.91637 7.09276 3.94433 7.05105C3.97228 7.00933 4.00367 6.97106 4.03937 6.93537C4.07463 6.9001 4.11334 6.86828 4.15462 6.84076C4.19633 6.8128 4.2402 6.78915 4.28664 6.77023C4.33309 6.75088 4.38039 6.73668 4.42985 6.72679C4.47887 6.7169 4.52833 6.71217 4.57864 6.71217H9.38355C9.43386 6.71217 9.48332 6.7169 9.53234 6.72679C9.58137 6.73668 9.6291 6.75088 9.67555 6.77023C9.72156 6.78915 9.76586 6.8128 9.80714 6.84076C9.84886 6.86828 9.88756 6.9001 9.92282 6.93537C9.95852 6.97106 9.98991 7.00933 10.0179 7.05105C10.0454 7.09276 10.069 7.13663 10.0884 7.18307C10.1073 7.22909 10.1219 7.27682 10.1318 7.32585C10.1413 7.3753 10.1464 7.42476 10.1464 7.47464ZM10.1464 10.5258C10.1464 10.5757 10.1413 10.6252 10.1318 10.6746C10.1219 10.7236 10.1073 10.7714 10.0884 10.8174C10.069 10.8638 10.0454 10.9077 10.0179 10.9494C9.98991 10.9911 9.95852 11.0294 9.92282 11.0651C9.88756 11.1004 9.84886 11.1318 9.80714 11.1597C9.76586 11.1877 9.72156 11.2113 9.67555 11.2302C9.6291 11.2496 9.58137 11.2638 9.53234 11.2737C9.48332 11.2836 9.43386 11.2883 9.38355 11.2883H0.78005C0.730164 11.2883 0.680709 11.2836 0.631254 11.2737C0.582228 11.2638 0.534493 11.2496 0.488478 11.2302C0.442033 11.2113 0.398169 11.1877 0.356454 11.1597C0.31474 11.1318 0.276466 11.1004 0.240772 11.0651C0.205508 11.0294 0.173685 10.9911 0.146162 10.9494C0.118209 10.9077 0.0945563 10.8638 0.0756343 10.8174C0.0562822 10.7714 0.0420908 10.7236 0.0321997 10.6746C0.0223087 10.6252 0.0175781 10.5757 0.0175781 10.5258C0.0175781 10.4755 0.0223087 10.426 0.0321997 10.377C0.0420908 10.3276 0.0562822 10.2798 0.0756343 10.2338C0.0945563 10.1874 0.118209 10.1435 0.146162 10.1018C0.173685 10.0601 0.205508 10.0218 0.240772 9.98611C0.276466 9.95085 0.31474 9.91945 0.356454 9.8915C0.398169 9.86355 0.442033 9.84033 0.488478 9.82097C0.534493 9.80162 0.582228 9.78743 0.631254 9.77754C0.680709 9.76765 0.730164 9.76292 0.78005 9.76292H9.38355C9.43386 9.76292 9.48332 9.76765 9.53234 9.77754C9.58137 9.78743 9.6291 9.80162 9.67555 9.82097C9.72156 9.84033 9.76586 9.86355 9.80714 9.8915C9.84886 9.91945 9.88756 9.95085 9.92282 9.98611C9.95852 10.0218 9.98991 10.0601 10.0179 10.1018C10.0454 10.1435 10.069 10.1874 10.0884 10.2338C10.1073 10.2798 10.1219 10.3276 10.1318 10.377C10.1413 10.426 10.1464 10.4755 10.1464 10.5258ZM10.1464 13.7443C10.1464 13.7942 10.1413 13.8441 10.1318 13.8931C10.1219 13.9421 10.1073 13.9898 10.0884 14.0363C10.069 14.0823 10.0454 14.1262 10.0179 14.1679C9.98991 14.2096 9.95852 14.2483 9.92282 14.2836C9.88756 14.3188 9.84886 14.3506 9.80714 14.3786C9.76586 14.4061 9.72156 14.4298 9.67555 14.4491C9.6291 14.468 9.58137 14.4827 9.53234 14.4921C9.48332 14.502 9.43386 14.5072 9.38355 14.5072H6.50052C6.45063 14.5072 6.40075 14.502 6.35172 14.4921C6.3027 14.4827 6.25496 14.468 6.20852 14.4491C6.1625 14.4298 6.11864 14.4061 6.07692 14.3786C6.03521 14.3506 5.99651 14.3188 5.96124 14.2836C5.92598 14.2483 5.89416 14.2096 5.8662 14.1679C5.83868 14.1262 5.81503 14.0823 5.7961 14.0363C5.77675 13.9898 5.76213 13.9421 5.75267 13.8931C5.74278 13.8441 5.73805 13.7942 5.73805 13.7443C5.73805 13.6944 5.74278 13.6445 5.75267 13.5955C5.76213 13.5465 5.77675 13.4987 5.7961 13.4523C5.81503 13.4063 5.83868 13.362 5.8662 13.3207C5.89416 13.279 5.92598 13.2403 5.96124 13.205C5.99651 13.1697 6.03521 13.1379 6.07692 13.11C6.11864 13.0824 6.1625 13.0588 6.20852 13.0394C6.25496 13.0205 6.3027 13.0059 6.35172 12.996C6.40075 12.9865 6.45063 12.9814 6.50052 12.9814H9.38355C9.43386 12.9814 9.48332 12.9865 9.53234 12.996C9.58137 13.0059 9.6291 13.0205 9.67555 13.0394C9.72156 13.0588 9.76586 13.0824 9.80714 13.11C9.84886 13.1379 9.88756 13.1697 9.92282 13.205C9.95852 13.2403 9.98991 13.279 10.0179 13.3207C10.0454 13.362 10.069 13.4063 10.0884 13.4523C10.1073 13.4987 10.1219 13.5465 10.1318 13.5955C10.1413 13.6445 10.1464 13.6944 10.1464 13.7443Z"
                    fill="#1A1A1A"
                  />
                </g>
              </svg>
              <p>
                Delivered on{" "}
                <span className="bg-[#009468] text-white px-1 py-0.5 rounded font-bold">
                  Friday, 16 January
                </span>{" "}
                with Express Shipping
              </p>
            </div>

            {/* Add To Cart Button */}
            <button className="w-full bg-black hover:bg-gray-800 text-white font-extrabold text-lg py-4 rounded-xl mt-4 shadow-lg transition-transform active:scale-[0.98]">
              ADD TO CART
            </button>

            {/* Footer Info */}
            <div className="flex justify-center items-center gap-4 mt-3 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Refills Ship Bi-Monthly
              </div>
              <div className="h-4 w-[1px] bg-gray-400"></div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Stop or Cancel Anytime
              </div>
            </div>
          </div>

          {/* Sale Banner */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl p-4 text-center">
            <div className="text-2xl font-bold mb-1">NEW YEAR NEW ME</div>
            <div className="text-sm">
              Use code{" "}
              <span className="font-bold bg-white text-red-600 px-2 py-1 rounded">
                NEW10
              </span>{" "}
              for an extra 10% off
            </div>
          </div>

          {/* Guarantee Icons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">
                60-Day Money-Back Guarantee
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">
                Free Shipping From USA Included
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION - Testimonial */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <img
            src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
            alt="Margaret Ellison"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold">Margaret Ellison | FL</span>
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                Verified Customer
              </span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <div className="text-gray-700">
          <p className="font-bold mb-2">
            Even my husband noticed... the spark came back.
          </p>
          <p className="text-sm">
            After years of hiding under coverups, picking apart my body, and
            feeling disconnected, I finally feel at ease again. I feel less
            bloated, lighter, like my body is working with me not against me.
            These past months, I've been present. Even my marriage feels
            renewed, not just in how I look but in how I feel. It's hard to
            explain, but once you try it you'll get it. I'd recommend this to my
            closest friends without question.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="mt-8 max-w-4xl mx-auto space-y-3">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedTab(expandedTab === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-left">{tab.title}</span>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform ${
                  expandedTab === idx ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            {expandedTab === idx && (
              <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
