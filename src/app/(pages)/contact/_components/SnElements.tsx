import Link from "next/link";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { PiTelegramLogo, PiTiktokLogoLight } from "react-icons/pi";

const SnElements = () => {
  return (
    <div className="max-w-[350px] w-full flex flex-col gap-y-5">
      <Link
        href={"https://www.facebook.com/share/1P1phwHWwc/?mibextid=wwXIfr"}
        target="_blank"
        className="flex border-[1px] border-[#CCCCCC] w-full items-center rounded-full gap-x-2 p-2 relative cursor-pointer hover:bg-[#212c39] transition-all"
      >
        <FiFacebook
          size={30}
          className="text-[#CCCCCC] border border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] "
        />
        <p className="text-[#CCCCCC] text-lg font-normal">Facebook</p>
        <IoIosArrowForward
          size={23}
          className="text-[#CCCCCC] absolute right-5"
        />
      </Link>
      <div className="flex border-[1px] border-[#CCCCCC] w-full items-center rounded-full gap-x-2 p-2 relative cursor-pointer hover:bg-[#212c39] transition-all">
        <PiTiktokLogoLight
          size={30}
          className="text-[#CCCCCC] border border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] "
        />
        <p className="text-[#CCCCCC] text-lg font-normal">Tiktok</p>
        <IoIosArrowForward
          size={23}
          className="text-[#CCCCCC] absolute right-5"
        />
      </div>
      <Link
        href={"https://t.me/+KlCZqmt-ui5lMmNl"}
        target="_blank"
        className="flex border-[1px] border-[#CCCCCC] w-full items-center rounded-full gap-x-2 p-2 relative cursor-pointer hover:bg-[#212c39] transition-all"
      >
        <PiTelegramLogo
          size={30}
          className="text-[#CCCCCC] border border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] "
        />
        <p className="text-[#CCCCCC] text-lg font-normal">Telegram</p>
        <IoIosArrowForward
          size={23}
          className="text-[#CCCCCC] absolute right-5"
        />
      </Link>
    </div>
  );
};

export default SnElements;
