import React from "react";

const AdBox = ({ logo, tittle, des, link, color }) => {
  return (
    <div className="px-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Icon Section */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto sm:mx-0">
            <span className={`text-${color}-500 text-2xl font-bold`}>
              <img src={logo} />
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
