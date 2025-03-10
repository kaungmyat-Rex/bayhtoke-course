import React, { Suspense } from "react";
import bgGradient from "../../../public/gradientcopy.svg";
import Image from "next/image";
import heroImg from "../../../public/heroImage.svg";
import BgSvgDotGp from "@/ui/common/BgSvgDotGp";
import SeeAllBtn from "@/ui/common/SeeAllBtn";
import FaqItem from "@/ui/common/FaqItem";
import CourseList from "@/ui/common/CourseList";
import { getCourses } from "@/server/actions";
import Link from "next/link";

const Home = async () => {
  //course data fetch (server action)
  const courseData = await getCourses();

  const serializedCourses = courseData.map((course) => ({
    ...course,
    date: {
      seconds: course.date.seconds,
      nanoseconds: course.date.nanoseconds,
    },
  }));

  return (
    <section className="relative w-full px-[20px] lg:px-[90px] xl:px-[160px]">
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
      <BgSvgDotGp />
      <div className="flex flex-row justify-between items-center w-full pt-[150px] gap-x-[150px] pb-[200px]">
        <div>
          <h1 className="text-white font-medium text-[30px] md:text-[45px] lg:text-[50px] xl:text-[50px]">
            မင်္ဂလာပါ 
            <br />
            <span className="font-bold text-[#FD660E]">ဘေထုပ်ကော့စ် မှ</span>
            <br />
            ကြိုဆိုပါတယ်ခင်ဗျာ။
          </h1>
          <p className="text-white font-light text-[15px] mt-10 leading-[30px]">
            ဘေထုပ်ကော့စ် မှ udemy နှင့် အခြား platform များမှ ‌‌စျေးကြီး courses
            များကို စျေးသက်သာစွာနဲ့ <br /> ဝယ်ယူရရှိ နိုင်ပါပြီ ခင်ဗျာ
          </p>
          <div className="mt-10">
            <Link
              href={"/contact"}
              className="border border-white text-white rounded-full px-6 py-2 pb-3 hover:bg-[#CBBDB4] hover:text-[#141B23] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Image
          src={heroImg}
          alt="heroImage"
          width={100}
          height={100}
          className="hidden w-full lg:max-w-[350px] lg:block xl:max-w-[450px] xl:block"
        />
      </div>
      {/* section 2 */}

      <div>
        <h4 className="text-white font-semibold text-[27px] font-montserrat md:text-[30px] lg:text-[35px] xl:text-[35px]">
          Explore
        </h4>
        <p className="text-[#FD660E] font-montserrat font-semibold text-[27px] md:text-[30px] lg:text-[35px] xl:text-[35px]">
          New Courses
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseList ShowOnlyNew={true} courseData={serializedCourses} />
      </Suspense>

      <SeeAllBtn />

      {/* section 3 */}
      <div className="w-full flex flex-col justify-center items-center py-[100px] px-[20px] md:px-[50px] lg:px-[100px] xl:px-[100px]">
        <h4 className="text-[#FD660E] font-montserrat font-semibold text-[35px]">
          FAQ
        </h4>
        <FaqItem
          question="ဘေထုပ်ကောစ့် က ဘာကြီးလဲ / ဘာအတွက်လဲ?"
          answer="ဤwebsiteက ဘေထုပ်ကော့စ် ဆိုတဲ့ နမည်အတိုင်း udemyနဲ့အခြားသော နမည်ကြီး platform များမှ စျေးကြီးပေးဝယ်ရသော coursesများကို စျေးနည်းနည်းနဲ့ ရရှိပြီး အဆင်ပြေ လေ့လာနိုင်အောင် ပြုလုပ်ပေးထားသော website ဖြစ်ပါတယ်ဗျာ။"
        />
        <FaqItem
          question="ဘေထုပ်ကော့စ်မှာ ဘယ်လို courses တွေ ဝယ်ယူရရှိနိုင်မှာလဲ?"
          answer="ဘေထုပ်ကော့စ်မှာ Programming, web development , uiux and graphic design အစရှိသော skills များနဲ့ သက်ဆိုင်သော courses များ ရရှိနိုင်ပါတယ်ဗျာ။"
        />
        <FaqItem
          question="ဘေထုပ်ကော့စ်မှာ ဘယ်လို payment နဲ့ ဝယ်ယူနိုင်ပါသလဲ?"
          answer="အခုလက်ရှိတော့ ဘေထုပ်ကော့စ်မှာ KBZ နဲ့ဘဲ payment လက်ခံပါတယ်ဗျာ"
        />
        <FaqItem
          question="ဘေထုပ်ကော့စ်မှ ဝယ်ယူပြီးသော courses များကို ဘယ်နေရာမှာ ကြည့်ရှူ့ရမှာလဲ။?"
          answer="ဘေထုပ်ကော့စ်မှ လူကြီးမင်းတို့ payment process တွင်ထည့်ပေးခဲ့သော gmailမှ Google drive download link များ ပေးမှာဖြစ်ပြီး life time access ရနေမှာဖြစ်ပါတယ်ဗျာ။"
        />
      </div>
    </section>
  );
};

export default Home;
