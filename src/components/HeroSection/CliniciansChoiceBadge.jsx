import React from "react";

const CliniciansChoiceBadge = () => {
  return (
    <div
      className="
        group relative flex items-center gap-3
        w-fit h-auto pr-8
        font-sans text-gray-800
        opacity-100 visible
      "
    >
      {/* --- Clinicians' Choice Badge (Centered) --- */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Left Laurel */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="35"
            viewBox="0 0 17 35"
            fill="#212121"
          >
            <path d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"></path>
          </svg>
        </span>

        <p className="text-[16px] font-medium font-family-lora text-center leading-tight text-gray-900">
          Clinicians'
          <br />
          Choice
        </p>
        {/* Right Laurel */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="35"
            viewBox="0 0 17 35"
            fill="#212121"
          >
            <path d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"></path>
          </svg>
        </span>
      </div>

      {/* --- Text & CTA --- */}
      <div className="flex flex-col justify-center flex-1 max-w-[280px]">
        <p className="text-[13px] font-sans leading-snug text-black">
          <span className="font-semibold text-[13px]">355 clinicians</span>{" "}
          share this on <span className="italic text-[13px]">FrontrowMD</span>{" "}
          without compensation.{" "}
          <button className="inline text-[13px] font-family-opensans text-[#212121] border-b-[1px] hover:text-gray-900 transition-colors cursor-pointer">
            Learn more
          </button>
        </p>

        <div className="flex items-center gap-2 mt-1">
          {/* Avatar Group */}
          <div className="flex items-center">
            {[
              "https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0",
              "https://assets.app.thefrontrowhealth.com/yulyi33mil8glzv4b7fhzs5ipnz2",
              "https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Clinician"
                className="w-4 h-4 rounded-full object-cover bg-gray-200 border border-white"
              />
            ))}
          </div>

          <button className="text-[13px] font-semibold hover:underline text-gray-900 whitespace-nowrap cursor-pointer">
            Read their reviews
          </button>
        </div>
      </div>
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-0 right-0 p-1.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
        >
          <path
            d="M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z"
            fill="#666"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CliniciansChoiceBadge;
