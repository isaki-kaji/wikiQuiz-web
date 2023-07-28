"use client";

import Image from "next/image";
import { CustomButtonProps } from "../types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        // btnTypeが指定されていなかったらbuttonになる
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
