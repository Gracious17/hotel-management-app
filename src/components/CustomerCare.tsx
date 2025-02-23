import Image from "next/image";
import React from "react";
import CusIcon from "../../public/image 35.png";
const CustomerCare = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-auto">
      {/* First container */}
      <div className="flex flex-col items-center ">
        <div>
          <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
        </div>
        <h3 className="font-semibold">Seamless Booking Experience</h3>
        <p className="text-sm">
          Our easy-to-use platform guarantees a smooth and secure booking
          process.
        </p>
      </div>
      {/* Second container */}
      <div className="flex flex-col items-center">
        <div>
          <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
        </div>
        <h3 className="font-semibold">Seamless Booking Experience</h3>
        <p className="text-sm ">
          Our easy-to-use platform guarantees a smooth and secure booking
          process.
        </p>
      </div>
      {/* Third container */}

      <div className="flex flex-col items-center">
        <div>
          <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
        </div>
        <h3 className="font-semibold">Seamless Booking Experience</h3>
        <p className="text-sm">
          Our easy-to-use platform guarantees a smooth and secure booking
          process.
        </p>
      </div>
    </div>
  );
};

export default CustomerCare;
