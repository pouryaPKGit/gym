import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-40 flex lg:flex-nowrap flex-wrap items-center justify-center gap-20 mx-5" id="About">
      <div className="relative" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        {/* تصویر */}
        <Image
          src="/images/pexels-photo-136410.webp"
          alt="About us"
          width={800}
          height={800}
          className="rounded-br-[70px] brightness-50"
        />
        {/* متن یا محتوای روی عکس (در صورت نیاز) */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <h1 className="text-5xl font-bold border-b-[3px] border-red-600 w-[220px] pb-2">
          About Us
        </h1>
        <p className="sm:w-[400px] w-[300px] mt-10">
          Founded in 2005, our gym has proudly been a hub of fitness and
          wellness for over 20 years. From the very beginning, our mission has
          been to create an environment where members can achieve their fitness
          goals with confidence and support. At FITNESS, we take pride in
          offering the best: Experienced Trainers: Our team consists of
          certified coaches and personal trainers with years of expertise,
        </p>
        <button className="bg-red-600 text-white w-[150px] h-[50px] mt-10 rounded-md hover:opacity-70 duration-300">Read More</button>
      </div>
    </div>
  );
};

export default About;
