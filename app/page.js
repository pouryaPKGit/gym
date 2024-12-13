import About from "@/components/modules/About";
import ClassTime from "@/components/modules/ClassTime";
import Coach from "@/components/modules/Coach";
import Courses from "@/components/modules/Courses";
import Footer from "@/components/modules/Footer";
import Hero from "@/components/modules/Hero";
import Navbar from "@/components/modules/Navbar";
import Pricing from "@/components/modules/Pricing";
import Contact from "@/components/templates/Contact";
import ReviewsSlider from "@/components/modules/ReviewsSlider";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Coach />
      <ClassTime />
      <Pricing />
      <ReviewsSlider />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default page;
