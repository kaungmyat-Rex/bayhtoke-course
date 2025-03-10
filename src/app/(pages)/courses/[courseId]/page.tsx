import { getCourse, getCourses } from "@/server/actions";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CourseHero from "./_components/CourseHero";
import Link from "next/link";
type Params = Promise<{ courseId: string }>;

export async function generateStaticParams() {
  const courseData = await getCourses();

  return courseData.map((course) => ({
    courseId: course.id,
  }));
}

const page = async ({ params }: { params: Params }) => {
  const { courseId } = await params;
  const singleCourseData = await getCourse.bind(null, courseId)();

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
      <div className="w-full px-[150px] flex justify-start items-start pb-[100px] ">
        <div className="flex-[7] ">
          <div className="flex justify-start items-end gap-x-5 mt-5 mb-10">
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
            <Link
              href={`${singleCourseData?.courseOriginLink}`}
              target="_blank"
              className="text-[#CCCCCC] font-medium text-[15px] font-nunito border-[2px] border-[#FD660E] rounded-full p-3 flex justify-center items-center hover:text-white hover:bg-[#FD660E] transition-all duration-300"
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
        <div className="flex-[4]" />
      </div>
    </div>
  );
};

export default page;
