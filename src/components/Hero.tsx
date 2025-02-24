import React from "react";

// const Hero = () => {
//   return (
// <<<<<<< HEAD
//     <div className="relative bg-hero-img bg-center  bg-cover w-[100w] h-[80vh] ">
//       {/* overlay */}
//       <div className="absolute w-full bg-black/40 h-[70vh] mt-4">hhh</div>
// =======
//     <div className=" flex items-center justify-center bg-cover bg-center w-[100w] h-[80vh]" style={{backgroundImage: "url('/hero.png')"}}>
// >>>>>>> pr-1
//       <div className="pt-10">

//         <h1 className="text-center font-bold  tracking-wide text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-10">
//           A piece of paradise just for you
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center  w-[100vw] h-[80vh]"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-[70vh] bg-black/40 mt-4"></div>

      <div className="pt-10 relative z-10">
        <h1 className="text-center font-bold tracking-wide text-lg sm:text-xl md:text-4xl lg:text-6xl xl:text-7xl leading-10 text-white font-sans">
          A piece of paradise just for you
        </h1>
      </div>
    </div>
  );
};

export default Hero;
