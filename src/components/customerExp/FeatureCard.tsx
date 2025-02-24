// import Image from "next/image";
// import React from "react";
// import CusIcon from "../../public/image 35.png";

// const CustomerCare = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-auto">
//       {/* First container */}
//       <div className="flex flex-col items-center w-[363px]">
//         <div>
//           <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
//         </div>
//         <h3 className="font-semibold">Seamless Booking Experience</h3>
//         <p className="text-sm">
//           Our easy-to-use platform guarantees a smooth and secure booking
//           process.
//         </p>
//       </div>
//       {/* Second container */}
//       <div className="flex flex-col items-center">
//         <div>
//           <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
//         </div>
//         <h3 className="font-semibold">Seamless Booking Experience</h3>
//         <p className="text-sm ">
//           Our easy-to-use platform guarantees a smooth and secure booking
//           process.
//         </p>
//       </div>
//       {/* Third container */}

//       <div className="flex flex-col items-center">
//         <div>
//           <Image src={CusIcon} width={40} height={40} alt="CusIcon" />
//         </div>
//         <h3 className="font-semibold">Seamless Booking Experience</h3>
//         <p className="text-sm">
//           Our easy-to-use platform guarantees a smooth and secure booking
//           process.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CustomerCare;

import Image from "next/image";
import React from "react";
interface props {
  image: string;
  title: string;
  content: string;
}
const FeatureCard = ({ image, title, content }: props) => {
  return (
    <div className="text-center bg-white p-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="m-auto rounded-[100%] "
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[600] text-black font-sans">
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-50 text-[15px]">{content}</p>
    </div>
  );
};

export default FeatureCard;
