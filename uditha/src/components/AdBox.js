import React, { useEffect, useState } from "react";

const AdBox = ({ logo, tittle, des, link, color }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update state whenever visibility changes
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const element = document.getElementById("ad-box");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="px-10">
      <div className="max-w-3xl mx-auto">
        <div
          id="ad-box"
          className={`bg-white p-10 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          {/* Icon Section */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto sm:mx-0">
            <span className={`text-${color}-500 text-2xl font-bold`}>
              <img src={logo} alt="Ad Logo" />
            </span>
          </div>
          {/* Content Section */}
          <div className="flex-1 text-center sm:text-left">
            <h3
              className={`text-lg font-semibold text-gray-800 hover:text-${color}-500 cursor-pointer transition-colors`}
            >
              {tittle}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{des}</p>
            <a
              href={link}
              className={`text-gray-500 text-sm font-medium hover:underline mt-2 inline-block`}
            >
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBox;
