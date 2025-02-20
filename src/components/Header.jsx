"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [showHeader, setShowHeader] = useState(false);

  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Our Products", path: "#products" },

    { name: "Contact Us", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white text-black px-10 md:px-16 sm:px-0 transition-transform duration-150 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } fixed w-full top-0 left-0 z-50`}
    >
      <div className="flex justify-between items-center mx-auto">
        <div className="flex gap-1 font-serif font-bold italic text-2xl cursor-pointer">
          <span className="pt-4">
            <Image src="/logo.png" height={50} width={70} alt="logo" />
          </span>
          <span>
            <Image src="/title.png" height={100} width={120} alt="logo" />
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex text-xl font-bold lg:gap-10 md:gap-4 sm:gap-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer font-serif font-light lg:text-lg md:text-sm transition-colors duration-300"
              >
                <Link href={item.path}>
                  <span
                    className={
                      activeTab === item.name ? "text-yl" : "hover:text-yl"
                    }
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
