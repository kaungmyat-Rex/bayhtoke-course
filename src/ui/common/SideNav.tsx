"use client";
import React from "react";
import { MenuType } from "@/types";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogo, PiTiktokLogoLight } from "react-icons/pi";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  MENU: MenuType[];
  pathname: string;
}

const SideNav = ({ toggle, MENU, pathname, setToggle }: Props) => {
  return (
    <div className={`sidenav-section ${toggle ? "sidenav-section-show" : ""}`}>
      <div className="w-full mt-16 px-[20px] pt-[70px] relative">
        <nav className="flex flex-col items-end justify-center gap-y-[20px]">
          {MENU.map((item) => {
            return (
              <Link
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className={`${
                  pathname === item.path ? "text-white" : "text-[#a7a9ae]"
                } text-[32px] font-semibold tracking-wider cursor-pointer flex gap-x-[20px]`}
                key={item.id}
                href={item.path}
              >
                {item.title}
                {pathname === item.path && (
                  <span className="w-[2px] bg-[#FD660E]" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-center items-center gap-x-[10px] absolute bottom-20 left-[50%] -translate-x-[50%]">
          <p className="text-[#CCCCCC] text-[14px] font-normal">Follow us on</p>

          <FiFacebook
            size={28}
            className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
          />
          <PiTiktokLogoLight
            size={28}
            className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
          />
          <PiTelegramLogo
            size={28}
            className="text-[#CCCCCC] border-2 border-[#CCCCCC] p-[3px] rounded-full hover:bg-[#CBCED3] hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
