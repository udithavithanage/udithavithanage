import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">UDITHA VITHANAGE</h2>
            <p className="text-gray-400 mt-2">
              Web Developer | Designer | ML Developer
            </p>
          </div>

          {/* Contact Button */}
          <div className="w-full md:w-auto">
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
          {/* Social Media Icons */}
          <div className="flex gap-6 mb-10 md:mb-0">
            <a
              href="https://wa.me/94713506655"
              className="text-xl md:text-2xl hover:text-green-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.facebook.com/staphane.uditha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-blue-500 transition"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/uditha_vithanage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-pink-500 transition"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@uditha_vithanage?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-purple-200 transition"
            >
              <FaTiktok size={30} />
            </a>
          </div>
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
