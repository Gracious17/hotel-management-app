"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const Herobtn = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {/* Buttons for different Booking Option */}
      {["Hotels", "Flight", "Rentals", "Event"].map((item) => (
        <DropdownMenu
          key={item}
          open={openMenu === item}
          onOpenChange={(isOpen) => setOpenMenu(isOpen ? item : null)}
        >
          <DropdownMenuTrigger asChild>
            <button variant="outline">{item}</button>
          </DropdownMenuTrigger>

          {item === "Hotels" && (
            <DropdownMenuContent className="w-[80vw] bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">
                Where do you want to stay?
              </h4>

              {/* Search Destination input */}
              <div>
                <input type="text" placeholder="Search Destination" />
              </div>

              {/* Check in div*/}
              <div className="mt-2">
                <h4 className="text-lg font-semibold"> Check in</h4>
                <div>
                <Calendar mode="single" />
                </div>
              </div>

              {/* Check out div*/}
              <div className="mt-2">
                <h4 className="text-lg font-semibold"> Check Out</h4>
                <div>
                <Calendar mode="single" />
                </div>
              </div>

              {/* Guest & Floor Dropdown */}
              <div className=" flex justify-between mt-4 space-x-4">
                <div className="w-1/2">
                  <h4 className="font-gray-800">Guest Room and floor</h4>
                  <div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder='2 Adults, 1 room' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1"></SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  
                </div>
              </div>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      ))}
    </div>
  );
};

export default Herobtn;
