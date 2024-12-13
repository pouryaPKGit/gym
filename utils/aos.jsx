"use client"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css";


function AOSInit() {
useEffect(()=> {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };

    initAOS();
  },[]);
  return null;
}

export default AOSInit;