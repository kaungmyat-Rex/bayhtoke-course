import React from "react";
import bgdotgray from "../../../public/bg-dot-gray.svg";
import bgdotorange from "../../../public/bg-dot-orange.svg";
import Image from "next/image";

interface props {
  color: string;
  stylePosition: string;
  positionTop: string;
}

const BgSvgDot = ({ color, stylePosition, positionTop }: props) => {
  return (
    <Image
      src={color === "gray" ? bgdotgray : bgdotorange}
      alt="bg-dot"
      className={stylePosition}
      width={12}
      height={12}
      style={{
        top: positionTop,
      }}
    />
  );
};

export default BgSvgDot;
