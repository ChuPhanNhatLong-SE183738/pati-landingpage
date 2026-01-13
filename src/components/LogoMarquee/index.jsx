import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const LogoMarquee = () => {
  const womenHealth =
    "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678";
  const vogue =
    "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678";
  const grazia =
    "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678";

  const logos = [
    { src: womenHealth, alt: "Women's Health", height: "h-6" },
    { src: vogue, alt: "VOGUE", height: "h-7" },
    { src: grazia, alt: "GRAZIA", height: "h-6" },
    { src: vogue, alt: "VOGUE", height: "h-7" },
    { src: womenHealth, alt: "Women's Health", height: "h-6" },
    { src: vogue, alt: "VOGUE", height: "h-7" },
    { src: grazia, alt: "GRAZIA", height: "h-6" },
    { src: womenHealth, alt: "Women's Health", height: "h-6" },
    { src: grazia, alt: "GRAZIA", height: "h-6" },
  ];

  return (
    <div className="bg-[#fbf8f2] py-6 border-t border-[#f0ebe0]">
      <h3 className="text-center font-family-trirong text-2xl mb-8 text-black tracking-wide">
        As Seen In
      </h3>

      <div className="w-full px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={1}
          slidesPerView={3}
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: { slidesPerView: 5, spaceBetween: 25 },
            1024: { slidesPerView: 7, spaceBetween: 30 },
          }}
          className="swiper-linear"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
