"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../public/logoImage/bayhtokelogo.png";
import { MENU } from "@/constants/menu";
import { usePathname } from "next/navigation";
import useNavScroll from "@/hooks/useNavScroll";
import Hamburger from "../common/Hamburger";
import SideNav from "../common/SideNav";

const Header = () => {
  const pathname = usePathname();
  const [scroll] = useNavScroll();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <div
        className={`fixed flex flex-row justify-between items-center w-full h-16 px-[20px] lg:px-[90px] xl:px-[170px] z-40 ${
          scroll ? "backdrop-blur-lg border-b border-[#2D333E]" : ""
        }`}
      >
        <div className="flex flex-row items-center max-w-[200px] w-full">
          <Image
            src={logoImage}
            alt="logo"
            width={100}
            height={100}
            className="w-[60px] h-[60px] object-contain"
          />
          <h3 className="text-white font-semibold text-[19px] break-words">
            ဘေထုပ်ကော့စ်
          </h3>
        </div>
        <div className="hidden sm:block">
          <nav className="flex flex-row justify-end items-center gap-x-[38px]">
            {MENU.map((item) => {
              return (
                <Link
                  className={`${
                    pathname === item.path ? "text-white" : "text-[#a7a9ae]"
                  } text-[16px] font-semibold tracking-wider cursor-pointer`}
                  key={item.id}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <Hamburger toggle={toggle} setToggle={setToggle} />
      </div>

      <SideNav
        toggle={toggle}
        setToggle={setToggle}
        MENU={MENU}
        pathname={pathname}
      />
    </header>
  );
};

export default Header;
