"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchemabilling } from "@/constants/schema";
import { createBilling, imageUpload } from "@/server/actions";
import { IoIosArrowForward } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";

import { useParams, useSearchParams } from "next/navigation";

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & { files: FileList | null };
}
type FormData = z.infer<typeof formSchemabilling>;

const BillingFormElements = () => {
  const { courseId } = useParams();
  const searchparam = useSearchParams();
  const [paymentImage, setPaymentImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchemabilling),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    if (paymentImage) {
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      const imageUrl = await imageUpload(paymentImage);

      const status = await createBilling(
        formData,
        courseId as string,
        imageUrl,
        searchparam.get("courseName") as string,
        searchparam.get("coursePrice") as string
      );
      toast(status.message);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        phone: "",
      });
      setPaymentImage(null);
    }
  }, [formState.isSubmitSuccessful, reset]);

  const handleFileChange = (e: FileChangeEvent) => {
    const file = e.target.files?.[0];

    if (file) {
      setPaymentImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4 px-1">
      <ToastContainer
        icon={<MdOutlineNotificationImportant size={24} />}
        hideProgressBar={true}
        toastClassName="bg-transparent backdrop-blur-sm border border-[#CCCCCC] text-white"
        closeOnClick={true}
        closeButton={false}
        autoClose={2000}
      />

      <div className="flex gap-x-3 w-full">
        {/* Name Field */}
        <div className="w-full">
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
        {/* Phone Number Field */}
        <div className="w-full">
          <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
            Phone Number /
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="border border-[#CCCCCC] p-2 w-full rounded-lg bg-transparent placeholder:text-[#626871] text-white font-nunito"
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
          Gmail / လက်ရှိ အသုံးပြုနေသော gmail account
        </label>
        <input
          {...register("email")}
          className="border border-[#CCCCCC] p-2 w-full rounded-lg bg-transparent placeholder:text-[#626871] text-white font-nunito"
          placeholder="Your email address"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* File Upload Field */}
      <div>
        <label className="block font-medium font-nunito text-[#CCCCCC] text-[17px] pb-2">
          Payment Screenshot /
        </label>
        <div className="w-full rounded-lg bg-transparent placeholder:text-[#626871] text-white font-nunito mt-2 flex justify-start items-start gap-x-5">
          <span className="relative text-[#CCCCCC] text-[15px] border border-[#CCCCCC] p-2 rounded-md whitespace-nowrap">
            Upload Image
            <input
              type="file"
              accept="image/jpeg, image/png, application/pdf"
              onChange={handleFileChange}
              className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
            />
          </span>
          {paymentImage && (
            <div className="relative">
              <TiDelete
                onClick={() => {
                  setPaymentImage(null);
                  setPreview("");
                }}
                size={30}
                className="absolute text-[#e14a4a] right-0 top-0 cursor-pointer"
              />
              <p className="text-[15px] font-nunito pb-2 text-[#CCCCCC]">
                {paymentImage.name}
              </p>
              <Image
                className="w-[250px] h-[350px] object-contain"
                src={preview}
                alt="previewImg"
                width={250}
                height={350}
                objectFit="contain"
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#2D333E] " />

      {/* Submit Button */}

      <button
        disabled={formState.isSubmitting || paymentImage === null}
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

export default BillingFormElements;
