import React from "react";


const Hero = () => {
  return (
    <div className=" flex items-center justify-center bg-cover bg-center w-[100w] h-[80vh]" style={{backgroundImage: "url('/hero.png')"}}>
      <div className="pt-10">
       
        <h1 className="text-center font-bold  tracking-wide text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-10">
          Welcome Home!, We Deliver Experience <br />
          Make Your Memories
        </h1>
      </div>
    </div>
  );
};

export default Hero;
