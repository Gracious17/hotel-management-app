"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";
// import icon from "../../public/twemoji_flag-benin.png";
const Navbar = () => {
  // const pathname = usePathname();
  return (
    <div className="w-full h-[80px] flex items-center text-center justify-center">
      <div className=" flex items-center   w-full px-4">
        <div className="flex  gap-4 items-center text-center ">
          <h3 className="text-2xl font-bold">
            <span className="text-[#5627FF]">Find</span>peace
          </h3>
          <ul className="flex justify-between gap-4">
            <Link href="/">
              <li className="hover:border-b-2  border-[#5627FF] pb-4 hover:text-[#5627FF]">
                Hotels
              </li>
            </Link>
            <Link href="#">
              <li className="hover:border-b-2  border-[#5627FF] pb-4 hover:text-[#5627FF]">
                Flights
              </li>
            </Link>

            <Link href="#">
              <li className="hover:border-b-2  border-[#5627FF] pb-4 hover:text-[#5627FF]">
                Car Rentals
              </li>
            </Link>

            <Link href="#">
              <li className="hover:border-b-2  border-[#5627FF] pb-4 hover:text-[#5627FF]">
                Events
              </li>
            </Link>
          </ul>

          <select title="hj" className="p-2 border border-gray-300 rounded-md">
            <option> United States</option>
            <option>🇬🇧 United Kingdom</option>
            <option>🇳🇬 Nigeria</option>
            <option>🇨🇦 Canada</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
