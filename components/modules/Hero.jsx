import Link from "next/link";
import React from "react";

const Hero = () => {


  return (
    <div className="w-full h-[800px] bg-[url('/images/squat.jpg')] bg-cover bg-center relative mt-20" id="Home">
      <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="md:w-[900px] sm:w-[500px] w-[400px] flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center" data-aos="zoom-in">
            Best Fitness Center Near You
          </h1>
          <p className="text-white mt-5 md:flex hidden" data-aos="zoom-in">
            Sports are an essential part of a healthy lifestyle. They not only
            improve physical fitness but
          </p>
          <p className="md:hidden flex text-white mt-5" data-aos="zoom-in">
            Sports are an essential part of a healthy lifestyle. They
          </p>
          <p className="md:hidden flex text-white" data-aos="zoom-in">
            not only improve physical fitness but also
          </p>
          <p className="text-white mt-1" data-aos="zoom-in">enhance mental well-being by</p>
          <div className="flex items-center gap-7 mt-12">
            <Link href="/login"><button
           
             
              className="bg-red-700 font-semibold text-white sm:w-[180px] w-[120px] h-[55px] rounded-md duration-500 hover:opacity-50"
            >
         Login to account
              
            </button>
            </Link>
            <Link href="/register">
            <button  className="border border-white font-semibold text-white sm:w-[180px] w-[120px] h-[55px] rounded-md hover:bg-white/40 duration-500">
            Register Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Hero;
