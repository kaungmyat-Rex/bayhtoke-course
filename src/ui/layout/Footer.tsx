import React from "react";
import logoImg from "../../../public/logoImage/bayhtokelogo.png";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogoLight, PiTelegramLogo } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center w-full backdrop-blur-lg border-t border-[#2D333E] px-[20px] lg:px-[90px] xl:px-[170px] py-10">
      <div className="flex justify-center items-center max-w-[200px] w-0 md:w-full">
        <Image
          src={logoImg}
          alt="logo"
          width={100}
          height={100}
          className="w-[40px] h-[40px] object-contain hidden md:block"
        />
        <p className="text-[#CCCCCC] font-normal text-[14px] break-words hidden md:block">
          Bayhtoke Courses
        </p>
      </div>
      <p className="text-[#CCCCCC] text-[14px] font-normal">
        ©2025 Bayhtoke courses. All rights reserved.
      </p>

      <div className="flex justify-center items-center gap-x-[10px]">
        <p className="text-[#CCCCCC] text-[14px] font-normal">Follow us on</p>
        <Link
          target="_blank"
          href={"https://www.facebook.com/share/1P1phwHWwc/?mibextid=wwXIfr"}
        >
          <FiFacebook
            size={28}
            className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
          />
        </Link>
        <PiTiktokLogoLight
          size={28}
          className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
        />
        <Link href={"https://t.me/+KlCZqmt-ui5lMmNl"} target="_blank">
          <PiTelegramLogo
            size={28}
            className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
