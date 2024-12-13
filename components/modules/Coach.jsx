import React from 'react'
import {ourCoach} from"../../Data/Data"
import Image from 'next/image'
const Coach = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40' id='Coach' >
       <h1 className=' text-4xl font-semibold  text-gray-900  border-b-[3px] border-red-600'>Our Coach</h1>
       <p className='text-gray-500 font-semibold mt-7 sm:text-[14px]  text-xs'>Sports are an essential part of human culture, providing a way to  </p>
      <p className='text-gray-500  font-semibold sm:text-[14px]  text-xs'>develop teamwork, and enjoy recreational</p>
      <div className='flex flex-wrap justify-center gap-10 mt-20'>
        {
            ourCoach.map((coach,index) => (
                <div key={index} className='flex flex-col items-center relative overflow-hidden group ' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <Image src={coach.img} alt={coach.title} width={300} height={300} className='rounded-md transition-transform transform group-hover:scale-110 duration-500 ease-in-out cursor-pointer' />
                    <h1 className='mt-8 font-bold text-xl'>{coach.title}</h1>
                    <p className='mt-1 text-gray-700 '>{coach.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Coach
