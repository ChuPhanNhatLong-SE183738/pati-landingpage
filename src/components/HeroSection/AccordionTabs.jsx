import React, { useState } from "react";

const AccordionTabs = () => {
  const [expandedTabs, setExpandedTabs] = useState([]);

  const toggleTab = (idx) => {
    if (expandedTabs.includes(idx)) {
      setExpandedTabs(expandedTabs.filter((i) => i !== idx));
    } else {
      setExpandedTabs([...expandedTabs, idx]);
    }
  };
  const tabs = [
    {
      title: "Ingredients proven by science",
      content: (
        <>
          <p className="font-semibold mb-2">Sculptique Ingredients:</p>
          <ul className="list-disc pl-8 font-family-montserrat text-base font-normal tracking-[0.6px] leading-[28.8px] text-black/75">
            <li>
              <span className="font-bold">Echinacea purpurea Extract</span> –
              Known for its anti-inflammatory properties, it may support skin
              health.
            </li>
            <li>
              <span className="font-bold">Dandelion Extract</span> –
              Traditionally used as a diuretic, it may help reduce water
              retention.
            </li>
            <li>
              <span className="font-bold">Burdock Powder</span> – Contains
              antioxidants that may promote skin clarity.
            </li>
            <li>
              <span className="font-bold">Cleavers Extract</span> – Believed to
              support lymphatic drainage and detoxification.
            </li>
            <li>
              <span className="font-bold">Rutin</span> – A flavonoid that may
              strengthen blood vessels and improve circulation.
            </li>
            <li>
              <span className="font-bold">Bromelain Powder</span> – An enzyme
              from pineapple that may reduce inflammation and support tissue
              repair.
            </li>
            <li>
              <span className="font-bold">Lemon Powder</span> – Rich in vitamin
              C, it may aid in collagen production and skin rejuvenation.
            </li>
            <li>
              <span className="font-bold">Kelp Extract</span> – A source of
              iodine and minerals that may support skin metabolism.
            </li>
          </ul>
          <p className="mt-2 text-[16px] font-family-nunito">
            These natural ingredients work together to reduce puffiness,
            bloating, fluid retention.
          </p>
        </>
      ),
    },
    {
      title: "How does it actually work?",
      content: (
        <p className="text-[16px] font-family-nunito">
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
          <p className="text-[16px] mb-2 font-family-nunito">
            All of Sculptique orders get FREE shipping straight from our USA
            warehouse. Orders are usually shipped out within 1-2 working days,
            and you should receive the order within 3-7 working days for
            domestic USA orders, and within 10 working days for International
            orders.
          </p>
          <p className="text-[16px] font-family-nunito">
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
    <div className="mt-8 max-w-4xl mx-auto space-y-3">
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          className={`border rounded-4xl overflow-hidden transition-colors duration-300 ${
            expandedTabs.includes(idx) ? "border-[#039869]" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => toggleTab(idx)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-left">{tab.title}</span>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
              alt="Toggle"
              className={`w-8 h-8 transition-transform duration-300 ${
                expandedTabs.includes(idx) ? "rotate-45" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedTabs.includes(idx)
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              {tab.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionTabs;
