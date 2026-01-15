import { useRef, useState } from "react";
import SimpleVideo from "../VideoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function VideoList() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxReachableIndex, setMaxReachableIndex] = useState(9);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    // Calculate max reachable index based on current slidesPerView
    const slidesPerView = Math.floor(swiper.params.slidesPerView);
    const maxIndex = videos.length - slidesPerView;
    setMaxReachableIndex(maxIndex);
  };

  const videos = [
    {
      id: 1,
      url: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
    },
    {
      id: 3,
      url: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
    },
    {
      id: 4,
      url: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
    },
    {
      id: 5,
      url: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
    },
    {
      id: 6,
      url: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
    },
    {
      id: 7,
      url: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
    },
    {
      id: 8,
      url: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
    },
    {
      id: 9,
      url: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
    },
    {
      id: 10,
      url: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
    },
  ];

  return (
    <div className="bg-[#F3EEE0] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <div className="mb-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
              alt="Trustpilot Reviews"
              className="mx-auto h-8 md:h-10 object-contain"
            />
          </div>
          <h2 className="font-family-lora text-[26px] md:text-[32px] text-black leading-[1.3] tracking-[0.6px]">
            See The Stories of Sculptique™ Women Firsthand
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-2"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <SimpleVideo src={video.url} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar and Navigation */}
          <div className="flex items-center gap-6 mt-3">
            <div className="flex-1 max-w-3/4 flex items-center">
              {Array.from({ length: maxReachableIndex + 1 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 cursor-pointer"
                  style={{
                    backgroundColor:
                      index === activeIndex ? "#039869" : "#cfcbbf",
                  }}
                  onClick={() => {
                    swiperRef.current?.slideTo(index);
                  }}
                />
              ))}
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-2 shrink-0 ml-auto">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full bg-[#fef7f6] flex items-center justify-center hover:cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-[#5cb697]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full bg-[#fef7f6] flex items-center justify-center hover:cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-[#5cb697]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button className="bg-black text-white font-family-nunito text-[16px] md:text-[20px] font-bold px-12 md:px-20 py-4 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Try Lymphatic Drainage Risk-Free
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              alt="60 day guarantee"
              className="w-6 h-6"
            />
            <span className="font-family-nunito text-[15px] md:text-[16px] text-black">
              60-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
