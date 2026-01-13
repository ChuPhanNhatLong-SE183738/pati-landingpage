import React from "react";

const SaleBanner = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Images in flex column */}
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
        alt="Promo Banner"
        className="w-full"
      />
      <img
        src="https://trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"
        alt="Add to Cart"
        className="w-full"
      />

      {/* Icon + Text sections */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
          alt="60-Day Guarantee"
          className="w-6 h-6"
        />
        <span className="text-[16px]">60-Day Money-Back Guarantee</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
          alt="Free Shipping"
          className="w-6 h-6"
        />
        <span className="text-[16px]">Free Shipping From USA Included</span>
      </div>
    </div>
  );
};

export default SaleBanner;
