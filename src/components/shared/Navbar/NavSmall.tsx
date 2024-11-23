"use client";

import { navItems } from "@/data/navMenuItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaSearch, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdWbSunny } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { WiMoonWaningCrescent2 } from "react-icons/wi";
import logoSm from "../../../assets/logo-sm-screen.png";

const NavSmall: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#17181c] h-[50px] flex items-center text-white xl:hidden relative">
      <div className="container_fluid w-full">
        <div className="w-full flex items-center justify-between">
          <div
            onClick={toggleMode}
            className="w-[50px] h-[24px] flex items-center justify-between rounded-full p-[2px] cursor-pointer bg-[#303135] relative"
          >
            <div
              className={`absolute w-[20px] h-[20px] rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "left-[28px] bg-opacity-80"
                  : "left-[2px] bg-opacity-100"
              } bg-[#29cdf2]`}
            ></div>
            <div className="w-[20px] h-[20px] flex items-center justify-center z-10">
              <WiMoonWaningCrescent2
                className={`text-white ${
                  isDarkMode ? " opacity-75" : "opacity-100"
                }`}
              />
            </div>
            <div className="w-[20px] h-[20px] flex items-center justify-center z-10">
              <MdWbSunny
                className={` ${
                  isDarkMode ? "text-white opacity-85" : "text-[#ffcc00]"
                }`}
              />
            </div>
          </div>
          <div>
            <Image src={logoSm} alt="logoSm" className="h-[27px] w-[148px]" />
          </div>
          <div className="menubar-sm cursor-pointer" onClick={toggleMenu}>
            <RiMenuSearchLine size={36} />
          </div>
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#212228] text-white transition-transform duration-300 w-full z-50 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[50px] bg-[#17181c] flex items-center justify-end px-4">
          <button onClick={toggleMenu} className="text-xl">
            ✖
          </button>
        </div>
        <div className="p-4">
          <div className="w-full h-10 border-[2px] border-[#29cdf2] rounded-xl flex items-center p-2">
            <FaSearch size={22} className="text-[#29cdf2]" />
            <input
              type="text"
              placeholder="RECHERCHE..."
              className="w-full ml-2 mr-1 bg-transparent placeholder:text-gray-500 text-sm outline-none"
            />
            <button className="w-[80px] h-[26px] bg-[#29cdf2] text-white rounded-md flex items-center justify-center text-sm">
              Valider
            </button>
          </div>
        </div>
        <ul className="w-full flex flex-col items-start p-4 space-y-4 overflow-y-auto">
          {navItems.map((item, index) => {
            const { label, href, dropdownItems } = item;
            const isDropdownOpen = activeIndex === index;

            return (
              <li key={index} className="relative w-full">
                {dropdownItems ? (
                  <div
                    className="w-full bg-[#26272d] flex items-center justify-between text-lg text-white hover:bg-[#00cdf2] px-4 py-2 rounded-md cursor-pointer"
                    onClick={() =>
                      setActiveIndex((prevIndex) =>
                        prevIndex === index ? null : index
                      )
                    }
                  >
                    <span>{label}</span>
                    <FiChevronDown
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    href={href || "#"}
                    className="w-full bg-[#26272d] flex items-center justify-between text-lg text-white hover:bg-[#00cdf2] px-4 py-2 rounded-md"
                  >
                    <span>{label}</span>
                  </Link>
                )}
                {dropdownItems && isDropdownOpen && (
                  <ul className="pl-4 space-y-2">
                    {dropdownItems.map((dropdownItem, i) => (
                      <li key={i}>
                        <Link
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white hover:text-[#00cdf2] duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="p-4">
          <div className="flex items-center">
            <Link href={"#"} className="px-[2px] text-white">
              <FaDiscord size={24} />
            </Link>
            <Link href={"#"} className="px-[2px] text-white">
              <AiFillInstagram size={24} />
            </Link>
            <Link href={"#"} className="px-[2px] text-white">
              <FaYoutube size={24} />
            </Link>
            <Link href={"#"} className="px-[2px] text-white">
              <FaXTwitter size={24} />
            </Link>
            <Link href={"#"} className="px-[2px] text-white">
              <FaTiktok size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSmall;
