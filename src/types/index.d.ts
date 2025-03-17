// import { Timestamp } from "firebase/firestore";
export interface MenuType {
  id: number;
  title: string;

  path: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface courseType {
  id: string;
  coursePrice: number;
  courseOriginLink: string;
  originPrice: number;
  courseTag: string;
  courseName: string;
  courseAuthor: string;
  courseIntro: string;
  courseDescription: string;
  courseGmailUrl: string;
  date: { seconds: number; nanoseconds: number };
  courseImg: string;
  isFree: boolean;
}

export interface singleCourseDataType {
  courseTag: string;
  courseIntro: string;
  courseDescription: string;
  courseName: string;
  coursePrice: number;
  courseAuthor: string;
  courseOriginLink: string;
  originPrice: number;
  courseImg: string;
  courseGmailUrl: string;
  date: { seconds: number; nanoseconds: number };
  isFree: boolean;
}
