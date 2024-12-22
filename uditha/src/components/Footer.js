import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Import WhatsApp icon from react-icons

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

          <div className="flex gap-5">
            <a
              href="https://wa.me/94713506655" // Redirect to WhatsApp with phone number
              className="text-xl md:text-2xl hover:text-green-500 transition"
              target="_blank" // Opens in a new tab or app
              rel="noopener noreferrer" // Ensures security when opening in a new tab
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
