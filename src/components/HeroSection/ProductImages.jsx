import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const ProductImages = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const allImages = [
    {
      url: "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
      alt: "Lymphatic Drainage Capsules Main",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
      alt: "Product view 1",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
      alt: "Product view 2",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
      alt: "Product detail 1",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
      alt: "Product detail 2",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
      alt: "Product detail 3",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
      alt: "Tiredness chart",
    },
    {
      url: "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
      alt: "Puffiness chart",
    },
  ];

  return (
    <>
      {/* =========================================
          DESKTOP VIEW (Hidden on mobile)
      ========================================= */}
      <div className="hidden lg:block space-y-5">
        {/* Biggest Image */}
        <div className="w-full relative">
          <img
            src="https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"
            alt="Lymphatic Drainage Capsules"
            className="w-[588px] h-[588px] object-cover mx-auto rounded-md"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
            alt="NY Sale"
            className="absolute top-4 right-5 w-30 h-30"
          />
          <button
            onClick={() => setIsPopupOpen(true)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 border border-black px-6 py-2 mb-5 rounded-full flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
              alt="Leaf icon"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-500">
              Nutritional Information
            </span>
          </button>
        </div>

        {/* Small Images Rows */}
        <div className="flex gap-5 justify-center">
          <img
            src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
            alt="Product view 1"
            className="w-[286px] h-[286px] object-cover rounded-md"
          />
          <img
            src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
            alt="Product view 2"
            className="w-[286px] h-[286px] object-cover rounded-md"
          />
        </div>
        <div className="flex gap-5 justify-center">
          <img
            src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
            alt="Product detail 1"
            className="w-[185px] h-[185px] object-cover rounded-md"
          />
          <img
            src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
            alt="Product detail 2"
            className="w-[185px] h-[185px] object-cover rounded-md"
          />
          <img
            src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
            alt="Product detail 3"
            className="w-[185px] h-[185px] object-cover rounded-md"
          />
        </div>
        <div className="flex gap-5 justify-center">
          <img
            src="https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
            alt="Tiredness chart"
            className="w-[286px] h-[307px] object-cover rounded-md"
          />
          <img
            src="https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
            alt="Puffiness chart"
            className="w-[286px] h-[307px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* =========================================
          MOBILE/TABLET VIEW (Swiper Carousel)
      ========================================= */}
      <div className="lg:hidden space-y-4 max-w-[500px] mx-auto">
        <div className="relative group">
          <Swiper
            modules={[Navigation, Thumbs, FreeMode]}
            navigation={{
              prevEl: ".custom-product-prev",
              nextEl: ".custom-product-next",
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            spaceBetween={10}
            className="rounded-lg"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-square bg-white">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                  {index === 0 && (
                    <>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                        alt="NY Sale"
                        className="absolute top-4 right-5 w-20 h-20"
                      />
                      <button
                        onClick={() => setIsPopupOpen(true)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 border border-black px-4 py-2 rounded-full flex items-center gap-2 shadow-md text-xs cursor-pointer z-10"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                          alt="Leaf icon"
                          className="w-4 h-4"
                        />
                        <span className="font-medium text-gray-500 whitespace-nowrap">
                          Nutritional Information
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM NAVIGATION BUTTONS (No Background) */}
          {/* Nút Trái */}
          <button className="custom-product-prev absolute top-1/2 left-2 z-20 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer transition-transform active:scale-95">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
              alt="Previous"
              className="w-8 h-8"
            />
          </button>

          {/* Nút Phải */}
          <button className="custom-product-next absolute top-1/2 right-2 z-20 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer transition-transform active:scale-95">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"
              alt="Next"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, FreeMode]}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="w-full"
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer aspect-square rounded-md overflow-hidden border-2 border-gray-200 hover:border-gray-800 transition-colors">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================================
          NUTRITIONAL INFO POPUP
      ========================================= */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full relative p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 cursor-pointer"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
                alt="Close"
                className="w-full h-full rotate-45"
              />
            </button>

            <h2 className="text-[28px] font-family-lora text-center pb-3 mb-4">
              Nutritional Information
            </h2>
            <img
              src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
              alt="Ingredients"
              className="w-full mb-4"
            />
            <button className="w-full bg-black text-[16px] text-white py-6 rounded-md mb-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer">
              Try Lymphatic Drainage Risk-Free
            </button>

            <div className="space-y-3">
              <div className="flex gap-1 justify-center">
                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt="Check"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-xs whitespace-nowrap">
                    Made & produced in the USA
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt="Check"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-xs whitespace-nowrap">
                    100% Natural Ingredients
                  </p>
                </div>
              </div>
              <div className="flex gap-1 justify-center pl-8">
                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt="Check"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-xs whitespace-nowrap">
                    60-Day Money-Back Guarantee
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                    alt="Check"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-xs whitespace-nowrap">Free Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImages;
