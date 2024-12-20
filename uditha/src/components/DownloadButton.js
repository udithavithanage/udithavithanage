import React, { useState } from "react";

const DownloadButton = ({ project }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);

    // Create an XMLHttpRequest to track download progress
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://localhost:3001/download-zip?project=${project}`,
      true
    );
    xhr.responseType = "blob"; // Expecting a binary file

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = Math.round((event.loaded / event.total) * 100);
        setProgress(percentage);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        // Create a download link for the user
        const url = window.URL.createObjectURL(new Blob([xhr.response]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "download.zip");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setIsDownloading(false);
      }
    };

    xhr.onerror = () => {
      console.error("An error occurred during the download.");
      setIsDownloading(false);
    };

    xhr.send();
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
      {isDownloading ? (
        <div className="w-80">
          {/* Progress Bar */}
          <div className="relative h-4 w-full bg-gray-300 rounded-full shadow-lg">
            <div
              className="absolute left-0 top-0 h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-gray-700 text-lg font-medium text-center">
            Downloading... <span className="font-semibold">{progress}%</span>
          </p>
        </div>
      ) : (
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg transform hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Download ZIP Folder
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
