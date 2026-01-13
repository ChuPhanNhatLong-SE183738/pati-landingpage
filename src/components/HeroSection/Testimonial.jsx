import React from "react";

const Testimonial = () => {
  return (
    <div className="mt-12 bg-[#f3efe0] rounded-2xl p-3 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
          alt="Margaret Ellison"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-[400]">Margaret Ellison | FL</span>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
              alt="Verified Customer"
              className="h-5"
            />
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
            alt="4.5 stars"
            className="h-4"
          />
        </div>
      </div>
      <div className="text-gray-700">
        <p className="mb-2 font-[600] font-family-nunito">
          Even my husband noticed... the spark came back.
        </p>
        <p className="text-[16px] font-[400] font-family-nunito">
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I've been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It's hard to explain, but
          once you try it you'll get it. I'd recommend this to my closest
          friends without question.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
