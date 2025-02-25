"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div
      className="relative w-full h-[50rem] bg-cover bg-center flex  justify-center items-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
       <h1 className="text-white font-bold tracking-wide text-lg sm:text-xl md:text-4xl lg:text-4xl xl:text-3xl leading-10">
          A piece of paradise just for you
        </h1>

      {/* Buttons Section */}
      <div className="absolute bottom-10 bg-white/10 backdrop-blur-md p-4 rounded-lg flex space-x-4">
        {["Hotels", "Flight", "Rentals", "Event"].map((item) => (
          <DropdownMenu
            key={item}
            open={openMenu === item}
            onOpenChange={(isOpen) => setOpenMenu(isOpen ? item : null)}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-white text-lg px-6 py-3 hover:bg-white"
              >
                {item}
              </Button>
            </DropdownMenuTrigger>

            {item === "Hotels" && (
              <DropdownMenuContent className=" flex w-40% bg-gray-200 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">
                  Where do you want to stay?
                </h4>

                {/* Search Destination Input */}
                <div className="mt-2 flex-col">
                  <Input placeholder="Search Destination" />
                </div>

                {/* Pick Date Section */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Pick Date</h4>
                  <Calendar mode="single" />
                </div>

                {/* Guests & Floor Dropdowns */}
                <div className="flex justify-between mt-4 space-x-4">
                  <div className="w-1/2">
                    <h4 className="text-lg font-semibold">Guests</h4>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-1/2">
                    <h4 className="text-lg font-semibold">Floor</h4>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Floor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Floor</SelectItem>
                        <SelectItem value="2">2nd Floor</SelectItem>
                        <SelectItem value="3">3rd Floor</SelectItem>
                        <SelectItem value="4">4+ Floor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="mt-6 text-center">
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Search
                  </Button>
                </div>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        ))}
      </div>
    </div>
  );
};

export default Hero;
