import React, { useState } from "react";
import ProductImages from "./ProductImages";
import RatingDisplay from "./RatingDisplay";
import ProductTitle from "./ProductTitle";
import BenefitsList from "./BenefitsList";
import CliniciansChoiceBadge from "./CliniciansChoiceBadge";
import PricingOptions from "./PricingOptions";
import SaleBanner from "./SaleBanner";
import Testimonial from "./Testimonial";
import AccordionTabs from "./AccordionTabs";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState(2);

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN - Product Images */}
        {/* FIX: Thêm div bao ngoài với min-w-0 để Swiper không phá vỡ layout Grid */}
        <div className="w-full min-w-0 sticky top-4">
          <ProductImages />
        </div>

        {/* RIGHT COLUMN - Product Information */}
        <div className="space-y-6">
          <RatingDisplay />
          <ProductTitle />
          <BenefitsList />
          <CliniciansChoiceBadge />
          <PricingOptions
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <SaleBanner />
          <Testimonial />
          <AccordionTabs />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
