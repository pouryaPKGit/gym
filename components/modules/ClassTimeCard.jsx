import React from 'react'

const ClassTimeCard = ({ list, time, course, coach }) => {
  return (
    <div className='w-[280px] h-[250px] border-2 border-gray-200 shadow-sm shadow-white rounded-md text-white flex flex-col gap-5 pl-5 justify-center cursor-pointer hover:bg-white duration-500 hover:text-gray-900' data-aos="flip-left">
    <span className='text-4xl font-semibold '>{list}</span>
    <p className='text-xl'>{time}</p>
    <h1 className='font-bold text-3xl'>{course}</h1>
    <h2 className='font-semibold text-xl'>{coach}</h2>
    </div>
  )
}

export default ClassTimeCard
