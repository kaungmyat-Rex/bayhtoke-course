import React from "react";
import Image from "next/image";
import bgGradient from "../../../../../public/gradientcopy.svg";
import BgSvgDotGp from "@/ui/common/BgSvgDotGp";
import BillingFormElements from "./_components/BillingFormElements";
import BillingCourseInfo from "./_components/BillingCourseInfo";

const page = () => {
  return (
    <section className="relative px-[20px] lg:px-[90px] xl:px-[170px] w-full">
      <Image
        className="absolute -right-[300px] -top-[200px] md:-right-[500px] md:-top-[700px] lg:-right-[750px] lg:-top-[700px] -z-30 w-full xl:-right-[750px] xl:-top-[700px]"
        alt="bgSvg"
        src={bgGradient}
      />
      <BgSvgDotGp />
      <div className="flex justify-center items-center pt-[100px]">
        <h4 className="font-medium text-[30px] font-montserrat text-white">
          <span className="text-[#FD660E]">Billing</span>Detail
        </h4>
      </div>
      <div className="flex justify-center items-start py-14 flex-col-reverse lg:flex-row md:px-[50px]">
        <div className="flex-[4] pt-20 lg:pt-0">
          <p className="text-[14px] font-nunito text-[#CCCCCC] font-light">
            <span className="font-semibold">Imoportant note! </span>*Form
            များကို မှန်ကန်စွာ ဖြည့်ပေးပါ ။ gmailကို ယခုလက်ရှိ အသုံးပြုနေသော
            gmail account ထည့်ပေးပါ (gmail မှ course download link ရရှိမှာ
            ဖြစ်လို့ပါ)
          </p>
          <BillingFormElements />
        </div>
        <div className="w-[1px] h-[350px] bg-[#2D333E] mx-14 hidden lg:block" />
        <div className="flex-[5] w-full">
          <BillingCourseInfo />
        </div>
      </div>
    </section>
  );
};

export default page;
