"use client";
import { clientReviews } from '../../Data/Data';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewsCard from './ReviewsCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3, // تعداد آیتم‌ها برای دسکتاپ
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Slider = () => {
  return (
    <div className='w-[80%] mx-auto mt-32' data-aos="flip-up" id='Reviews'>
        <div className='flex flex-col items-center justify-center mt-28'>
    <h1 className=' text-4xl font-semibold  text-gray-900 pb-2 border-b-[3px] border-red-600'>Reviews</h1>
       <p className='text-gray-500 font-semibold mt-7 sm:text-[14px] text-xs'>Sports are an essential part of human culture, providing a way to  </p>
      <p className='text-gray-500  font-semibold sm:text-[14px]  text-xs'>develop teamwork, and enjoy recreational</p>
      </div>
   <Carousel arrows={true} autoPlaySpeed={5000} infinite responsive={responsive}  >
    {clientReviews.map((review) => {
        return (
            <div key={review.image}>
                <ReviewsCard review={review}/>
            </div>
        );
    })}
   </Carousel>
   </div>
  );
}

export default Slider;
