import React from "react";

const RatingDisplay = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-white">
        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
          alt="stars"
          className="w-[100px]"
        />
      </div>
      <span className="margin-0 text-[16px] font-[400px] text-black font-family-nunito">
        4.8/5 Excellent | Based on 2381 Reviews
      </span>
    </div>
  );
};

export default RatingDisplay;
