import React, { useState, useRef } from "react";

const DownloadButton = ({ project }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const xhrRef = useRef(null);

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);
    setIsPaused(false);
    setIsCanceled(false);

    // Create an XMLHttpRequest to track download progress
    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;

    xhr.open(
      "GET",
      `https://uditha-backend-production.up.railway.app/download-zip?project=${project}`,
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
      }
      resetDownload();
    };

    xhr.onerror = () => {
      console.error("An error occurred during the download.");
      resetDownload();
    };

    xhr.send();
  };

  const resetDownload = () => {
    setIsDownloading(false);
    setProgress(0);
    setIsPaused(false);
    setIsCanceled(false);
    xhrRef.current = null;
  };

  const handlePause = () => {
    if (xhrRef.current) {
      xhrRef.current.abort();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    handleDownload();
  };

  const handleCancel = () => {
    if (xhrRef.current) {
      xhrRef.current.abort();
      setIsCanceled(true);
    }
    resetDownload();
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
          <div className="flex justify-center space-x-4 mt-4">
            {!isPaused ? (
              <button
                onClick={handlePause}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-all"
              >
                Pause
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all"
              >
                Resume
              </button>
            )}
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg transform hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Download setup file
        </button>
      )}
      {isCanceled && (
        <p className="mt-4 text-red-500 text-sm font-medium">
          Download canceled.
        </p>
      )}
    </div>
  );
};

export default DownloadButton;
