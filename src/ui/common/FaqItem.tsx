"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface props {
  answer: string;
  question: string;
}

const FaqItem = ({ answer, question }: props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="max-w-[950px] w-full bg-[#2D333E] border-[1px] border-[#fd660e5a] rounded-sm mt-6">
      <div className="w-full h-full border-b-[7px] border-b-[#FD660E] p-3 flex justify-between items-center">
        <p className="text-[#CCCCCC] font-light text-[15px] leading-[30px]">
          {question}
        </p>
        <button>
          {show ? (
            <IoIosArrowUp
              onClick={() => setShow(!show)}
              size={25}
              className="text-[#FD660E] border-[1px] border-[#FD660E] border-b-[5px] "
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setShow(!show)}
              size={25}
              className="text-[#FD660E] border-[1px] border-[#FD660E] border-b-[5px] "
            />
          )}
        </button>
      </div>
      {show && (
        <div className={`w-full bg-[#FD660E] p-3 transition-all duration-500`}>
          <p className="text-[#2D333E] font-semibold text-[15px] leading-[30px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
