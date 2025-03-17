"use client";
import React from "react";
import CourseCardItem from "./CourseCardItem";
import { courseType } from "@/types/index";
import { HiOutlineSelector } from "react-icons/hi";
import { categories } from "@/constants/category";
import { filterCheck } from "@/utils/filterCheck";
interface props {
  ShowOnlyNew: boolean;
  courseData: courseType[];
}

const CourseList = ({ ShowOnlyNew, courseData }: props) => {
  const [selectCategory, setSelectCategory] =
    React.useState<string>("All Courses");
  const [openCategory, setOpenCategory] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");

  return (
    <div>
      {ShowOnlyNew ? (
        <></>
      ) : (
        <div className="flex justify-start items-center">
          <div className="relative">
            <p
              onClick={() => {
                setOpenCategory(!openCategory);
              }}
              className="text-[#CCCCCC] text-[15px] font-normal flex justify-center items-center gap-x-2 border border-[#2D333E] p-2 rounded-md relative cursor-pointer whitespace-nowrap"
            >
              {selectCategory}
              <HiOutlineSelector
                size={19}
                className="text-[#CCCCCC] mt-[2px]"
              />
            </p>
            {openCategory && (
              <div className="absolute w-[250px] bg-[#141B23] border border-[#2D333E] z-10 -bottom-[250px] rounded-md">
                {categories.map((category) => {
                  return (
                    <p
                      onClick={() => {
                        setSelectCategory(category.name);
                        setOpenCategory(false);
                        setSearchValue("");
                      }}
                      className="text-[#CCCCCC] p-2 hover:bg-[#202b38] cursor-pointer"
                      key={category.id}
                    >
                      {category.name}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          <div className="max-w-[300px] min-w-[250px] w-full h-[40px] ml-[20px]">
            <input
              className="w-full h-full border border-[#2D333E] rounded-md p-2 text-[#CCCCCC] bg-[#141B23]"
              type="text"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              placeholder="Search"
            />
          </div>
        </div>
      )}
      <div className="flex justify-center items-center md:justify-center lg:justify-start xl:justify-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[10px] gap-y-[30px] pt-[50px]">
          {ShowOnlyNew
            ? courseData.slice(0, 4).map((course: courseType) => {
                return (
                  <div key={course.id}>
                    <CourseCardItem
                      id={course.id}
                      courseName={course.courseName}
                      coursePrice={course.coursePrice}
                      courseOriginLink={course.courseOriginLink}
                      originPrice={course.originPrice}
                      courseImg={course.courseImg}
                      courseAuthor={course.courseAuthor}
                      isFree={course.isFree}
                      isNew={true}
                    />
                  </div>
                );
              })
            : filterCheck(courseData, selectCategory, searchValue).map(
                (course: courseType) => {
                  return (
                    <div key={course.id}>
                      <CourseCardItem
                        id={course.id}
                        courseName={course.courseName}
                        coursePrice={course.coursePrice}
                        courseOriginLink={course.courseOriginLink}
                        originPrice={course.originPrice}
                        courseImg={course.courseImg}
                        courseAuthor={course.courseAuthor}
                        isFree={course.isFree}
                        isNew={false}
                      />
                    </div>
                  );
                }
              )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
