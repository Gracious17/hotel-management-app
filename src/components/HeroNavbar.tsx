"use client"; // To handle dropdown state
import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Hotel, Plane, Car, Calendar } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeroNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative justify-center bg-black text-white  p-50px">Hotel</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild>
        <div className="w-[80vw] bg-gray-200 h-[80px] mx-auto flex justify-center items-center rounded-lg shadow-md">
          <h4>Where do you want to stay</h4> <br></br>
          <input type="text" placeholder="Search Destination" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeroNavbar;
