import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-6">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">UDITHA VITHANAGE</h2>
            <p className="text-gray-400 mt-2">
              Web Developer | Designer | ML Developer
            </p>
          </div>

          <div className="w-full lg:w-1/3 text-right">
            <a
              href="tel:+94713506655"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
            >
              Contact Me: +94 (71) 350 66 55
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 mt-6">
          <p>
            &copy; {new Date().getFullYear()} Uditha Vithanage. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
