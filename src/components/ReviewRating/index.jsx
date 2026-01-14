import React from "react";

const StarIcon = ({ fill = "#FA8A8A" }) => (
  <svg className={`w-5 h-5 fill-[${fill}]`} viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

function ReviewRating() {
  const data = {
    summary: {
      headline: "Real Women, Real Results: 93,000+ Transformations",
      subHeadline: "All reviews verified from actual paying customers",
      averageRating: 4.67,
      totalReviews: 110,
      authenticityScore: 100.0,
    },
    reviews: [
      {
        id: 1,
        author: "Anonymous",
        verified: true,
        date: "12/08/2025",
        rating: 5,
        content:
          "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
      },
      {
        id: 2,
        author: "Donabeth Houx",
        verified: true,
        date: "12/01/2025",
        rating: 5,
        content: "One month and I've already seen a difference!",
      },
      {
        id: 3,
        author: "Anonymous",
        verified: true,
        date: "11/23/2025",
        rating: 5,
        content:
          "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
      },
      {
        id: 4,
        author: "Dawn Camacho",
        verified: true,
        date: "11/17/2025",
        rating: 5,
        content:
          "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
      },
      {
        id: 5,
        author: "Anonymous",
        verified: true,
        date: "11/13/2025",
        rating: 5,
        content: "I have noticed a difference on my swelling.",
      },
    ],
  };

  return (
    <div className="pt-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        {/* --- HEADLINE SECTION --- */}
        <div>
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
              className="block max-h-7 max-w-[200px] mx-auto mb-4"
              alt="Trustpilot Score"
            />
            <h2 className="font-family-lora text-[28px] md:text-[32px] tracking-wide leading-tight text-black m-0 mb-3">
              {data.summary.headline}
            </h2>
            <p className="font-family-nunito text-[15px] md:text-[18px] text-[#333] m-0 mb-8">
              {data.summary.subHeadline}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-family-trirong text-[24px] mb-6 text-center text-black tracking-wider">
              Customer Reviews
            </h2>

            {/* --- SUMMARY STATS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Column 1: Average Rating */}
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-7 h-7 fill-[#FA8A8A]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg className="w-7 h-7 relative" viewBox="0 0 24 24">
                      <path
                        className="fill-[#d1d5db]"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                      <path
                        className="fill-[#FA8A8A]"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        clipPath="inset(0 33% 0 0)"
                      />
                    </svg>
                    <span className="text-[16px] tracking-wider text-[#374151] ml-2">
                      {data.summary.averageRating} out of 5
                    </span>
                  </div>
                  <div className="text-[16px] justify-center tracking-wider text-[#374151] flex items-center gap-2">
                    Based on {data.summary.totalReviews} reviews
                    <img
                      src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                      alt="Verified"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Rating Bars */}
              <div className="flex flex-col gap-1 w-full max-w-[250px] mx-auto">
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5 w-20">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#FA8A8A]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex-1 bg-[#e5e7eb] h-3 rounded-sm overflow-hidden">
                    <div
                      className="bg-[#FA8A8A] h-full"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#374151] w-8 pl-5 text-left">
                    84
                  </span>
                </div>
                {/* 4 Stars */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5 w-20">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#FA8A8A]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 fill-[#d1d5db]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-[#e5e7eb] h-3 rounded-sm overflow-hidden">
                    <div
                      className="bg-[#FA8A8A] h-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#374151] w-8 pl-5 text-left">
                    17
                  </span>
                </div>
                {/* 3 Stars */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5 w-20">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#FA8A8A]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#d1d5db]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex-1 bg-[#e5e7eb] h-3 rounded-sm overflow-hidden">
                    <div
                      className="bg-[#FA8A8A] h-full"
                      style={{ width: "7%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#374151] w-8 pl-5 text-left">
                    8
                  </span>
                </div>
                {/* 2 Stars */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5 w-20">
                    {[...Array(2)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#FA8A8A]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#d1d5db]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex-1 bg-[#e5e7eb] h-3 rounded-sm overflow-hidden">
                    <div
                      className="bg-[#FA8A8A] h-full"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#374151] w-8 pl-5 text-left">
                    1
                  </span>
                </div>
                {/* 1 Star */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5 w-20">
                    <svg className="w-4 h-4 fill-[#FA8A8A]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-[#d1d5db]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex-1 bg-[#e5e7eb] h-3 rounded-sm overflow-hidden">
                    <div
                      className="bg-[#FA8A8A] h-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#374151] w-8 pl-5 text-left">
                    0
                  </span>
                </div>
              </div>

              {/* Column 3: Write Review Button */}
              <div className="flex flex-col justify-center items-center h-full">
                <button className="bg-[#FA8A8A] w-full max-w-[240px] text-[16px] text-white tracking-wider py-3 px-8 font-semibold border-0 cursor-pointer transition-colors hover:bg-[#FBA1A1]">
                  Write a review
                </button>
              </div>
            </div>

            {/* Authenticity Badge */}
            <div className="text-center mt-8">
              <img
                src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
                alt="Diamond Authenticity"
                className="inline-block max-w-[80px]"
              />
              <span className="block mt-1 text-[12px] font-semibold text-[#4c8eda]">
                {data.summary.authenticityScore.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto">
            {/* Filter Bar */}
            <div className="mx-auto w-full mb-6">
              <div className="border-t border-b border-[#ffe4e4] py-3">
                <div className="inline-flex items-center cursor-pointer group">
                  <span className="text-[#FA8A8A] text-12px md:text-[14px] font-medium">
                    Most Recent
                  </span>
                  <svg
                    className="w-4 h-4 ml-1 text-[#FA8A8A] transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* --- MAPPED REVIEWS LIST --- */}
            <div>
              {data.reviews.map((review) => (
                <div
                  key={review.id}
                  className="py-6 flex items-start gap-4 border-b border-[#e5e7eb] last:border-b-0"
                >
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          fill={i < review.rating ? "#FA8A8A" : "#d1d5db"}
                        />
                      ))}
                    </div>

                    {/* Author + Verified */}
                    <div className="flex items-center gap-3 mb-3">
                      <svg
                        className="w-8 h-8 text-[#9ca3af]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#FA8A8A] m-0">
                          {review.author}
                        </p>
                        {review.verified && (
                          <span className="inline-block bg-[#FA8A8A] text-white text-xs py-1 px-2 rounded">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="font-family-nunito text-base tracking-wide leading-[1.4] text-[#374151] m-0">
                      {review.content}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="text-right">
                    <span className="text-sm text-[#6b7280]">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="max-w-[800px] mx-auto flex justify-center items-center gap-4 py-8 select-none">
              <span className="text-[24px] font-bold text-gray-500 cursor-default leading-none">
                1
              </span>
              <a
                href="#"
                className="text-[16px] text-[#FA8A8A] font-light hover:opacity-75 transition-opacity leading-none"
              >
                2
              </a>
              <a
                href="#"
                className="text-[16px] text-[#FA8A8A] font-light hover:opacity-75 transition-opacity leading-none"
              >
                3
              </a>
              {/* Next Page Arrow */}
              <a
                href="#"
                className="text-[#FA8A8A] hover:opacity-75 transition-opacity flex items-center"
              >
                <svg
                  className="w-4 h-4 stroke-current stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Skip to Last Page Arrow  */}
              <a
                href="#"
                className="text-[#FA8A8A] hover:opacity-75 transition-opacity flex items-center"
                aria-label="Last Page"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.707 17.707L13.414 12L7.707 6.293L6.293 7.707L10.586 12l-4.293 4.293zM15 6h2v12h-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewRating;
