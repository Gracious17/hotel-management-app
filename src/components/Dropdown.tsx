"use client";
import Image from "next/image";
import { useState } from "react";

const countries = [
  { name: "United States", code: "us", flag: "🇺🇸" },
  { name: "United Kingdom", code: "gb", flag: "🇬🇧" },
  { name: "Nigeria", code: "ng", flag: "🇳🇬" },
  { name: "Benin", code: "bj", flag: "🇧🇯" },
];

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to US
  const [isOpen, setIsOpen] = useState(false);

  const selectCountry = (country: {
    name: string;
    code: string;
    flag: string;
  }) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md"
      >
        <Image
          src={`https://flagcdn.com/w40/${selectedCountry.code}.png`}
          width={40}
          height={40}
          alt={selectedCountry.name}
          className="w-5 h-5 mr-2"
        />
        <span>{selectedCountry.name}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
          <ul className="py-1">
            {countries.map((country) => (
              <li key={country.code}>
                <button
                  onClick={() => selectCountry(country)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  <Image
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    width={40}
                    height={40}
                    alt={country.name}
                    className="w-5 h-5 mr-2"
                  />
                  {country.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
