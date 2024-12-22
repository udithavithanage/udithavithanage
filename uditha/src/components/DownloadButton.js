import React, { useState, useRef } from "react";

const DownloadButton = ({ project }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCanceled, setIsCanceled] = useState(false);
  const xhrRef = useRef(null);

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);
    setIsCanceled(false);

    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;

    xhr.open(
      "GET",
      `https://uditha-backend-production.up.railway.app/download-zip?project=${project}`,
      true
    );
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = Math.round((event.loaded / event.total) * 100);
        setProgress(percentage);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
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
    setIsCanceled(false);
    xhrRef.current = null;
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
      {isDownloading && (
        <div className="relative size-20">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-neutral-700"
              strokeWidth="2"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-blue-600 dark:text-blue-500"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              strokeLinecap="round"
            ></circle>
          </svg>

          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
              {progress}%
            </span>
          </div>
        </div>
      )}

      {!isDownloading && !isCanceled && (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleDownload}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
      )}

      {isDownloading && (
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all"
        >
          Cancel
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
