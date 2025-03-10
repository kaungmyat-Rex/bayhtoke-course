import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Learn More, Pay Less – Affordable Online Courses form Udemy, Domestika and so on",
};

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default CourseLayout;
