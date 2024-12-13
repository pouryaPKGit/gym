import React from 'react'
import PricingCard from './PricingCard'
import {classPricing } from "../../Data/Data"
const Pricing = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-28' data-aos="zoom-in-up">
    <h1 className=' text-4xl font-semibold  text-gray-900 pb-2 border-b-[3px] border-red-600'>Pricing List</h1>
       <p className='text-gray-500 font-semibold mt-7 sm:text-[14px] text-xs'>Sports are an essential part of human culture, providing a way to  </p>
      <p className='text-gray-500  font-semibold sm:text-[14px]  text-xs'>develop teamwork, and enjoy recreational</p>
      </div>
    <div className='flex flex-wrap gap-10 items-center justify-center'>
        
        {classPricing.map((classPricing, index) => (
           <PricingCard 
             key={index}
             model={classPricing.model}
             price={classPricing.price}
             days={classPricing.days}
             text={classPricing.text}
             contains={classPricing.contains}
             time={classPricing.time}
           />
         ))}
     </div>
    </>
   
  )
}

export default Pricing
