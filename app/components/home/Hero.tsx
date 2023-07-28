"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col max-md:items-center gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="pt-36 padding-x z-10">
        <h1 className="xl:text-[72px] sm:text-[42px] text-[30px] font-extrabold max-md:mx-auto select-none">
          クイズ <br className="hidden md:block" />
          これ何のWiki?
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[27px] text-black font-light mt-2 sm:mt-5 max-md:text-center select-none">
          あなたの知識を試してみませんか？
        </p>
        <a href="#select">
          <CustomButton
            title="クイズに挑戦"
            containerStyles="bg-teal-500 text-white rounded-full mt-4 sm:mt-10 mx-auto md:ml-12"
          />
        </a>
      </div>
      <div className="xl:flex-[1.5] flex justify-center md:justify-end items-end w-[80%] xl:h-screen z-0">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[300px] md:h-[590px] z-0">
          <Image
            src="/icons8-wiki.svg"
            alt="hero"
            fill
            className="object-contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
