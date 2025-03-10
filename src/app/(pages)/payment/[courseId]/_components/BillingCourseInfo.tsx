"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { IoIosCopy } from "react-icons/io";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
const BillingCourseInfo = () => {
  const searchParams = useSearchParams();

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText("09971569482");
    toast("copied 09971569482");
  };

  return (
    <div>
      <ToastContainer
        icon={<MdOutlineNotificationImportant size={24} />}
        hideProgressBar={true}
        toastClassName="bg-transparent backdrop-blur-sm border border-[#CCCCCC] text-white"
        closeOnClick={true}
        closeButton={false}
        autoClose={2000}
      />
      <p className="text-[14px] font-nunito text-[#CCCCCC] font-light pb-10">
        လူကြီးမင်း ဝယ်ယူလိုသော course မှာ
      </p>
      <p className="text-[30px] font-montserrat text-white font-medium">
        {searchParams?.get("courseName")}
      </p>
      <p className="text-[20px] font-nunito text-white py-2">
        Amount -{" "}
        <span className="text-[#FD660E]">
          {searchParams?.get("coursePrice")}Ks
        </span>
      </p>
      <p className="text-[14px] font-nunito text-[#CCCCCC] font-light border border-[#CCCCCC] p-3 rounded-md mt-3">
        <span className="flex justify-start items-center gap-x-5 text-[#FD660E] font-bold">
          09971569482
          <span
            onClick={() => copyPhoneNumber()}
            className="flex items-center justify-center border border-[#a8a8a8] text-white p-2 rounded-md cursor-pointer mb-2"
          >
            <IoIosCopy />
            Copy Ph-number
          </span>
        </span>
        (kbzpay) ဖြင့် {searchParams?.get("coursePrice")} ကျပ် သွင်းပေးပါ။ Form
        ဖြည့်ရာတွင် screenshot ပုံရွေးပီး ပို့ပေးပါ ၂၄နာရီအတွင်း
        လူကြီးမင်းပို့ထားသော Gmailမှ download link ပို့ ထားပေးမှာဖြစ်ပါတယ်။
      </p>
    </div>
  );
};

export default BillingCourseInfo;
