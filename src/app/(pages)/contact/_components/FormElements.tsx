"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/constants/schema";
import { sendEmail } from "@/server/actions";
import { IoIosArrowForward } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../../../../css/Custom.css";

type FormData = z.infer<typeof formSchema>;

const FormElements = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    const status = await sendEmail(formData);
    toast(status.message);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <ToastContainer
        icon={<MdOutlineNotificationImportant size={24} />}
        hideProgressBar={true}
        toastClassName="bg-transparent backdrop-blur-sm border border-[#CCCCCC] text-white"
        closeOnClick={true}
        closeButton={false}
        autoClose={2000}
      />

      {/* Name Field */}
      <div className="">
        <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
          Name / အမည်
        </label>
        <input
          {...register("name")}
          className="border border-[#CCCCCC] p-2 w-full rounded-lg bg-transparent placeholder:text-[#626871] text-white font-nunito"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 font-medium font-nunito text-[16px]">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
          Email / အီးမေးလ်
        </label>
        <input
          {...register("email")}
          className="border border-[#CCCCCC] p-2 w-full rounded-lg bg-transparent placeholder:text-[#626871] text-white font-nunito"
          placeholder="Your email address"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Textarea Field */}
      <div>
        <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
          Message
        </label>
        <textarea
          {...register("message")}
          className="border border-[#CCCCCC] p-2 w-full rounded-lg bg-transparent h-24 placeholder:text-[#626871] text-white font-nunito"
          placeholder="e.g How to purchase courses on bayhtoke"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}

      <button
        disabled={formState.isSubmitting}
        type="submit"
        className="bg-transparent text-white px-4 py-2 border border-[#CCCCCC] flex justify-center items-center gap-x-2 rounded-full hover:bg-[#CBBDB4] hover:text-[#141B23] transition-all group"
      >
        Submit
        {formState.isSubmitting ? (
          <AiOutlineLoading3Quarters
            size={21}
            className="text-[#CCCCCC] group-hover:text-[#141B23] animate-spin "
          />
        ) : (
          <IoIosArrowForward
            size={21}
            className="text-[#CCCCCC] group-hover:text-[#141B23] transition-all"
          />
        )}
      </button>
    </form>
  );
};

export default FormElements;
