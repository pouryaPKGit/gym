import React from "react";
import ClassTimeCard from "./ClassTimeCard";
import {classList} from "../../Data/Data"
const ClassTime = () => {
  return (
    <div className="w-full min-h-[1000px] bg-[url('/images/pexels-photo-6796964.jpeg')] bg-cover bg-center relative mt-20 ">
      <div className="absolute inset-0 bg-black/80 bg-opacity-60"></div>

      <div className="relative flex flex-col items-center justify-center text-center z-10">
        <div className="md:w-[900px] sm:w-[500px] w-[400px] flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl sm:text-6xl font-bold mt-40">
            ClassTime Liste
          </h1>
          <p className="text-white mt-5 md:flex hidden">
            Sports are an essential part of a healthy lifestyle. They not only
            improve physical fitness but
          </p>
          <p className="md:hidden flex text-white mt-5">Sports are an essential part of a healthy</p>
          <p className="md:hidden flex text-white">not only improve physical fitness but  </p>
          <p className="text-white mt-1">enhance mental well-being by</p>
        </div>
      </div>
      
      {/* کلاس‌های کارت‌ها در اینجا با margin-top تنظیم می‌شوند */}
      <div className="relative mt-16 flex flex-wrap gap-7 justify-center z-10 mx-5" >
      {classList.map((classList, index) => (
          <ClassTimeCard 
            key={index}
            list={classList.list}
            time={classList.time}
            course={classList.course}
            coach={classList.coach}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassTime;
