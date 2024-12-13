import React from "react";

const PricingCard = ({ price, model, days, text, contains, time }) => {
  // بررسی اینکه آیا مدل "Normal" است
  const isNormal = model === "Normal";

  return (
    <div className="sm:w-[380px] sm:h-[480px] bg-white shadow-md mt-20  p-8" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <h1 className="text-4xl text-gray-800 font-semibold">{model}</h1>
      <h2 className="text-gray-600 text-xl mt-5">
        <span className="text-red-600 font-semibold text-5xl">${price}</span>/Monthly
      </h2>
      <hr className="mt-8 w-[90%] mx-auto" />
      <div className="flex flex-col gap-4 text-gray-600 text-xl mt-5 font-[400]">
        <p>{days}</p>
        <p>{text}</p>
        <p>{contains}</p>
        <p>{time}</p>
        <button
          className={`flex items-center justify-start w-[200px] h-[60px] p-1 pl-8 -ml-8 rounded-r-[30px] mt-5 duration-500 text-white ${
            isNormal ? "bg-red-600 hover:bg-gray-700" : "bg-gray-600 hover:bg-red-600"
          } `}
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
