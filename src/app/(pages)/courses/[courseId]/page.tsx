import { getCourse, getCourses } from "@/server/actions";
import React, { cache } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CourseHero from "./_components/CourseHero";
import Link from "next/link";
import defaultOpengraphImage from "../../../opengraph-image.png";
import Image from "next/image";
import formatDate from "@/utils/useFormatDate";
type Params = Promise<{ courseId: string }>;

const cacheGetCourse = cache(getCourse);

export async function generateStaticParams() {
  const courseData = await getCourses();

  return courseData.map((course) => ({
    courseId: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { courseId } = await params;
  const courseData = await cacheGetCourse(courseId);

  return {
    title: courseData.courseName,
    openGraph: {
      title: courseData.courseName,
      type: "website",
      images: [
        {
          url: courseData.courseImg || defaultOpengraphImage,
          width: 1200,
          height: 630,
          alt: courseData.courseName,
        },
      ],
    },
  };
}

const page = async ({ params }: { params: Params }) => {
  const { courseId } = await params;
  const singleCourseData = await cacheGetCourse.bind(null, courseId)();

  const formatSingleCourseData = {
    courseTag: singleCourseData.courseTag,
    courseIntro: singleCourseData.courseIntro,
    courseDescription: singleCourseData.courseDescription,
    courseName: singleCourseData.courseName,
    coursePrice: singleCourseData.coursePrice,
    courseAuthor: singleCourseData.courseAuthor,
    courseOriginLink: singleCourseData.courseOriginLink,
    originPrice: singleCourseData.originPrice,
    courseImg: singleCourseData.courseImg,
    isFree: singleCourseData.isFree,
    courseGmailUrl: singleCourseData.courseGmailUrl,
    date: {
      seconds: singleCourseData.date.seconds,
      nanoseconds: singleCourseData.date.nanoseconds,
    },
  };

  return (
    <div className="w-full">
      <CourseHero
        singleCourseData={formatSingleCourseData}
        courseId={courseId}
      />

      <div className="flex justify-center items-center">
        <div
          className={`max-w-[320px] md:hidden block w-full px-[10px] pt-[10px] border border-[#2D333E] bg-[#141B23] rounded-xl`}
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
      <div className="w-full px-[20px] lg:px-[90px] xl:px-[150px] flex justify-start items-start pb-[100px]">
        <div className="flex-[7]">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-end gap-x-5 mt-5 mb-10">
            <div className="flex justify-start items-end gap-x-5">
              <div className="">
                <p className="text-[white] font-semibold text-[17px] font-nunito py-3">
                  Created By
                </p>

                <p className="text-[#CCCCCC] font-medium text-[15px] font-nunito border-[2px] border-[#CCCCCC] rounded-md p-3 bg-[#141B23]">
                  {singleCourseData?.courseAuthor}
                </p>
              </div>
              <div className="">
                <p className="text-[white] font-semibold text-[17px] font-nunito py-3">
                  Course Tag
                </p>
                <p className="text-[#CCCCCC] font-medium text-[15px] font-nunito border-[2px] border-[#CCCCCC] rounded-md p-3 bg-[#141B23]">
                  {singleCourseData?.courseTag}
                </p>
              </div>
            </div>
            <Link
              href={`${singleCourseData?.courseOriginLink}`}
              target="_blank"
              className="text-[#CCCCCC] mt-5 md:mt-0 whitespace-nowrap font-medium text-[15px] font-nunito border-[2px] border-[#FD660E] rounded-full p-3 flex justify-center items-center hover:text-white hover:bg-[#FD660E] transition-all duration-300"
            >
              View original price
              <IoIosArrowForward size={25} />
            </Link>
          </div>
          <div className="w-full pb-[170px]">
            <h4 className="font-montserrat text-[25px] text-white font-medium mb-5">
              Course <span className="text-[#FD660E]">Description</span>
            </h4>
            <p className="text-[#CCCCCC] font-medium font-nunito text-[15px] leading-6">
              {singleCourseData?.courseDescription}
            </p>
          </div>
        </div>
        <div className="flex-[4] hidden md:block" />
      </div>
    </div>
  );
};

export default page;
