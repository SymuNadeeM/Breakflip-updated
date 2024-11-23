"use client";
// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdWbSunny } from "react-icons/md";
import { WiMoonWaningCrescent2 } from "react-icons/wi";
import logo from "../../../assets/logo.png";
import { navItems } from "../../../data/navMenuItems";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync mode with localStorage
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

  return (
    <header className="bg-[#17181c] h-[133px] hidden xl:block">
      <div className="container_fluid">
        <nav className="h-[78px] w-full grid grid-cols-3 gap-[10px]">
          {/* left header 1st */}
          <div className="flex items-center">
            <div
              onClick={toggleMode}
              className="w-[50px] h-[24px] flex items-center justify-between rounded-full p-[2px] cursor-pointer bg-[#303135] relative"
            >
              {/* Background Toggle */}
              <div
                className={`absolute w-[20px] h-[20px] rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "left-[28px] bg-opacity-80"
                    : "left-[2px] bg-opacity-100"
                } bg-[#29cdf2]`}
              ></div>

              {/* Moon Icon for Dark Mode */}
              <div className="w-[20px] h-[20px] flex items-center justify-center z-10">
                <WiMoonWaningCrescent2
                  className={`text-white ${
                    isDarkMode ? " opacity-75" : "opacity-100"
                  }`}
                />
              </div>

              {/* Sun Icon for Light Mode */}
              <div className="w-[20px] h-[20px] flex items-center justify-center z-10">
                <MdWbSunny
                  className={` ${
                    isDarkMode ? "text-white opacity-85" : "text-[#ffcc00]"
                  }`}
                />
              </div>
            </div>

            <div className="w-[1.1px] h-[30px] bg-white mx-[10px]"></div>
            <input
              type="text"
              placeholder="RECHERCHER..."
              className="w-[260px] h-8 px-3 rounded-[18px] border-[2px] border-[#29cdf2] text-white outline-none bg-transparent uppercase placeholder:text-gray-500"
            />
          </div>
          {/* center of header 1st */}
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              {" "}
              <Image src={logo} alt="logo" className="w-[286px] h-[54px]" />
            </Link>
          </div>
          {/* right of header 1st */}
          <div className="flex items-center justify-end">
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
        </nav>
        {/* Menu */}
        <nav className="h-[55px] w-full flex items-center">
          <ul className="w-full flex items-center justify-between">
            {navItems.map((item, index) => {
              const { label, href, dropdownItems } = item;
              const isDropdownOpen = activeIndex === index;

              return (
                <li
                  key={index}
                  className="relative group w-full flex items-center justify-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <Link
                    href={href || "#"}
                    className="w-full bg-transparent hover:bg-[#00cdf2] flex items-center justify-center text-lg rounded-md duration-200 text-white uppercase whitespace-nowrap"
                  >
                    {label}
                    {dropdownItems && (
                      <FiChevronDown className="ml-2 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>
                  {dropdownItems && isDropdownOpen && (
                    <ul className="absolute top-full w-48 bg-[#17181c] rounded-md shadow-lg">
                      {dropdownItems.map((dropdownItem, i) => (
                        <li key={i} className="">
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm font-semibold uppercase text-white hover:text-[#00cdf2] duration-200"
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
