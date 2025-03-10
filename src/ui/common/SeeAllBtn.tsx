"use client";
import Link from "next/link";
import React, { useState } from "react";

const SeeAllBtn = () => {
  const [trackBtn, setTrackBtn] = useState(false);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full h-[1px] bg-[#2D333E] relative rotate-180">
        {trackBtn && (
          <div className="left-to-right h-[1px] bg-[#FD660E] absolute top-0 left-0 rotate-180" />
        )}
      </div>
      <Link
        href={`/courses`}
        onMouseOver={() => {
          setTrackBtn(true);
        }}
        onMouseOut={() => {
          setTrackBtn(false);
        }}
        className="whitespace-nowrap text-[#CBCED3] text-[14px] font-semibold p-1 border-[1px] border-[#2D333E] rounded-md px-4 cursor-pointer hover:border-[#FD660E]"
      >
        See all courses
      </Link>
      <div className="w-full h-[1px] bg-[#2D333E] relative">
        {trackBtn && (
          <div className="right-to-left h-[1px] bg-[#FD660E] absolute top-0 left-0" />
        )}
      </div>
    </div>
  );
};

export default SeeAllBtn;
