import { courseType } from "@/types";

export const filterCheck = (
  courses: courseType[],
  category: string,
  searchValue: string
) => {
  if (searchValue === "") {
    if (category === "All Courses") {
      return courses;
    }
  } else {
    return courses.filter((course) =>
      course.courseName.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return courses.filter((course) => course.courseTag === category);
};
