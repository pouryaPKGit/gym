import React from 'react'
import {ourCourses} from "../../Data/Data"
import Image from 'next/image'
const Courses = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-20' id='Courses' data-aos="zoom-in-down">
      <h1 className=' text-4xl font-semibold  text-gray-900  border-b-[3px] border-red-600' >Our Courses</h1>
      <p className='text-gray-500 font-semibold mt-7 sm:text-[14px]  text-xs'>Sports are an essential part of human culture, providing a way to  </p>
      <p className='text-gray-500  font-semibold sm:text-[14px]  text-xs'>develop teamwork, and enjoy recreational</p>
      </div>
      <div className='flex xl:flex-row flex-wrap  justify-center gap-10 mt-16'>
        {
            ourCourses.map((courses,index) => (
                <div key={index} data-aos="fade-up"
                data-aos-duration="2000">
                    <Image src={courses.img} alt={courses.title} width={300} height={300} className='rounded-md hover:rounded-[70px] hover:opacity-70 duration-500 cursor-pointer sm:w-[400px]' />
                    <h1 className='text-2xl text-gray-800 font-bold mt-5'>{courses.title}</h1>
                    <p className='sm:w-[380px] w-[280px] text-md text-gray-600 leading-6 mt-5 '>{courses.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Courses
