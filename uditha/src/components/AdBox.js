import React from "react";

const AdBox = () => {
  return (
    <div className="px-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Icon Section */}
          <div className="w-16 h-16 bg-orange-100 flex items-center justify-center rounded-full mx-auto sm:mx-0">
            <span className="text-orange-500 text-2xl font-bold">VD</span>
          </div>
          {/* Content Section */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-500 cursor-pointer transition-colors">
              Video Downloader
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Video Downloader Web App A Node.js-powered video downloader for
              downloading videos from popular platforms like YouTube, Facebook,
              TikTok, and Instagram. This web app uses HBS templates, HTML, and
              CSS to deliver a clean, responsive interface for seamless video
              downloads.
            </p>
            <a
              href="https://videodownloaderv2-9gvseiqgr-udithavithanages-projects.vercel.app/"
              className="text-orange-500 text-sm font-medium hover:underline mt-2 inline-block"
            >
              www.videodownloader.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBox;
