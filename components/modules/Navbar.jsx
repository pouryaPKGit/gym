"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavMenu from "./MobileNavMenu";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between xl:mx-52 lg:mx-20 md:mx-8 mx-5 my-2">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/images/Untitled-1.png1.png"
            alt="logo"
            width={70}
            height={70}
            className="-mr-3"
          />
          <h1 className="text-2xl font-serif text-gray-800 mt-5">FITNESS</h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-10">
            <li
              className="nav__link"
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
              className="nav__link"
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
              className="nav__link"
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
              className="nav__link"
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
              className="nav__link"
              onClick={() => {
                const target = document.getElementById("Contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </li>
            <li
              className="nav__link"
              onClick={() => {
                const target = document.getElementById("Reviews");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Reviews
            </li>
          </ul>
        </div>

        <CgMenuMotion
          className="md:hidden block text-4xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <div
          className={`absolute top-0   flex flex-col gap-8 md:hidden transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ right: 0 }}
        >
          <AiOutlineClose
            className="text-4xl text-white absolute top-5 right-5 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
