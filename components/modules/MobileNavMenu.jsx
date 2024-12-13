import React from "react";

const MobileNavMenu = () => {
  return (
    <div className="">
      <ul className="flex flex-col h-screen items-start pl-5 pt-20 gap-6 text-lg bg-black text-white w-[300px] z-50">
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("Home");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("Coach");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Coach
        </li>
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("Courses");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Courses
        </li>
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("About");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          About
        </li>
        
       
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("Reviews");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Reviews
        </li>
        <li
          className="cursor-pointer hover:opacity-75 duration-500  hover:scale-125"
          onClick={() => {
            const target = document.getElementById("Contact");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
