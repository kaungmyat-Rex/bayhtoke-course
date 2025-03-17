"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlinePageview } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import Link from "next/link";

interface props {
  id: string;
  courseName: string;
  coursePrice: number;
  courseOriginLink: string;
  courseImg: string;
  courseAuthor: string;
  isNew: boolean;
  isFree: boolean;
  originPrice: number;
}

const CourseCardItem = ({
  id,
  courseName,
  coursePrice,
  courseOriginLink,
  courseImg,
  isNew,
  courseAuthor,
  originPrice,
  isFree,
}: props) => {
  const [mouseTrack, setMouseTrack] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => {
        setMouseTrack(true);
      }}
      onMouseOut={() => {
        setMouseTrack(false);
      }}
      className="group max-w-[320px] w-full px-[10px] pt-[14px] border border-[#2D333E] bg-[#141B23] rounded-xl hover:bg-[#c3c3c3] transition-all duration-100"
    >
      <div className="">
        <div className="w-full h-[200px] relative">
          {isNew && (
            <p className="text-white bg-[#FD660E] rounded-r-full absolute font-semibold text-[12px] px-2 top-2 left-0">
              New
            </p>
          )}
          {mouseTrack && (
            <>
              <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 absolute top-0 left-0 transition-all rounded-md" />

              <div className="flex flex-col justify-center items-center absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 gap-y-5">
                <Link
                  href={`/courses/${id}`}
                  className="bounceAnimation flex justify-center items-center border border-white gap-x-1 rounded-md p-1 cursor-pointer hover:bg-white group/test"
                >
                  <MdOutlinePageview
                    size={24}
                    className="text-white group-hover/test:text-[#141B23]"
                  />
                  <p className="text-[13px] font-medium text-[white] group-hover/test:text-[#141B23]">
                    See Detail
                  </p>
                </Link>
                <Link
                  href={`/payment/${id}?courseName=${courseName}&coursePrice=${coursePrice}`}
                  className={`bounceAnimationReverse flex justify-center items-center border border-white gap-x-1 rounded-md p-1 cursor-pointer hover:bg-white group/test ${
                    isFree ? "invisible" : "visible"
                  }`}
                >
                  <BiPurchaseTagAlt
                    size={24}
                    className="text-white group-hover/test:text-[#141B23]"
                  />
                  <p className="text-[13px] font-medium text-[white] group-hover/test:text-[#141B23]">
                    Buy Course
                  </p>
                </Link>
              </div>
            </>
          )}

          <Image
            className="rounded-xl w-full h-full object-cover cursor-pointer"
            src={courseImg}
            alt="courseImg"
            width={300}
            height={300}
          />
        </div>
        <div className="pt-[10px]">
          <div className="flex flex-row justify-between items-start w-full h-[75px]">
            <p className="text-white font-medium text-[15px] group-hover:text-[#141B23]">
              {courseName}
            </p>
            <div className="flex flex-col justify-center items-end">
              <p className="text-[#9a9a9a] font-bold text-[15px] line-through decoration-[1.5px] decoration-[#FD660E]">
                ${originPrice}
              </p>
              <p className="text-[#FD660E] font-bold text-[15px]">
                {isFree ? <span>Free</span> : <span>{coursePrice}ks</span>}
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#2F2E41]" />
          <div className="flex justify-between align-center py-[15px]">
            <p className="text-[#CCCCCC] text-[14px] font-light group-hover:text-[#141B23]">
              {courseAuthor}
            </p>
            <Link
              target="_blank"
              href={`${courseOriginLink}`}
              className="text-[#CCCCCC] text-[14px] font-light border-[1px] border-[#CCCCCC] px-3 py-[3px] rounded-full cursor-pointer group-hover:text-[#141B23] group-hover:border-[#141B23] whitespace-nowrap"
            >
              see original course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardItem;
