"use client";
import React from "react";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ toggle, setToggle }: Props) => {
  return (
    <div className="block sm:hidden">
      <div
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className={`icon nav-icon-1 ${toggle ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
