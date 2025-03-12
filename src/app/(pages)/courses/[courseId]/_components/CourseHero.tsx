"use client";
import React from "react";
import Image from "next/image";
import bgGradient from "../../../../../../public/gradientcopy.svg";
import formatDate from "@/utils/useFormatDate";
import { singleCourseDataType } from "@/types/index";
import useThresholdScroll from "@/hooks/useThresholdScroll";
import Link from "next/link";
const CourseHero = ({
  singleCourseData,
  courseId,
}: {
  singleCourseData: singleCourseDataType;
  courseId: string;
}) => {
  const [isFixed] = useThresholdScroll();
  return (
    <div className="w-full relative h-[350px] lg:h-[500px]">
      <div className="absolute w-full h-full bg-black opacity-80 z-10" />
      <Image
        className="absolute -right-[300px] -top-[200px] md:-right-[500px] md:-top-[600px] lg:-right-[750px] lg:-top-[600px] -z-30 w-full xl:-right-[750px] xl:-top-[600px]"
        alt="bgSvg"
        src={bgGradient}
      />
      <Image
        className="absolute -left-[270px] sm:-left-[300px] -z-30 w-full md:-left-[500px] lg:-left-[750px] xl:-left-[750px]"
        alt="bgSvg"
        src={bgGradient}
      />
      <Image
        src={singleCourseData?.courseImg}
        alt={singleCourseData?.courseName}
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-between items-center z-20 absolute w-full h-full px-[20px] lg:px-[90px] xl:px-[160px] gap-x-10 top-[50%] -translate-y-[50%]">
        <div className="flex-[7]">
          <p className="text-[#FD660E] text-base font-medium my-3 md:my-7">
            အခု course ကတော့
          </p>
          <h4 className="text-white text-[30px] md:text-[50px] font-montserrat font-bold md:leading-[70px] leading-[30px] mb-3">
            {singleCourseData?.courseName}
          </h4>
          <p className="text-[15px] md:text-[17px] text-[#CCCCCC] font-nunito">
            {singleCourseData?.courseIntro}
          </p>
        </div>
        <div className="flex-[0] md:flex-[4] relative">
          <div
            className={`max-w-[320px] hidden md:block mt-10 md:mt-0 w-full px-[10px] pt-[10px] border border-[#2D333E] bg-[#141B23] rounded-xl absolute ${
              isFixed ? " top-[300px] transition-all" : "top-0 transition-all"
            }`}
          >
            <div className="w-full h-[200px]">
              <Image
                className="rounded-xl w-full h-full object-cover cursor-pointer"
                src={singleCourseData?.courseImg}
                alt="courseImg"
                width={300}
                height={300}
              />
            </div>
            <div className="pt-[10px]">
              <p className="text-[12px] font-light text-[#b1b1b1] font-nunito ">
                *Recommended course
              </p>
              <div className="flex justify-between items-center mt-[10px]">
                <div>
                  <p className="text-[white] font-semibold text-[17px] font-nunito">
                    Course Updated on
                  </p>

                  <p className="text-[#CCCCCC] font-medium text-[15px] font-nunito">
                    {formatDate(singleCourseData?.date.seconds)}
                  </p>
                </div>
                <div>
                  <p className="text-[white] font-semibold text-[17px] font-nunito">
                    language
                  </p>
                  <p className="text-[#CCCCCC] font-medium text-[15px] font-nunito">
                    English
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#2D333E] my-4" />
              <p className="text-[#CCCCCC] font-medium text-[15px] font-nunito">
                Now at{" "}
                <span className="text-[#9a9a9a] font-bold line-through decoration-[1.5px] decoration-[#FD660E]">
                  ${singleCourseData?.originPrice}
                </span>{" "}
                <span className="text-[#FD660E] font-bold">
                  {singleCourseData?.coursePrice} Ks
                </span>
              </p>
              <Link
                href={`/payment/${courseId}?courseName=${singleCourseData.courseName}&coursePrice=${singleCourseData.coursePrice}`}
                className="w-full border border-[#FD660E] rounded-xl flex justify-center items-center mt-[16px] mb-[10px] hover:text-white hover:bg-[#FD660E] transition-all duration-300 group/cardBtn"
              >
                <p className="text-[#FD660E] py-2 group-hover/cardBtn:text-white transition-all duration-300">
                  ဝယ်မည်
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
