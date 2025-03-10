import { getCourses } from "@/server/actions";
import React, { Suspense } from "react";
import Image from "next/image";
import bgGradient from "../../../../public/gradientcopy.svg";
import BgSvgDotGp from "@/ui/common/BgSvgDotGp";
import CourseList from "@/ui/common/CourseList";
import { serialized } from "@/utils/serialized";
const page = async () => {
  const courseData = await getCourses();
  const serializedCourses = serialized(courseData);

  return (
    <div className="relative w-full px-[20px] lg:px-[90px] xl:px-[170px]">
      <Image
        className="absolute -right-[300px] -top-[200px] md:-right-[500px] md:-top-[600px] lg:-right-[750px] lg:-top-[600px] -z-30 w-full xl:-right-[750px] xl:-top-[600px]"
        alt="bgSvg"
        src={bgGradient}
      />
      {/* <Image
        className="absolute -left-[750px] -z-30 w-full"
        alt="bgSvg"
        src={bgGradient}
      /> */}
      <BgSvgDotGp />
      <div className="flex justify-center items-center pt-[120px]">
        <h4 className="text-white font-medium text-[30px] md:text-[45px] lg:text-[50px] xl:text-[50px]">
          <span className="font-bold text-[#FD660E]">ဘေထုပ်ကော့စ်</span> မှ
          coursesများ
        </h4>
      </div>
      <div className={`mt-[100px] pb-[200px]`}>
        <Suspense fallback={<div>Loading...</div>}>
          <CourseList ShowOnlyNew={false} courseData={serializedCourses} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
