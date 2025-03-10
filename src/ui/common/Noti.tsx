import React from "react";
import { ToastContentProps } from "react-toastify";

const Noti = ({ closeToast, isPaused, toastProps }: ToastContentProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p>Custom Progress Bar</p>
      <svg
        width="40"
        height="40"
        viewBox="-25 -25 250 250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90"
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#e0e0e0"
          stroke-width="6"
          stroke-dasharray="565.48px"
          stroke-dashoffset="0"
        />
        <circle
          r="90"
          cx="100"
          cy="100"
          stroke="#76e5b1"
          stroke-width="16px"
          stroke-linecap="round"
          fill="transparent"
          stroke-dasharray="565.48px"
          // animation inside index.css
          className="radial-progress"
          onAnimationEnd={() => closeToast()}
          style={{
            animationDuration: `${toastProps.autoClose}ms`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        />
      </svg>
    </div>
  );
};

export default Noti;
