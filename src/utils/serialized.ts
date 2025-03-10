import { courseType } from "@/types";

export const serialized = (courseData: courseType[]) => {
  const serializedCourses = courseData.map((course) => ({
    ...course,
    date: {
      seconds: course.date.seconds,
      nanoseconds: course.date.nanoseconds,
    },
  }));

  return serializedCourses;
};
