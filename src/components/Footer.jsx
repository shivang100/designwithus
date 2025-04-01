import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex gap-1">
              <img src="/logo.png" alt="Design With Us" className="h-12" />
              <Image src="/title.png" height={20} width={80} alt="logo" />
            </div>
            <p className="text-gray-600 max-w-xs">
              Every corner tells a story of resilience and durability.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-yl">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-yl">Contact Info</h2>
            <p className="text-gray-600">
              Backside Subhash Sales Corporation Godown, Mohammadi Road
            </p>
            <p className="text-gray-600">Sallia, Shahjahanpur - 242306 </p>
            <p className="text-gray-600 cursor-pointer">
              <a href="tel:+917007767001" className="hover:text-gray-800">
                +91 7007767001
              </a>
            </p>
            <p className="text-gray-600 cursor-pointer">
              <a
                href="mailto:kirtiironsteelworks@gmail.com"
                className="hover:text-gray-800"
              >
                kirtiironsteelworks@gmail.com
              </a>
            </p>
          </div>
          {/* Instagram Icon
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <a href="#" className="text-purple-600 text-2xl">
              <FaInstagram />
            </a>
          </div> */}
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-gray-500 text-sm text-center">
          Copyright 2025 |{" "}
          <a href="#" className="hover:text-gray-800">
            kirtiironsteelworks.com
          </a>
        </div>
      </div>
    </footer>
  );
}
