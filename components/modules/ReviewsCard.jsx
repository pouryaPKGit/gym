import Image from 'next/image';
import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";


const ReviewsCard = ({ review }) => {
  const { image, name, profession, rating, text } = review;

  return (
    <div className='rounded-b-lg overflow-hidden shadow-md m-4 mt-16'>
      
      <div className='border border-black '>
        <div className='p-6 flex items-center space-x-6'>
          <div>
            <Image src={image} alt={name} width={80} height={80} className='rounded-full border-2 border-red-600' />
          </div>
          <div>
            <h1 className='text-lg font-semibold text-red-600'>{name}</h1>
            <p className='text-sm text-gray-700'>{profession}</p>
          </div>
        </div>
      </div>
      <div className='p-6 bg-black'>
      <BiSolidQuoteAltLeft className='text-red-500 text-2xl' />
        <p className='text-white  mt-4'>{text}</p>
        <BiSolidQuoteAltRight className='text-red-500 text-2xl mt-3' />
      </div>
    
    </div>
  );
};
export default ReviewsCard
