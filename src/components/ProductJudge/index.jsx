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
      <h2 className="text-3xl md:text-4xl font-family-lora text-center text-black mb-6">
        Why Your{" "}
        <span className="text-3xl md:text-4xl font-family-lora text-center mb-6 text-[#039869]">
          Bloating, Brain Fog & Swollen Legs
        </span>{" "}
        Are
        <br />
        Actually Connected
      </h2>

      <p className="font-family-nunito text-center text-gray-700 mb-12 text-lg">
        If you're experiencing more than one of these symptoms, your body is
        trying to tell you something:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      <div className="relative max-w-4xl mx-auto mb-8">
        <img
          src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
          alt="Here's what nobody's telling you"
          className="w-full"
        />
      </div>

      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
        alt="product_arrow"
      />
      <h2>
        The Connection{" "}
        <span className="text-[#039869]">You've Been Missing</span>
      </h2>
      <img
        src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
        alt="table"
      />
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
        alt="product_arrow"
      />
      <h2>Your Hidden Drainage System</h2>
    </div>
  );
}

export default ProductJudge;
