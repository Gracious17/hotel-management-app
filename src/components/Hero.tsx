import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-hero-img bg-center  bg-cover w-[100w] h-[80vh] ">
      {/* overlay */}
      <div className="absolute w-full bg-black/40 h-[70vh] mt-4">hhh</div>
      <div className="pt-10">
        <h1 className="text-center font-bold  tracking-wide text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-10">
          A piece of paradise just for you
        </h1>
      </div>
    </div>
  );
};

export default Hero;
